function Person(name, first, second, third){
    this.name =name;
    this.first = first;
    this.second = second,
    this.third = third
}

Person.prototype.sum = function(){
    return 'prototype :::: ' + (this.first+this.second+this.third);
}

var kim = new Person('kim', 10,10,23);
var lee = new Person('lee', 4,2,23);

console.log("kim" , kim.sum());
console.log("lee" , lee.sum());

console.log("kim" , kim.sum());
console.log("lee" , lee.sum());
