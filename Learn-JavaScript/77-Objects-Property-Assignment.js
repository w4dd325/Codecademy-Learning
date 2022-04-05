let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth',
    color: 'silver',
    'Secret Mission' : 'Discover life outside of Earth.'
  };
  
  // Write your code below
  spaceship.color = 'glorious gold';
  
  spaceship['numEngines'] = 6;
  //console.log(spaceship);
  
  delete spaceship['Secret Mission'];
  //console.log(spaceship);
  