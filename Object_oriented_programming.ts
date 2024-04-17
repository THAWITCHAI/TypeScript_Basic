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
  set_Data(name: String, age: number) {
    this.fullname = name;
    this.age = age;
  }
  
}

const USER_1: any = new Humen();
USER_1.set_Data("Thawitchai", 22);
USER_1.sayHello();
