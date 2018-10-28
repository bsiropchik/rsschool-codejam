let tree =  
{"value":100,
    "left":{"value":90, 
        "left":{"value":70},"right":{"value":99}},

    "right":{"value":120,
        "left":{"value":110},"right":{"value":130}}
};

let array = recursion(tree);
console.log(array); // [[100], [90, 120], [70,99,110,130]]

function recursion (tree) {
    let res = []
    let level = 0;

    function traverse(tree){
        if(tree.left){
            level++;
            traverse(tree.left);
            level--;
        }
        if(tree.right){
            level++;
            traverse(tree.right);
            level--;
        }
        if(!res[level]){
            res[level] = []
        }
        res[level].push(tree.value)
    }

    traverse(tree)

    return res
    
}