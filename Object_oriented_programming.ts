class Humen {
  fullname: String = "";
  age: number = 0;

  sayHello() {
    console.log(
      "----------------------------------------------------------------------------"
    );
    console.log(
      "hello ! i'm " + this.fullname + " and " + this.age + " Year old. "
    );
    console.log(
      "----------------------------------------------------------------------------"
    );
  }
}

const USER_1: any = new Humen();
USER_1.fullname = "Thawitchai";
USER_1.age = 22;
USER_1.sayHello();
