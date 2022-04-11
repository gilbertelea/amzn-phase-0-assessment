// 1. Write your functions here
//=> "The line is currently: 1. Ada 2. Grace 3. Kent"
const katzDeli = ["Ada", "Grace", "kent"];

function line(katzDeli){
  debugger;
if(katzDeli.count === 0 ){
console.log("The line is currently empty.")
}
else{
line = "The line is currently:" 
function rollCall(element, index){
  katzDeli.forEach((element, index) => rollCall(element, index));
  console.log(line = `${index + 1}. ${element}`)
};
  return line
}
  
}
// 2. Example Usage

// const katzDeli = []

// takeANumber(katzDeli, "Ada") //=> Welcome, Ada. You are number 1 in line.
// takeANumber(katzDeli, "Grace") //=> Welcome, Grace. You are number 2 in line.
// takeANumber(katzDeli, "Kent") //=> Welcome, Kent. You are number 3 in line.
function takeANumber(katzDeli, person){
    katzDeli.push(person)
    greeting = []
  katzDeli.forEach((Name, position) => {
      greeting = `welcome, ${Name}, you are number ${position +1} in line.`
      console.log(greeting);
  });
}

nowServing 
// line(katzDeli) //=> "The line is currently: 1. Ada 2. Grace 3. Kent"
function nowServing(katzDeli){
    if (katzDeli.count === 0){
        console.log("Ther is nobody  waiting to be serve!")
    }
    else{
        firstPerson = katzDeli.shift()
        console.log(`Curently serving ${firstPerson}`)
    }
}
// nowServing(katzDeli) //=> "Currently serving Ada."

// line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent"

// takeANumber(katzDeli, "Matz") //=> Welcome, Matz. You are number 3 in line.

// line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent 3. Matz"

// nowServing(katzDeli) //=> "Currently serving Grace."

// line(katzDeli) //=> "The line is currently: 1. Kent 2. Matz"