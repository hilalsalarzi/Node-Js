//call back Function
const fun1= (frnd, frnd2)=>{
    console.log(`hello ${frnd}`);
    frnd2();
}
const fun2=()=>{
    console.log("I'll call you back");

}
 fun1("Hilal",fun2);

 // i want to call fun2 after fun1 is called.
// Callback Function
// const fun1 = (frnd, callback) => {
//     console.log(`hello ${frnd}`);
//     callback();
// }

// const fun2 = (callback) => {
//     console.log("I'll call you back");
//     callback();
// }

// const fun3 = () => {
//     console.log("I'm calling you back");
// }

// fun1("Hilal", () => fun2(fun3));