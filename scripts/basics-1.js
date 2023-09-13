// any that I will type after the slash will be a comment
//this is not code
/* 
this
will
span
many lines
*/

console.log("Hello world!");

// keywords for declaring variables

let firstName = "Blimperr";
let age = "13";
let ageString = "13";
let myMoney = -10000.45;

//numbers

myMoney = "bankrupt";

//boolians

let isGameOver = false;

//arrays
//a variable that holds a "list" of values

let fruits = ["apple", "grapes", "banana"];

console.log(fruits[2]);

console.log(fruits);

// objects
// have properties and methods.

// pascel case: lowerCaseFirstLetter - variable names
// camel case: UpperCaseFirstLetter - class definitions or class names
// kabob case: hyphien-between-words - file names and id's in HTML
// snake case: UPPER_CASE_UNDERSCORES_BETWEEN - constants

let classRoom = {
	roomNumber: 129,
	seats: 35,
	teacher: {
		firstName: "billy",
		lastName: "bob",
	},
	students: [
		{ firstName: "Cade", lastName: "Arney", grade: 8 },
		{ firstName: "Attacus", lastName: "Brown", grade: 8 },
	],
	lightsOn: true,
	turnLightsOff: function () {
		this.lightsOn = false;
		return;
	},
};
console.log(classRoom);
classRoom.turnLightsOff();
console.log(classRoom);

let classRoom2 = {
    roomNumber: 131,
    seats: 40,
    teacher: {
        firstName: "Zack",
        latName: "Deegan"

    },
    students: [
    ],
    lightsOn: true,
    turnLightsOff = false(){
        this.lightsOn = false
        return;
    }
}