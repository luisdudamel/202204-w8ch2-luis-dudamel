type RobotType = "Cleaner" | "Waiter" | "Developer";

interface IRobot {
  name: string;
  type: RobotType;
  battery: number;
  work: () => void;
  reset: () => void;
}

class Robot implements IRobot {
  battery;

  constructor(public name: string, public type: RobotType) {
    this.battery = 100;
  }

  work() {
    console.log("asdasd");
  }

  reset() {}
}

export default Robot;
