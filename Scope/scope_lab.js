/*
var globalVar ="i'm a global variable";
let globalLet="I'm also a global but scoped with let"
const globalConst="I'm a global constant ";

{
    var blockVar="I'm a block scoped var";
    let blockLet="I'm a block scoped let";
    const blockConst="I'm a block scoped constant"
}
// Global scope
console.log(globalVar); 
console.log(globalLet);
console.log(globalConst);

//Block Scope
//console.log(blockVar);
//console.log(blockLet);


function show(){
    var functionVar ="i'm a block scoped var";
    let functionLet="i'm a block scoped let";
    const functionConst="i'm a block scoped const";
}
show();

console.log(functionVar); // Throws ReferenceError
console.log(functionLet); // Throws ReferenceError
console.log(functionConst);
*/


{
    let var1="let variable";
    const var2="const variable";
    var var3="var variable";
}
var3="hehe";
var1="haha";
var2="hoho";
console.log(var3);
console.log(var2);
console.log(var1);