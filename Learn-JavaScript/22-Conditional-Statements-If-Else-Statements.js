let sale = true;

//Notice that the code inside the if statement ran, since 'Time to buy!' was logged to the console.
//Below the sale variable declaration, but before the if statement, reassign sale to false. Run your code and observe what happens, we’ll be changing this behavior in the next exercise.

sale = false;

if (sale) {
  console.log('Time to buy!');
} else {
  console.log('Time to wait for a sale.');
}
