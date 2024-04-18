//if else
const checkGrade = (grade: any) => {
  if (typeof grade == "number") {
    console.log(true);
  } else {
    console.log(false);
  }
};

checkGrade("76");
1 < 2 ? console.log(true) : console.log(false);

//switch case

const num:number = 2;
switch (num) {
  case 1:
    console.log("Hello 1");
    break;
  case 2:
    console.log("Hello 2");
    break;
  default:console.log('1-2')
    break;
}
