function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const rndInt = Math.floor(Math.random() * 6) + 1
console.log(rndInt)