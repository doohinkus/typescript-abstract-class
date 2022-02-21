interface Drone {
  spin(): void;
  launch(): void;
  beep(): void;
}

export class Drone implements Drone {
  beep() {
    console.log("beep");
  }
  launch() {
    console.log("launching");
  }
  spin() {
    console.log("spinning");
  }
  test() {
    this.beep();
    this.spin();
    this.launch();
  }
}

export class DroneAdapter implements Duck {
  constructor(public drone: Drone) {
    this.drone = drone;
  }
  quack() {
    this.drone.beep();
  }
  fly() {
    this.drone.spin();
    this.drone.launch();
  }
}

export class DuckSimulator {
  constructor(public duck: Duck) {
    this.duck = duck;
  }
  testDuck() {
    this.duck.quack();
    this.duck.fly();
  }
}

interface Duck {
  quack(): void;
  fly(): void;
}

export class Mallard implements Duck {
  quack() {
    console.log("mallard quack");
  }
  fly() {
    console.log("mallard fly");
  }
}
