class Vehicle {
    constructor(make, model, year){
        this.Make = make,
        this.Model = model,
        this.Year = year

    }
    getVehicleDetails(){
        return {
            Make : this.Make,
            Model : this.Model,
            Year : this.Year
        }
    }
}
class Car extends Vehicle{
    constructor (make, model, year, numberOfDoors){
        super(make,model,year);
        this.doors = numberOfDoors
    }
    show() {
        return {
          numberOfDoors : this.doors
        }

    }
}

export {Vehicle , Car}