interface personinfo {
  name: string;
  age: number;
  email: string;
  mobilenumber: number;
  pincode: number;
  state: string;
  country: string;
}
class Person {
  name: string;
  age: number;
  email: string;
  mobilenumber: number;
  pincode: number;
  state: string;
  country: string;
  constructor(info: personinfo) {
    this.name = info.name;
    this.age = info.age;
    this.email = info.email;
    this.mobilenumber = info.mobilenumber;
    this.pincode = info.pincode;
    this.state = info.state;
    this.country = info.country;
  }
}

let person1 = new Person({
  name: "Ram",
  age: 24,
  email: "ram@gmail.com",
  mobilenumber: 9181716151,
  pincode: 606203,
  state: "Tamilnadu",
  country: "India",
});
console.log(person1);

let person2 = new Person({
  name: "Sam",
  age: 28,
  email: "Samkani@gmail.com",
  mobilenumber: 9988776655,
  pincode: 602201,
  state: "Tamilnadu",
  country: "India",
});
console.log(person2);
