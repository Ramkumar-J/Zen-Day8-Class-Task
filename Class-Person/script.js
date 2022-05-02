var Person = /** @class */ (function () {
    function Person(info) {
        this.name = info.name;
        this.age = info.age;
        this.email = info.email;
        this.mobilenumber = info.mobilenumber;
        this.pincode = info.pincode;
        this.state = info.state;
        this.country = info.country;
    }
    return Person;
}());
var person1 = new Person({
    name: "Ram",
    age: 24,
    email: "ram@gmail.com",
    mobilenumber: 9181716151,
    pincode: 606203,
    state: "Tamilnadu",
    country: "India"
});
console.log(person1);
var person2 = new Person({
    name: "Sam",
    age: 28,
    email: "Samkani@gmail.com",
    mobilenumber: 9988776655,
    pincode: 602201,
    state: "Tamilnadu",
    country: "India"
});
console.log(person2);
