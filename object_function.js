 var kim = {name:'kim', first:10, second:20}
 var lee = {name:'lee', first:10, second:10}

 function sum(prefix){
     return prefix + (this.first+this.second);
 }

 console.log('kim.sum', sum.call(kim, "==>")); // call == call
 console.log('lee.sum', sum.call(lee, "==>"));

 var kimSum = sum.bind(kim, "==>");

 console.log("kimSum()", kimSum());