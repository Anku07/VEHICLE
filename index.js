import {Vehicle, Car} from "./data.js"
let vehicle1 = new Vehicle("Toyota", "Toyota Glanza E","2023" )
let vehicle2 = new Car("toyota", "Toyota Glanza E", "2023", "4")
let  Glanza = vehicle2.getVehicleDetails();
let car1 = vehicle2.show()
console.log(Glanza)
console.log(car1)