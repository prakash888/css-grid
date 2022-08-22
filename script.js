

const myCountry = "USA"
console.log(myCountry);

document.write('Chelsea')

const age = 25;
console.log(age);

//Primitive- Datatypes like Number and String
//Non Primitive- Array, Object, Function-Object

const evenNumbers = [1,2,3,4,5,6,7, "Hello",[1,2,3]];
 console.log( evenNumbers[8]);

 //object- it does not have to be in any order

 const bootcamp ={
    course: "React",
    duration: "3 months"
 };
 console.log(bootcamp.duration);

 function add(first, second){
    return first + second;

 }

 const result = add(10,20);
 console.log(result);

 const secondResult = add(2323, 2324)
 console.log(secondResult);
 

let number = 10; //with let you can actually override the datatype value as you can see here that 10 has been overrridden by 50
number = 50;
console.log(number);

/*if(number === 50){
   console.log("VAlue if Fifty")
}
else{
   console.log("value isnot ur fifty")
}*/

const isValue= number === 50? true: false;  //Ternary Operator ( condition ? '': '';-syntax)
console.log(isValue);