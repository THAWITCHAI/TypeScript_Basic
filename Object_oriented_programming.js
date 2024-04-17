var Humen = /** @class */ (function () {
    function Humen() {
        this.fullname = "";
        this.age = 0;
    }
    Humen.prototype.sayHello = function () {
        console.log("----------------------------------------------------------------------------");
        console.log("hello ! i'm " + this.fullname + " and " + this.age + " Year old. ");
        console.log("----------------------------------------------------------------------------");
    };
    return Humen;
}());
var USER_1 = new Humen();
USER_1.fullname = "Thawitchai";
USER_1.age = 22;
USER_1.sayHello();
