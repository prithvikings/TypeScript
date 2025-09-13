"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
class BottleMake {
    name;
    price;
    capacity;
    constructor(name, price, capacity) {
        this.name = name;
        this.price = price;
        this.capacity = capacity;
        if (!capacity) {
            this.capacity = "500ml";
        }
    }
}
let bottle = new BottleMake("Bisleri", 20, "500ml");
let bottle1 = new BottleMake("Kinley", 15, "");
console.log(bottle);
console.log(bottle1);
//# sourceMappingURL=classes.js.map