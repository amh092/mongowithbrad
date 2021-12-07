// modules used in th APP 
const express = require('express')
const router = express.Router();
const bcrypt = require('bcryptjs');
const gravatar = require('gravatar')
const {
  check,
  validationResult
} = require('express-validator')
const User = require('../../model/User')
const jwt = require('jsonwebtoken');
const config = require('config')
require('../../')

// express validation checks between the brackets [ ]

//@route      post api/users
//@desc       registering new users 
//@access     public 

// post starts 
router.post('/', [
    check('name', 'name is required').not().isEmpty(),
    check('email', 'pleas include valid email ').isEmail(),
    check('password', 'please enter a valid password').isLength({
      min: 6
    })
  ],
  // using async and await with promises 

  async (req, res) => {
    // this code will validate our request and return error massage as json 
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()
      })
    }
    const {
      name,
      email,
      password,
      avatar
    } = req.body;
    try {
      // check if user exits 
      let user = await User.findOne({
        email
      });

      if (user) {
        res.status(400)
      }
      //Get user gravatar
      const avatar = gravatar.url(email, {
        s: '200',
        r: 'PG',
        d: 'mm'

      })
      // creating new user 
      user = new User({
        email,
        name,
        password,
        avatar
      })
      //Encrypt user password

      const salt = await bcrypt.genSalt(10)
      user.password = await bcrypt.hash(password, salt)
      // using await because it a promise 
      await user.save()
      // creating the payload 
      const payload = {
        user: {
          id: user.id
        }
      };
      // creating the json web token and time for the token to be expired and calling the toke from the default.json  
      jwt.sign(payload,
        config.get('jwtSecret'), {
          expiresIn: '24h'
        },
        (err, token) => {
          if (err) throw err;
          res.json({
            email,token,password,name
          })
        }
      );
      // sending a massage to the client user is registered 
    }
    // catch errors and send them to the client with 500 status internal server error 
    catch (err) {
      console.error(err.massage)
      res.status(500).send('something wrong')
    }
  })
// post ends  


// exporting this module to server.js 
module.exports = router;