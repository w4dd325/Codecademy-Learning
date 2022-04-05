const addTwo = num => {
  return num + 2;
}

const checkConsistentOutput = (func, val) => {
  //To begin, inside the body of checkConsistentOutput(), declare two variables: checkA and checkB
  let checkA = val + 2;
  let checkB = func(val);

  //Next, below the variables, write a conditional statement that checks if the value of checkA is equal to the value checkB. If true, return the result of the callback function. If false, return the string 'inconsistent results'.
  if (checkA === checkB) {
    return func(val);
    console.log(func(val))
  } else {
    console.log('inconsistent results');
  }
}

//Finally, using console.log(), log the invocation of checkConsistentOutput() with two arguments: the addTwo() function and any number.
console.log(checkConsistentOutput(addTwo, 5));