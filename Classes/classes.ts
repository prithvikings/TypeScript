//classes and objects
// class defination
// constructor
// Access modifiers (public, private, protected)
// Readonly properties
// optional properties
// parameter properties
// getter and setter
// static properties 
// abstract classes and methods

class BottleMake {
    constructor(public name: string, public price: number, public capacity: String) {
        if(!capacity){
            this.capacity = "500ml";
        }
    }
  }
  
  let bottle = new BottleMake("Bisleri", 20, "500ml");
  let bottle1 = new BottleMake("Kinley", 15,"");
    console.log(bottle);
    console.log(bottle1);