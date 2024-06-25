"use strict";
class Vehicle {
    constructor(make, model, wheels) {
        this.status = "stopped";
        this.make = make;
        this.model = model;
        this.wheels = wheels;
    }
    start() {
        this.status = "started";
    }
    stop() {
        this.status = "stopped";
    }
}
class Car extends Vehicle {
    constructor(make, model) {
        super(make, model, "four");
    }
}
class MotorCycle extends Vehicle {
    constructor(make, model) {
        super(make, model, "two");
    }
}
function printStatus(vehicle) {
    if (vehicle.status === "running") {
        console.log("The vehicle is running.");
    }
    else {
        console.log("The vehicle is stopped.");
    }
}
const myHarley = new MotorCycle("Harley-Davidson", 23);
myHarley.start();
printStatus(myHarley);
console.log(myHarley.make.toUpperCase());
const myBuick = new Car("Buick", 23);
myBuick.model = myBuick.model;
console.log(myBuick.wheels);
console.log(myBuick.model);
