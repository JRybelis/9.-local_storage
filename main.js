// store data in local storage
localStorage.setItem('keyName', 'keyValue');

// get data from local storage
let name = localStorage.getItem('keyName');

console.log(name);

// update data
localStorage.setItem('keyName', 'updatedKeyValue');
localStorage.setItem('newKeyName', 'newKeyValue');

name = localStorage.getItem('keyName');
let name2 = localStorage.getItem('newKeyName');

console.log(name);
console.log(name2);

//delete specific data from local storage
localStorage.removeItem('keyName');

//delete all data from local storage
localStorage.clear();


const todos = [
    {text: 'play Mario Kart', author: 'Bowzer'},
    {text: 'Find the princess', author: 'Mario'},
    {text: 'Bake a pizza', author: 'Luigi'}
];

localStorage.setItem('todos', JSON.stringify(todos));

const retrievedData = localStorage.getItem('todos');
console.log(JSON.parse(retrievedData));