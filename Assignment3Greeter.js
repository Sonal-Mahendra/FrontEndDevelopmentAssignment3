var Greeter = /** @class */ (function () {
    function Greeter() {
    }
    Greeter.prototype.consturctor = function () {
    };
    Greeter.prototype.greet = function () {
        console.log("Congratulations you have completed Assignment 3");
        alert("Congratulations welcome to our page");
    };
    return Greeter;
}());
var gre = new Greeter();
gre.greet();
