Array.prototype.random = function(){
                            var index = Math.floor(this.length*Math.random());
                            return this[index];
                        }

var arr = new Array('sa','da','ga','ha','ka','ia');
console.log(arr.random());

