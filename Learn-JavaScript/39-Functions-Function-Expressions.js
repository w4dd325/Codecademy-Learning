const plantNeedsWater = function plantNeedsWater(day) {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
}
console.log(plantNeedsWater('Tuesday'));
console.log(plantNeedsWater('Wednesday'));