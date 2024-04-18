var myAge: number;
var myBool: boolean;
var count: number;
var i;

let myName: String = "Thawitchai";
console.log(myName);
console.log(typeof myName);

let money: number = 1500;
console.log(money);
console.log(typeof money);

const sayHello = () => {
  if (true) {
    let name = "Thawitchai";
    var age = 15;
  }
  //   console.log(name);
  console.log(age);
};

let arr: number[] = [1, 2, 3, 4, 5, 6];
arr.map((i) => {
  console.log(i);
});

console.log(arr);
arr.push(15);
console.log(arr);
