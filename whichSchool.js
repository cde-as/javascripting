//What I've submitted so far

let bethanyAge = Math.round(Math.random() * 4) + 13; 
let danyAge = Math.round(Math.random() * 12);
let mariaAge = Math.round(Math.random() * 52) + 18; 

let placeholder = false 

function whichSchool(age){
  if(age < 13 && age > 0){
    return "Elementary School";
  }
  else if(age > 12 && age < 19) {
    return "Secondary School";
  }
  else {
    return "Lighthouse Labs";
  }
}

// Conditions for Bethany
console.log(bethanyAge)
if(whichSchool(bethanyAge) === "Elementary School"){

  console.log("Bethany should go to Elementary School");

} else if(whichSchool(bethanyAge) === "Secondary School"){

  console.log("Bethany should go to High School");

} else {
  console.log("Bethany should go to Lighthouse Labs");
}
console.log(danyAge)
// Conditions for Dany 
if(whichSchool(danyAge) === "Elementary School"){

  console.log("Dany should go to Elementary School");

} else if(whichSchool(bethanyAge) === "Secondary School"){

  console.log("Dany should go to High School");

} else {
  console.log("Dany should go to Lighthouse Labs");
}
console.log(mariaAge)
// Conditions for Maria 
if(whichSchool(mariaAge) === "Elementary School"){

  console.log("Maria should go to Elementary School");

} else if(whichSchool(bethanyAge) === "Secondary School"){

  console.log("Maria should go to High School");

} else {
  console.log("Maria should go to Lighthouse Labs");
}