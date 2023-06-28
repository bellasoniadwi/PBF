let fname = 'Bella';
let lname = 'Sonia';
let age = prompt("Masukkan Umur Bella Sonia!");

// Cara lama
// let result = fname+ ' ' + lname + ' is ' + age + ' years old';
// alert(result);

// memakai template strings
let result = `${fname} ${lname} is ${age} years old`;
alert(result);