// let x=5;
// let y="50s";
// console.log(x+y);
// console.log(y-x);
// let z=0xac1;
// console.log(z+x);
/***************************** */
// let x=105.65984;
// console.log(x.toFixed(2));
// let y=10565984;
// console.log(y.toString()+x)
// console.log(Math.floor(x))
// console.log(Math.round(x))
// console.log(Math.ceil(x))
// console.log(Math.floor(Math.random()*100)+1)
/****************************************** */
// let pname=" my Name is ahmed ";
// console.log(pname[4])
// console.log(pname.lastIndexOf("a"));
// console.log(pname.length)
// console.log(pname.substring(4,8))
// console.log(pname.concat(" & age is 50"));
// console.log(pname.charAt(4))
// console.log(pname.slice(4,8))
// console.log(pname.includes("x"))
// console.log(pname.toLowerCase())
// console.log(pname.trim() )
//********************************** */
// let fName="ahmed";
// let age=50;
// let myInfo="my name is " +fName + "\n and \"age\" is " +age +" years old"
// console.log(myInfo)
// let myInfo2=`my name is ${fName}
//  and "age" is ${age} years old`;
//  console.log(myInfo2)
//************************************** */
// let mydate=new Date("12/12/2010 12:00:00");
// console.log(mydate)
console.log(new Date())
// console.log(mydate.getMonth())
// console.log(mydate.getDay())
// console.log(mydate.getHours())
// console.log(mydate.getMinutes())
// console.log(mydate.getSeconds())
// console.log(mydate.getTime())
// console.log(moment().format('dd-MM-yyyy, h:mm:ss a') )
/**************************************** */
// let x=6;
// let y=5;
// let z=7;
// if(x==y || y<z || x==0){
//     //true
//     console.log(true)
// }else{
//     //false
//     console.log(false)
// }
// if(x==y){
//     console.log("x==y")
// }else if(y==z){
//     console.log("y==z")
// }else if(z==0){
//     console.log("z==0")
// }else{
//     console.log("error")
// }
/********************************************* */
// let g="a";
// switch (g) {
//     case "a":
//         console.log("v good")
//         break;
// case "b":
//     console.log("good");
//     break;
//     default:
//         console.log("error not found")
//         break;
// }
/////////////////*////////////////////

// for(let i=0;i<5;i++){//i++=(i=i+1)
//     console.log(i)
// }
// let pname="my Name is ahmed";
// for(let i=0;i<pname.length;i++){
//     console.log(pname[i])
// }
let x=0;
// do {
//     console.log(x)
//     x++;
// } while (x<5);
while (x<5) {
    console.log(x);
    x++
}

console.log(Math.floor(Math.random()*(1+100-90)+90));
