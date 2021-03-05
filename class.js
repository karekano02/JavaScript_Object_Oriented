class Person{
    constructor(name, first, second ){
        this.name = name;
        this.first = first;
        this.second = second;
    }

    sum(){
        return this.first+this.second;
    }
}

class PersonPlus extends Person{
    constructor(name, first, second, third ){
        super(name, first, second );
        this.third = third;
    }
    sum(){
        return super.sum() + this.third;
    }
    avg(){
        return 'extends ::::' +(this.first+this.second+this.third)/3;
    }
}

// Person.prototype.sum = function(){
//     return 'prototype :::: ' + (this.first+this.second+this.third);
// }

var kim = new PersonPlus('kim', 1,2,3);
kim.sum = function(){
    return this.first+this.second+this.third;
}
var lee = new PersonPlus('lee', 4,2,23);

console.log("kim", kim);
console.log("kim sum", kim.sum());
console.log("kim avg", kim.avg());

console.log("lee", lee);
console.log("lee sum", lee.sum());
console.log("lee avg", lee.avg());
