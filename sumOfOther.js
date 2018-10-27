let sumOfOther =  (arr) => arr.map((v,i,a)=>{return a.reduce((c,e)=>c+e , 0) - v})
