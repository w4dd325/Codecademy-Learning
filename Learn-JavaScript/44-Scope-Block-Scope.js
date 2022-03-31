function logVisibleLightWaves(){
    const lightWaves = 'Moonlight';
    console.log(lightWaves);
  }
  
  logVisibleLightWaves();
  
  //Expect this line to log a ReferenceError since the variable is inside the function block.
  console.log(lightWaves);