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

function Elephant(name, height, tricks) {
  this.name = name;
  this.height= height;
  this.tricks = tricks;
}

Elephant.prototype.trumpet = function() {
  console.log(`${this.name} goes phrRRRRRR`);
};

Elephant.prototype.grow = function() {
  this.height += 12;
};

Elephant.prototype.addTrick = function(trick) {
  this.tricks.push(trick);
};

Elephant.prototype.play = function() {
    var i = Math.floor(Math.random() * Math.floor(this.tricks.length));
    console.log(`${this.name} is ${this.tricks[i]}`);
  };

// invocation

/*Elephant.paradehelper()  = function(elephant_object) {
  console.log(`${elephant_object.name} is in the parade!`);

}
*/

//closures

function dinerBreakfast(newstr) {
  var initBfastStr = "Scrambled eggs and bacon";

  function addBfastStr() {
    BfastStr = initBfastStr + " " + "and" + " " + newstr;
    return BfastStr;
  }

  console.log(addBfastStr());
}





//calling funcs

let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);

ellie.trumpet();
console.log(ellie.height);
ellie.play();

dinerBreakfast("hash browns");