class Car {
  marke: string;
  private _year: number;

  constructor(marke: string, year: number) {
    this.marke = marke;
    this._year = year;
  }

  get year(): number {
    return this._year;
  }

  set year(newYear: number) {
    if (typeof newYear !== "number") {
      throw new Error("newYear must be a number");
    }
    if (Number.isNaN(newYear)) {
      throw new Error("newYear cannot be NaN");
    }
    if (!Number.isFinite(newYear)) {
      throw new Error("newYear cannot be infinity");
    }
    if (newYear < 0) {
      throw new Error("newYear cannot be less then 0");
    }
    this._year = newYear;
  }
}

class ElectricCar extends Car {
  protected _batteryLevel: number;

  constructor(marke: string, year: number, batteryLevel: number) {
    super(marke, year);
    this._batteryLevel = batteryLevel;
  }
  start(): void {
    console.log("The electric car is starting");
  }
  get batteryLevel(): number {
    return this._batteryLevel;
  }
  set batteryLevel(newBatteryLevel: number) {}
}

const car = new ElectricCar("Tesla", 2020, 80);
car.start();
car.year = 1900;
