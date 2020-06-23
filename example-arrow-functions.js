var names = ['Andrew', 'Julie', 'Jen'];

// names.forEach(function(name) {
//   console.log('forEach', name);
// });
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });
//
// names.forEach((name) => console.log('reallyShort', name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('Dorothy'));


// arror function does not update 'this', so this.name still refers to 'Dorothy'
// var person = {
//   name: 'Dorothy',
//   greet: function() {
//     names.forEach((name) =>  { console.log(this.name + ' says hi to ' + name)
//     });
//   }
// };
//
//   person.greet();

// function add(a, b) {
//   return(a + b);
// }

// using expressions
var add = (a,b) => a+b;

// using anonymous function
var addStatement = (a,b) => {
  return a+b;
};

console.log(add(2, 3));
console.log(add(9, 0));
console.log(addStatement(4,7));
console.log(addStatement(9,1));
