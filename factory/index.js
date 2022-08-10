class Car {
    constructor(options) {
        this.wheels = options.wheels || 4;
        this.doors = options.doors || 4;
        this.color = options.color || "silver"; 
    }
}

class Truck {
    constructor(options) {
        this.wheels = options.wheels || 6;
        this.doors = options.doors || 2;
        this.color = options.color || "red"; 
    }
}


class Factory {

    create = (options, vehicleType) => {

        if(!vehicleType) {
            return "unable to make vehicle. Please specify a vehicle type and tryagain!"
        }

        let vehicle;
        
        if (vehicleType === "car") {
            vehicle = new Car(options);
        } else if (vehicleType === "truck") {
            vehicle = new Truck(options);
        } 

		
        vehicle.vehicleType = vehicleType;

        vehicle.startEngine = ()=> console.log(`Reving ${vehicleType} engine`);

        vehicle.driveVehicle = ()=> console.log(`Driving ${vehicleType}...`);

        vehicle.stopEngine = ()=> console.log(`Stop ${vehicleType} engine`);

        return vehicle;
    }
	
};

const vehicleFactory = new Factory();

const car = vehicleFactory.create({
    wheels: 4,
    doors: 2,
    color: "black",
}, "car");

console.log(car)
car.startEngine()
car.driveVehicle()

const truck = vehicleFactory.create({
    wheels: 4,
	doors: 2,
	color: "yellow",
}, "truck")

console.log(truck)
truck.startEngine()
truck.stopEngine()
