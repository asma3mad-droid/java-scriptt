// Part 1 : Coding Questions :
// 1
let strToNum = Number("146")
console.log(strToNum + 7)
console.log("............")


// 2
const truthyOrFalsy= "";
if (truthyOrFalsy){
    console.log("Valid")
}
else{
    console.log("Invalid")
}
console.log("............")



// 3
for (let i=1;i<10;i++){
    if (i%2==0){
        continue
    }
    else{
        console.log(i)
    }
}
console.log("............")



// 4
const arrE=[1,2,3,4,5,6,7,44,12];
const evenNum=arrE.filter((num)=>{return num%2==0})
console.log(evenNum)
console.log("............")





// 5
let firstArr=[1,2,3,4];
let secondArr=[5,6,7,8,9];
const newArray=[...firstArr,...secondArr]
console.log(newArray)
console.log("............")




// 6
let day= "2";
switch (day){
    case "1":
        console.log("Sunday");
        break;
    case "2":
        console.log("Monday");
        break;
    case "3":
        console.log("Tuesday");
        break;
    case "4":
        console.log("Wednesday");
        break;
    case "5":
        console.log("Thursday");
        break;
    case "6":
        console.log("Friday");
        break;
    case "7":
        console.log("Saturday");
        break;
    default:
        console.log("Invaid number")
}
console.log("............")



// 7
const arrOfStrings=["aa","bbbb","c","ddd"]
const lStrings=arrOfStrings.map((leng)=>{return leng.length})
console.log(lStrings)
console.log("............")



// 8
function divisibleCheck(num){
    if (num%3===0 && num%5==0){
        console.log(`The number (${num})... divisible by both`)
    }
    else{
        console.log(`The number (${num})... Not divisible by both`)
    }
}
divisibleCheck(15)
console.log("............")



// 9
const squereOfTheNum = number =>  number**2
console.log("The squere of the number is:",squereOfTheNum(6))
console.log("............")



// 10
const user={
    name:"Asmaa",
    age: 20,
    country: "Egypt"
}
function extractValues(){
    return `${user.name} is ${user.age} old and she live in ${user.country}.`
}
console.log(extractValues())
console.log("............")



// 11
const sum  =function (n1,n2,n3,n4){
    return n1 + n2 + n3 + n4
}
console.log("The sum of the parameters:", sum(1,6,1,8))
console.log("............")



// 12
function timee(){
    setTimeout(()=>{
        console.log("Success");
    },3000)
}
timee()



// 13
let arrOfNums=[4,7,99,4000,2,55,3,60,8000,999,33,12,1000];
arrOfNums = arrOfNums.sort((a,b)=>a-b)
function largestNum(array1){
    const lastNum=array1.length-1
    return `The largest number is:${array1[lastNum]}`
}
console.log(largestNum(arrOfNums))
console.log("............")



// 14
// blockOfCode



// 15
const sentence="Hello my name is Asmaa";
function splitArr(arr){
    const splitSentence=arr.split(" ")
    return splitSentence
}
console.log(splitArr(sentence))


// Part 2: Essay Question:
// 1
// forEach => is an array method that executes a callback function for each element in an array
// for of => is a loop used to iterate over iterable objects like arrays and strings


// 2
// Hoisting => is JavaScript behavior where variable and function declarations are moved to the top of their scope
// Temporal Dead Zone => (TDZ) is the period between entering a scope and declaring a(let or const)variable


// 3
// ===   >>  strict equality  >> it compares the valua and the type  of  the variables   for ex: 5==='5' => false
// ==   >>   loose equality  >> it compares only value of the variables   for ex: 5=='5' => true


// 4
// try  => contains code that may cause an error
// catch => handles the error if one occurs


// 5
//type conversion => manually use functions like Number() to convert the input to a number
//type coercion => automatically JS handle the input and deal with it .....for ex: '5' - 1 = 4 although if the type of the input is string

