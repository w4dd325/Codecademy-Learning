const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(item => {
  return item === 'elephant';
});
console.log(foundAnimal);

const startsWithS = animals.findIndex(animal => {
  return animal[0] === 's' ? true : false;
});
//Use startsWithS index value to log array item
console.log(animals[startsWithS]);