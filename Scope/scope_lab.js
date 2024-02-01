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