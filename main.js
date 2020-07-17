//TraditionalSolve for Fizz Buzz using for loop
function FizzBuzzA(value1,value2) {
  let returnValue = "";
  for(let i = 1; i <= 100;i++) {
    if(i%value1 == 0 && i%value2 == 0) {
      returnValue += 'FizzBuzz ';
    }
    else if(i%value1 == 0 ) {
      returnValue += 'Fizz ';
    }
    else if(i%value2 == 0) {
      returnValue += 'Buzz ';
    }
    else {
      returnValue += i + ' ';
    }
  }
  return returnValue;
}

function FizzBuzzB(value1,value2) {
  let returnValue = "";
  let Fizz = false;
  let Buzz = false;
  for(let i = 1; i <= 100; i++) {
    Fizz = i % value1 == 0;
    Buzz = i % value2 == 0;
    switch(true) {
      case Fizz && Buzz :{
        returnValue += 'FizzBuzz ';
        break;
      }
      case Fizz :{
        returnValue += 'Fizz';
        break;
      }
      case Buzz :{
        returnValue += 'Buzz ';
        break;
      }
      default :{ 
        returnValue += i +' ';
        break;
      }
    }
  }
}

return returnValue;

// function FizzBuzzC(value1,value2){
//   for (var i = 1; i <= 100; i++) {
//     return (i % 3 == 0 && i % 5 == 0 ? 'FizzBuzz' : (i % 3 == 0 ? 'Fizz' : (i % 5 == 0 && i % 3 != 0 ? 'Buzz' : num)));
//   }
// }

//Call and use FizzBuzz

function buzzIt() {
  let output="";
  let val1 = document.getElementById('Fizzvalue').value;
  let val2 = document.getElementById('Buzzvalue').value;
  output = FizzBuzzB(val1,val2);
  document.getElementById('results').innerHTML = output;  
  
}

