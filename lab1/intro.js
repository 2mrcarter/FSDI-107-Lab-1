

var evens = []; 
var odds = [];
var mathLib = require('./myMath')

function exc1(){
    for(let i = 1; i <= 0; i++){
       if(i != 3 && i!= 7) {
           console.log(i);
       }
    }
}



function exc2(howMany){
    for(let i =0; i < howMany*3; i++){
        if(mathLib.isEven(i)){
            console.log("even:" + i);
            evens.push(i);
        }
    }
}

function exc3(howMany){
    for(let i = 0; i <= howMany*2; i++){
        console.log(i + ' is definitely an ODD ball ;-)');
            evens.push(i);
    
    }
}


exc1();
exc2(10);
exc3(20);
console.log(mathLib.sum(10,10));

var res= mathLib.divide(15,12);
console.log (res);

var two = mathLib.divide(25,5);
console.log(two);

var three = mathLib.sum(12,13);
console.log(three);

var four = mathLib.greater(3,7);
console.log(four);

var five = mathLib.greater(31378409,77589320578493);
console.log(five);

var six = mathLib.isEven(22);
console.log(six);

var seven = mathLib.isOdd(25);
console.log(seven);