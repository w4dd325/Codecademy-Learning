let spaceship = {
    'Fuel Type': 'Turbo Fuel',
    homePlanet: 'Earth'
};
// Write your code below
var greenEnergy = (spaceship) => {
    spaceship['Fuel Type'] = 'avocado oil'
}
var remotelyDisable = (spaceship) => {
    spaceship.disabled = true
}
greenEnergy(spaceship)
remotelyDisable(spaceship)
console.log(spaceship)