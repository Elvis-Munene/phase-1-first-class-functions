//receivesAFunction
function receivesAFunction (ab){
    console.log(ab());
}
receivesAFunction(function(){return myName});

console.log(receivesAFunction(function(){return "myName"}));

//returnsANamedFunction
function returnsANamedFunction(){
    let namedFunction = function(){
        return "Hello";
    }
    return namedFunction;
}
console.log(returnsANamedFunction());

//Returns an anonymous function
function returnsAnAnonymousFunction(){
    return (function(){
        return "Hello world";
    })
}
console.log(returnsAnAnonymousFunction());