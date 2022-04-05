/*
1. Race numbers are assigned randomly. We’ve provided the necessary code at the top of the file.
*/
let raceNumber = Math.floor(Math.random() * 1000);

/*
2. Create a variable that indicates whether a runner registered early or not.
Set it equal to a Boolean value. You’ll change this later as you test different runner conditions.
*/
const registeredEarly = true;

/*
3. Create a variable for the runner’s age and set it equal to a number.
You’ll change this later as you test different runner conditions.
*/
const age = 18;

/*
4. Create a control flow statement that checks whether the runner is an adult AND registered early.
Add 1000 to their raceNumber if this is true.
*/
if (registeredEarly === true && age > 18) {
  raceNumber += 1000;
}

/*
5. Create a separate control flow statement below the first (starting with if again). This statement will check age and registration time to determine race time.

For runners over 18 who registered early, log a statement to the console telling them that they will race at 9:30 am. Include their raceNumber.
*/
if (registeredEarly === true && age > 18) {
  console.log(`Race Number: ${raceNumber} ... Start time is at 9:30 am`);

/*
6. “Late adults run at 11:00 am”

Since we already checked for early adults we can write a statement like this: else if runner is over 18 AND did not register early they will race at 11:00am

Write the corresponding else if statement.

Within that, log a string to the console telling them that they will race at 11:00 am. Include their raceNumber.
*/
} else if (registeredEarly === false && age > 18) {
  console.log(`Race Number: ${raceNumber} ... Late adults run at 11:00 am`);

/*
7. “Youth registrants run at 12:30 pm (regardless of registration)”

For people who are under 18, log a statement to the console telling them that they will race at 12:30 pm. Include their raceNumber.
*/
} else if (age < 18) {
  console.log(`Race Number: ${raceNumber} ... Start time is at 12:30 pm`);


/*
8. Enter different combinations of values for the two variables you created and run your code several times. Verify that the correct statements are printing to the console!

Completed
*/

} else {
  console.log(`Race Number: ${raceNumber} ... See the registration desk`);
}
