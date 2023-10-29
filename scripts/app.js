//this will be global and means that it will not be destroyed

function sayHello(name, lastName) {
    console.log("hello "+ name + " " + lastName);
     
}
//practice -- console.log number from one to 20, except 7 and 13.
function printNumbers()
{
    let numbers = [12,4,123,4567,234,56,12,87,124,865,233,788,43,91,544,782,653,845];

    for (let i = 1; i < 21;i++) {
        if (i != 7 && i != 13)
        {
            console.log(i);
        }
    }
    //print any number in the numbers array
     //print the sum of the numbers in the array
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
    {
        //let sum = 0;
        let number = numbers[i];
        console.log(number);
        sum += number;        
    }
    console.log("the total: " + sum)
   
    }
}

function init() {
    console.log("hello there! from the init");
    const x = "Adrian";    
    sayHello(x, "Aguinaga");//there is not conection between the name of the variables in the fuctions
    
    printNumbers();
    //im passing the value not the variable
}

window.onload = init;//avoid the excution -- init()

//using the (), means that it wiil be called at that exact moment
//avoiding the (), means that i need to wait until everything else is rendered

//in the sayHello fuction, pass a name and a lastName and excecuit in the init function