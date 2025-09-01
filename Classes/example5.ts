abstract class Appliance {
    constructor(public name: string) {}

    abstract turnOn(): void;
    abstract turnOff(): void;

    showStatus(status: string): void {
        console.log(`${this.name} is now ${status}.`);
    }
}

class Fan extends Appliance {
    turnOn(): void {
        console.log(`${this.name} starts spinning.`);
        this.showStatus("ON");
    }

    turnOff(): void {
        console.log(`${this.name} stops spinning.`);
        this.showStatus("OFF");
    }
}

class Light extends Appliance {
    turnOn(): void {
        console.log(`${this.name} is glowing.`);
        this.showStatus("ON");
    }

    turnOff(): void {
        console.log(`${this.name} goes dark.`);
        this.showStatus("OFF");
    }
}

const ceilingFan = new Fan("Ceiling Fan");
ceilingFan.turnOn();
ceilingFan.turnOff();

const tableLight = new Light("Table Light");
tableLight.turnOn();
tableLight.turnOff();
