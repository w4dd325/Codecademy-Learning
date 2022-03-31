const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

//Use the .shift() method to remove the first item from the array groceryList.
groceryList.shift()
console.log(groceryList);

// /Under the code added in step 1, use the .unshift() method to add 'popcorn' to the beginning of your grocery list.
groceryList.unshift('popcorn');
console.log(groceryList);

//You’re in a hurry so you decide to ask a friend to help you with your grocery shopping. You want him to pick up the 'bananas', 'coffee beans', and 'brown rice'.
console.log(groceryList.slice(1,4));
//Notice that the groceryList array still contains the same items it had in Step 2. That means .slice() is non-mutating!
console.log(groceryList);

//Let’s find the index of a particular element in groceryList using .indexOf().
const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);