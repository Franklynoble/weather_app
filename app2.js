
//store data in local storage 
localStorage.setItem('name', 'mario');
localStorage.setItem('age', 50);



//get data from local storage

let names = localStorage.getItem('name');
let age  = localStorage.getItem('age');

console.log(names)
console.log(age)

localStorage.setItem('name','luigi');
localStorage.age = '40';
 

name1 = localStorage.getItem('age');
age1 = localStorage.getItem('name')
console.log(name1, age1)

//   name2 = localStorage.removeItem('name');
//   age3 = localStorage.removeItem('age');
// localStorage.removeItem('age')


//clear all the local storage

localStorage.clear();


const todos = [
     {text: 'play mariokart', author: 'shuan'},
     {text: 'buy some milk', author: 'mario'},
     {text: 'buy some bread', author: 'luigi'},

];

localStorage.setItem('todos',JSON.stringify(todos));

const stored = localStorage.getItem('todos');

console.log(JSON.parse(stored));




