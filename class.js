class Person{
    constructor(name, first, second, third ){
        this.name = name;
        this.first = first;
        this.second = second;
        this.third = third;
    }

    sum(){
        return 'prototype :::: ' + (this.first+this.second+this.third);
    }
}

class PersonPlus extends Person{
    avg(){
        return 'extends ::::' +(this.first+this.second+this.third)/3;
    }
}

// Person.prototype.sum = function(){
//     return 'prototype :::: ' + (this.first+this.second+this.third);
// }

var kim = new PersonPlus('ttt', 1,2,3);
kim.sum = function(){
    return 'this :::: ' + (this.first+this.second+this.third);
}
var lee = new PersonPlus('lee', 4,2,23);

console.log("ttt", kim);
console.log("ttt sum", kim.sum());
console.log("ttt sum", kim.avg());

console.log("tt1", lee);
console.log("tt2 sum", lee.sum());
console.log("tt2 sum", lee.avg());
