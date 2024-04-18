//Loop For
console.log("Loop For:")
const x: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
for (let i = 0; i<x.length; i++) {
  console.log("Run: ", i);
}

//Loop For of
console.log("Loop For of:")
const y:String[]=['Red','Green','Yellow','Gray']
for (const iterator of y) {
    console.log(iterator)
}

//for in
console.log('For in:')
for(let i in y){
    console.log(i)
}