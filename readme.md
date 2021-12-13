creating npm run in package.json 
solving the issue of 

importing react router and wrap all elements inside of it 

start using react router dom 

=========================
how to kill ports on mac 
 lsof -i :3000 

=================
 () => ({ name: 'Amanda' })  // Shorthand to return an object
 That is equivalent to:
() => {
   return { name : 'Amanda' }
}

==========

deduped means 
deduped is short for "deduplicated" (duplicates were removed). The documentation for npm dedupe explains how npm does this:

==========

for any component interaction with redux  "connect" is used to link react component to redux actions 
==============

Anthony: What's up with those parentheses, teacher?

Teacher: Ah yes, the arrow function. What a lovely mess of syntax. Let's imagine a function, as so:

const haha = () => {
    return 'haha';
};
Anthony: Yeah, that's a pretty simple function. There's just the return statement, returning a string.

Teacher: You are indeed correct. It is returning a string. There is however a short-hand form.

Anthony: Interesting.. what does it look like?

Teacher: Like so:

const haha = () => 'haha';
Anthony: Dang! Not only is return gone, the curly braces are gone too! It's that simple?

Teacher: Indeed. This works the same for returning numbers, booleans, arrays, etc.

const returnPi = () => 3.14;
const isAnthonyAwesome = () => true;
const getFavoriteNumbers = () => [14, 1000000, 0];
Anthony: Wow, that looks so clean.

Teacher: Okay. Now let me ask you.. to create an arrow function that returns an object.

Anthony: Easy enough. Okay, here it is:

const myDog = () => { name: 'fluffy', breed: 'poodle' };
Teacher: No, that is wrong.

Anthony: What, how? It's the same format as the ones you wrote earlier!

Teacher: It is wrong because remember that when you have curly braces after the arrow (=>), JavaScript thinks you're starting a function body and to interpret the contents as actual statements.

Anthony: Oh.

Teacher: In order to return an object, you'll need to surround the entire object with parentheses:

const myDog = () => ({ name: 'fluffy', breed: 'poodle' });
Anthony: Oh..

Teacher: Yes, it's the one exception to the rule.

Anthony: Thank you, teacher. Cmon Fluffy, let's go home. I have some coding to do!