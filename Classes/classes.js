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
var BottleMake = /** @class */ (function () {
    function BottleMake(name, price, capacity) {
        this.name = name;
        this.price = price;
        this.capacity = capacity;
        if (!capacity) {
            this.capacity = "500ml";
        }
    }
    return BottleMake;
}());
var bottle = new BottleMake("Bisleri", 20, "500ml");
var bottle1 = new BottleMake("Kinley", 15, "");
console.log(bottle);
console.log(bottle1);
