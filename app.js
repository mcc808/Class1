function loadData(){
    console.log("loading data");

}

function myName(){
    console.log("Manuel Castro");
}

function sayHello(first, last){
    console.log("Hello, " + first + " " + last);
}

function taxReport(month, year){
    //Magic here
    if(month < 1){
        console.error("Error, invalid month number");
        return; //do not proceed
    }

    let result = month + year;
    return result;
}

function testArray1(){
    //for loop 1,2,...20
    //except 13
    for(let i=1;i<21;i++){
        if(i != 13 && i !=17){
            console.log(i);
        }
    }   
}

function testArray2(){
    let pets=["dog","cat","bird","goat"];

    //add new elements
    pets.push("Django");

    //count
    console.log("There are: " + pets.length);

    //read
    console.log(pets[0]);//read the first element

    //for loop to travel/iterate the array
    for(let i=0;i<pets.length;i++){
        console.log(pets[i]);
    }

    //delete
    let index = 0;
    pets = pets.splice(index,1);

}

function init(){
console.log("Intro page");

loadData();
myName();

let lastName = "Castro";
sayHello("Manuel", lastName); 

let total = taxReport(2,2022);
console.log(total);

let another = taxReport(1, 10);
console.log(another);

testArray1();

testArray2();
}

window.onload = init;