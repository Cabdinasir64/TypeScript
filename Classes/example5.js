var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Appliance = /** @class */ (function () {
    function Appliance(name) {
        this.name = name;
    }
    Appliance.prototype.showStatus = function (status) {
        console.log("".concat(this.name, " is now ").concat(status, "."));
    };
    return Appliance;
}());
var Fan = /** @class */ (function (_super) {
    __extends(Fan, _super);
    function Fan() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Fan.prototype.turnOn = function () {
        console.log("".concat(this.name, " starts spinning."));
        this.showStatus("ON");
    };
    Fan.prototype.turnOff = function () {
        console.log("".concat(this.name, " stops spinning."));
        this.showStatus("OFF");
    };
    return Fan;
}(Appliance));
var Light = /** @class */ (function (_super) {
    __extends(Light, _super);
    function Light() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Light.prototype.turnOn = function () {
        console.log("".concat(this.name, " is glowing."));
        this.showStatus("ON");
    };
    Light.prototype.turnOff = function () {
        console.log("".concat(this.name, " goes dark."));
        this.showStatus("OFF");
    };
    return Light;
}(Appliance));
var ceilingFan = new Fan("Ceiling Fan");
ceilingFan.turnOn();
ceilingFan.turnOff();
var tableLight = new Light("Table Light");
tableLight.turnOn();
tableLight.turnOff();
