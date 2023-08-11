// function randomNumber (min, max) {
//   return Math.floor(Math.random() * (200 - 100) + 100);
// }



// if(randomNumber(100,200) % 3  === 0){
//    console.log(randomNumber(100,200), " Loopy");
// }
// else{
//   console.log("Not loopy");
// }



//console.log(randomNumber(100,200));

//let randomNumber = Math.floor(Math.random() * 100) + 100;
//console.log(randomNumber);

for (var i = 100; i <= 200; i++){
  if ((i % 3 == 0) && (i % 4 == 0)) {
    console.log("LoopyLighthouse");
  }
  else if (i % 4 == 0) {
    console.log("Lighthouse");
  }
  else if (i % 3 == 0) {
    console.log("Loopy");
  }
  else {
    console.log(i);
  }
}
