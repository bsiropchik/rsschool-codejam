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