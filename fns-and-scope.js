//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only argument.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

 function isTyler(name){
   if (name === 'Tyler') {
     return 'true'
   }else return 'false'
 }


//Next problem



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


function getName (){ 
  var name = prompt('Enter Name Here')
  alert(name)
}

getName();
    //struggling to get it to return the name
  


//Next Problem



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

 /*var name;
 function getName (){ 
  var name = prompt('Enter Name Here')
  alert(name)
}

function welcome ("greeting", name){
    var greeting = ("Welcome ," + name)
    alert(greeting);
}
    
welcome();
*/

 function welcome(greeting, name) {
     var name = prompt('Enter Name');
     var greeting = ("Welcome ,")
     var welcome = (greeting + name);
     alert(welcome);
 }

 welcome();
  


//Next problem




//What is the difference between arguments and parameters?

  //Parameters are used in the function definition, they are named variables that are passed into a function that import arguments;
  // Arguments are used in the function Call. They are the real values passed to the function.


//Next problem



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Answer Here: false, null, undefined, 0, NaN, '', (document.all) [1];
  //to check if something is falsy you would run an if statement
  /*
  if (x !== "string") {
    alert("falsy")
  }
*/


//Next Problem



//Create a function called myName that returns your name

  function myName() {
     var name = "Trevor";
     alert(name);
 }

 myName();

//Now save the function definition of myName into a new variable called newMyName

  //Code Here

//Now alert the result of invoking newMyName



//Next problem



//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here

//Now save the result of invoking outerFn into a variable called innerFn.

  //Code Here

//Now invoke innerFn.
