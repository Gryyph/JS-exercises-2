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
    var i = Math.floor(Math.random() * Math.floor(this.height.length));
    console.log(`${this.name} is ${this.tricks[i]}`);
  };



let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);

ellie.trumpet;