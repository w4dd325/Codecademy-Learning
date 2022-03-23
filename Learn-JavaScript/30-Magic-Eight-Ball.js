/*
1. In the first line of the program, define a variable called userName that is set to an empty string.
If the user wants, they can enter their name in between the quotation marks.
*/
let userName = 'James';

/*
2. Below this variable, create a ternary expression that decides what to do if the user enters a name or not. If the user enters a name — like 'Jane' — use string interpolation to log Hello, Jane! to the console. Otherwise, simply log Hello!.
*/
userName ? console.log(`Hello,${userName}!`) : console.log('Hello!');

/*
3. Create a variable named userQuestion. The value of the variable should be a string that is the question the user wants to ask the Magic Eight Ball.
*/
let userQuestion = 'Is this my question?';

/*
4. Write a console.log() for the userQuestion, stating what was asked. You can include the user’s name in the console.log() statement, if you wish!
*/
userName ? console.log(`${userName} asked: ${userQuestion}`) : console.log(`Unknown user asked: ${userQuestion}`);

/*
5.We need to generate a random number between 0 and 7.
Create another variable, and name it randomNumber. Set it equal to this expression, which uses two methods (Math.floor() and Math.random()) from the Math library.
*/
let randomNumber = Math.floor(Math.random() * 8);

/*
6. Create one more variable named eightBall, and set it equal to an empty string. We will save a value to this variable in the next steps, depending on the value of randomNumber.
*/
let eightBall = '';

/*
7. We need to create a control flow that takes in the randomNumber we made in step 5, and then assigns eightBall to a reply that a Magic Eight Ball would return. Think about utilizing if/else or switch statements. Here are 8 Magic Eight Ball phrases that we’d like to save to the variable eightBall:

'It is certain'
'It is decidedly so'
'Reply hazy try again'
'Cannot predict now'
'Do not count on it'
'My sources say no'
'Outlook not so good'
'Signs point to yes'

If the randomNumber is 0, then save an answer to the eightBall variable; if randomNumber is 1, then save the next answer, and so on. If you’re feeling creative, make your own responses!
*/
switch (randomNumber) {
    case 0:
        eightBall = 'It is certain';
        break;
    case 1:
        eightBall = 'It is decidedly so';
        break;
    case 2:
        eightBall = 'Reply hazy try again';
        break;
    case 3:
        eightBall = 'Cannot predict now';
        break;
    case 4:
        eightBall = 'Do not count on it';
        break;
    case 5:
        eightBall = 'My sources say no';
        break;
    case 6:
        eightBall = 'Outlook not so good';
        break;
    case 7:
        eightBall = 'Signs point to yes';
        break;
}

/*
8. Write a console.log() to print the Magic Eight Ball’s answer, the value of the eightBall variable.
*/
console.log(eightBall);

/*
9. Run your program a few times to see random results appear in the console!
*/