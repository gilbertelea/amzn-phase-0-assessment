// 1. Write your functions here
//=> "The line is currently: 1. Ada 2. Grace 3. Kent"
function line(array){
  if (array.length === 0 ){
    console.log('The line is currently empty!')
  }
  else{
    let emptyarray='';
    for(let i=0; i<array.length; i++){
        emptyarray +=  `${i+1}.${array[i]} `
      }
         console.log(`The current line is currently: ${emptyarray}`)
    }  
  }
  
// 2. Example Usage


// takeANumber(katzDeli, "Ada") //=> Welcome, Ada. You are number 1 in line.
// takeANumber(katzDeli, "Grace") //=> Welcome, Grace. You are number 2 in line.
// takeANumber(katzDeli, "Kent") //=> Welcome, Kent. You are number 3 in line.

/*
//old 
function takeANumber(array, string){
    array.push(string)
    greeting = []
  array.forEach((Name, position) => {
      greeting = `welcome, ${Name}, you are number ${position +1} in line.`
      console.log(greeting);
  });
}*/

// const katzDeli = []
function takeANumber(array, Name){
    array.push(Name)
  console.log(`welcome, ${Name}, you are number ${array.length} in line.`)
      
}
// takeANumber(katzDeli, "Ada");
// takeANumber(katzDeli, "Grace");
// takeANumber(katzDeli, "kent");


// nowServing 
//old function
/*function nowServing(katzDeli){
  if (katzDeli.count === 0){
      console.log("Ther is nobody  waiting to be serve!")
  }
  else{
      firstPerson = katzDeli.shift()
      console.log(`Curently serving ${firstPerson}`)
  }
}
// line(katzDeli) //=> "The line is currently: 1. Ada 2. Grace 3. Kent"
nowServing(katzDeli); 
line(katzDeli); 
nowServing(katzDeli);  
line(katzDeli);  
nowServing(katzDeli);  
line(katzDeli);
nowServing(katzDeli)*/ 

function nowServing(array){
  console.log(`Curently serving ${array.shift()}`);
}
//=> "Currently serving Ada."

// line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent"

// takeANumber(katzDeli, "Matz") //=> Welcome, Matz. You are number 3 in line.

// line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent 3. Matz"

// nowServing(katzDeli) //=> "Currently serving Grace."

// line(katzDeli) //=> "The line is currently: 1. Kent 2. Matz"