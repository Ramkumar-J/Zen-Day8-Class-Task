interface priceinfo {
  basefare: number;
  costpermile: number;
  ridedistance: number;
  bookingfees: number;
}
class Uber {
  basefare: number;
  costpermile: number;
  ridedistance: number;
  bookingfees: number;

  constructor(info: priceinfo) {
    this.basefare = info.basefare;
    this.costpermile = info.costpermile;
    this.ridedistance = info.ridedistance;
    this.bookingfees = info.bookingfees;
  }
}
let travel1 = new Uber({
  basefare: 20,
  costpermile: 15,
  ridedistance: 8,
  bookingfees: 10,
});
console.log(travel1);
let totalfare =
  travel1.basefare +
  travel1.costpermile * travel1.ridedistance +
  travel1.bookingfees;
console.log(totalfare);
