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
            res[level] = [];
        }
        res[level].push(tree.value)
    }
    traverse(tree);

    return res;
}