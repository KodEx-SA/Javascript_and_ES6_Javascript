
var my_array = []; // empty array

// An array is a set of variables. Each variable is called an element.
// Each element has a numeric index starting from 0.

var fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits);
console.log(fruits[0]); // Accessing the first element

// Objects are collections of key-value pairs.
myObject = {}; // empty object
john = {
    first_name: "John", 
    last_name: "Doe",
     age: 50
};
console.log(john);
console.log(john.first_name); // Accessing the value associated with the key 'firstname'

billy = {
    first_name: "Billy",
    last_name: "undefined",
    full_name: function() {
        return this.first_name + " " + this.last_name;
    }
}

var person = {
    name: "John",
    age: 30,
    city: "New York"
};
console.log(person);
console.log(person.name); // Accessing the value associated with the key 'name'
