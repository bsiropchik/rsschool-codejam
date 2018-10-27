make(15)(34, 21, 666)(41)(sum); // return 777
make(2)(2, 2, 2)(2)(mult); // return 777


function sum(a, b) {
    return a + b;
}
function mult(a,b){
    return a*b
}

function concat(a,b){
    return String(a += b)
}

function make(){
    let sum = [...arguments];

    function next(b) {
        if (typeof b !== "function"){
            for (let i of arguments){
                sum.push(i);
            }
            return next;
        } else {
            return sum.reduce(b)
        }
    };
    return next;
}