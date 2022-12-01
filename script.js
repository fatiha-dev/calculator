const last = document.querySelector('.last');
const current = document.querySelector('.current');
const clearBtn = document.querySelector('.clear-btn');
const deleteBtn = document.querySelector('.delete-btn');
const button = document.querySelector('.btn');

const add = function(a,b) {
    return a + b
};

const subtract = function(a,b) {
    return a-b;
};


const sum  = function() {
let some = 0;
for(i=0 ; i< arguments.length ; i++){
some += arguments[i];
}
return some;
}
console.log(sum(1,4,6));

const multiply = function() {
let product = 1;
for(i=0 ; i< arguments.length ; i++){
product *= arguments[i];
}
return product;

};
console.log(multiply(1,3));
const power = function(base,power) {
result = 1;
for( let i=1 ; i<= power ; i++) {
result *= base;
}
return result;
};
console.log(power(2,3));
const factorial = function(factorial) {
let result=1;
for( let i=1 ; i<= factorial ; i++){
result = result*i;

}
return result;
};
console.log(factorial(5));