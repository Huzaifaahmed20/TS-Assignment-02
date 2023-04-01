abstract class Vehicle {
  private _make: string = "";
  private _model: string = "";
  private _year: string = "";
  private _rented: boolean = false;

  constructor(make: string, model: string, year: string, rented: boolean) {}

  get make() {
    return this._make;
  }
  get model() {
    return this._model;
  }
  get year() {
    return this._year;
  }
  get rented() {
    return this._rented;
  }

  set setRented(rented: boolean) {
    this._rented = rented;
  }

  abstract rentalRate(): number;

  rent(): string {
    if (this._rented) {
      return "Vehicle is already rented";
    } else {
      this._rented = true;
      return "Vehicle is available and it is now rented for you";
    }
  }

  return() {
    if (this._rented) {
      this._rented = false;
      return "Vehicle is already rented and now it is returned";
    } else {
      return "Vehicle is available";
    }
  }
}

class MotorCycle extends Vehicle {
  constructor(
    make: string,
    modal: string,
    year: string,
    rented: boolean,
    private _engine: string,
    private _noOfWheels: number
  ) {
    super(make, modal, year, rented);
  }

  get noOfWheels() {
    return this._noOfWheels;
  }

  get engine() {
    return this._engine;
  }

  rentalRate(): number {
    return 200;
  }
}

class Truck extends Vehicle {
  constructor(
    make: string,
    modal: string,
    year: string,
    rented: boolean,
    private _loadingCapacityInKgs: number
  ) {
    super(make, modal, year, rented);
  }

  rentalRate(): number {
    return 2000;
  }

  get loadingCapacity() {
    return this._loadingCapacityInKgs;
  }
}

class Car extends Vehicle {
  constructor(
    make: string,
    modal: string,
    year: string,
    rented: boolean,
    private _sttingCapacity: number
  ) {
    super(make, modal, year, rented);
  }

  get sittingCapacity() {
    return this._sttingCapacity;
  }

  rentalRate(): number {
    return 500;
  }
}

// Motorcycle Instance
const motorcycle = new MotorCycle("Honda", "Quads", "2022", false, "70CC", 4);
motorcycle.rent();
console.log("MotorCycle Rented: ", motorcycle.rented);
motorcycle.return();
console.log("MotorCycle Rented: ", motorcycle.rented);

// Truck Instance
const truck = new Truck("Hyundai", "New", "2020", false, 1000);
truck.rent();
console.log("Truck Rented:", truck.rented);
truck.return();
console.log("Truck Rented:", truck.rented);

// Car Instance
const car = new Car("Honda", "Accord", "2022", false, 4);
car.rent();
console.log("Rar Rented:", car.rented);
car.return();
console.log("Rar Rented:", car.rented);

