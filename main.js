//Traditional Solve for Fizz Buzz using for loop-Tradicionalan nacin rjesavanja FizzBuzz zadatka
function FizzBuzzA(value1,value2) {
  let returnValue = "";
  for(let i = 1; i <= 100;i++) {
    if(i % value1 == 0 && i % value2 == 0) {
      returnValue += 'FizzBuzz ';
    }
    else if(i % value1 == 0 ) {
      returnValue += 'Fizz ';
    }
    else if(i % value2 == 0) {
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
  for(let i = 1; i<= 100; i++) {
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
  return returnValue;
}

//Not Traditional approach-Ne tradiconalni pristup
function FizzBuzzC(value1,value2) {
  let returnValue = "";
  for(let i = 1; i <= 100;i++) {
    returnValue += ((i % value1 ==0 ?  'Fizz ' : ' ') + (i % value2 ==0 ?  'Buzz ' : ' ') || i) + ' ';
  }
  return returnValue;
}


//FizzBuzz the Meta Strategy-FizzBuzz meta strategija
function FizzBuzzD(val1,val2){
  let returnArray = [];
  for(let i=1;i<=100;i++){
      returnArray[i] = ((i%val1 == 0 ? 'Fizz' : '' ) + (i%val2 == 0 ? 'Buzz' : '') || i);                   
  }
  return returnArray;
}

function FizzBuzzE(_value1,_value2) {
  let returnValue = " ";
  for (let i = 1; i <= 100; i++) {
    returnValue += (i % 3 == 0 && i % 5 == 0 ?  ' ' + 'FizzBuzz ' + ' ' : (i % 3 == 0 ? ' ' + 'Fizz ' + ' ': (i % 5 == 0 && i % 3 != 0 ?  ' ' + 'Buzz ' + ' ' :' ' + i)));
  }
  return returnValue;
}

//Call and user FizzBuzzC-Poziv korisnicke funkcije FizzBuzzC

function buzzIt() {
  let output="";
  let val1 = document.getElementById('Fizzvalue').value;
  let val2 = document.getElementById('Buzzvalue').value;
  output = FizzBuzzE(val1,val2);
  document.getElementById('results').innerHTML = output;  
  
}

//Call and user our template-Poziv korisnickog predloska
function buzzItTemplate() {
  let output = [];
  let headTemplate = document.getElementById('template-header');
  let rowTemplate  = document.getElementById('template-row-items');

  let tempalteHTML = rowTemplate.innerHTML;
  let resultsHTML  = headTemplate.innerHTML; 

  //Get the values the user entered-Unosenje vrijednosti koje korisnik union
  let val1 = document.getElementById('Fizzvalue').value;
  let val2 = document.getElementById('Buzzvalue').value;

  //Call out FizzBuzz function-Poziv funkcije FizzBuzzD 
  output = FizzBuzzD(val1,val2);
    for(i = 1;i < output.length;i+=5) {
    resultsHTML  += tempalteHTML.replace('{{val1}}',output[i])
                                .replace('{{val2}}',output[i+1])
                                .replace('{{val3}}',output[i+2])
                                .replace('{{val4}}',output[i+3])
                                .replace('{{val5}}',output[i+4]);
  }
  document.getElementById('results').innerHTML = resultsHTML;
}