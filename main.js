function titleize(arr, func){

  const titled = arr.map( name => `Mx. ${name} fucking slut`);
  func(titled);
}

function printCallback(arr) {
  //console.log(arr);
  arr.forEach(name => console.log(name)); 
  };


titleize(["Mary", "Brian", "Leo"], printCallback);

/*(names) => {
  names.forEach(name => console.log(name));
});*/