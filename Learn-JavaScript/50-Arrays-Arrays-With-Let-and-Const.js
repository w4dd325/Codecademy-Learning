let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo';
console.log(condiments);

//reassign condiments to be a new array that contains a single string ['Mayo']
condiments = ['Mayo'];
console.log(condiments);

//re-assign the last item from the utensils array to 'Spoon'
utensils[3] = 'Spoon';
console.log(utensils);