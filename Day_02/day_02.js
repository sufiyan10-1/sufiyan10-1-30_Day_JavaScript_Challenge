//Activity 1
const firstNo = 23;
const secondNo = 2;

const add = firstNo+secondNo;
console.log(add);

const subtract = firstNo-secondNo;
console.log(subtract);

const multiply = firstNo*secondNo;
console.log(multiply);

const divide = firstNo+secondNo;
console.log(divide);

const remainder = firstNo+secondNo;
console.log(remainder);
console.log('--------------------------------------------------------------------------------------')
//Activity 2
let addNo = 5;
let subNo = 7;

addNo+=5;
subNo-=3;
console.log(addNo);
console.log(subNo);


console.log('--------------------------------------------------------------------------------------')
//Activity 3
if(firstNo > secondNo){
    console.log(firstNo+" is grater then "+secondNo);
}

else if(firstNo < secondNo){
    console.log(secondNo+" is grater then "+firstNo);
}
else{
    console.log(" both are equal");
}

if(firstNo >= 0){
    console.log(firstNo+" is positive");
}

else if(firstNo <= 0){
    console.log(firstNo+" is negative");

}
else{
    console.log("number is 0");
}


const value1 = 34;
const value2 = "34";

if(value1 == value2){
    console.log(true); // printing ture it don't care about the type
}
else{
    console.log(false);
}

const value3 = 34;
const value4 = "34";

if(value3 === value4){
    console.log(true);
}
else{
    console.log(false); // printing flase beause === is checking type also
}console.log('--------------------------------------------------------------------------------------')

//Activity 4
let input= 'e'
if( input>='a' && input<='z' || input>='A' && input<='Z'){
  console.log(input + " is character");
}
else if(input>=0 && input<=10){
   console.log(input+" is number");
}
else {
    console.log(input+" is spacial charactor");
}
console.log('--------------------------------------------------------------------------------------')

//Activity 5

const ternaryCheck = 5;
ternaryCheck >= 0?console.log(ternaryCheck+" positive"):console.log(ternaryCheck+" negative");