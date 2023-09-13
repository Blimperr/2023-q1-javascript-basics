
class Person {
    constructor{firstName, lastName} {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName(){
        let fullName = `${this.firstName} ${this.lastName}`;
        // this is the same as this.firstName + " " + this.lastName 
        // (; is the same as .)
        return fullName;
    }
}
// Student inherits, or extends, the Person class
class Student extends Person {
constructor(firstName, lastName, grade) {
    super(firstName, lastName);
    this.grade = grade;
}
}

let p1 = new Person("zackerydoo", "veedoo");
let s1 = new Student("pneumonoultramicroscopicsilicovolcanoconiosis", "isAdisease")

p1.firstName = "zackerydooeydoobackery";
p1.getFullName();

console.log(p1.getFullName());
console.log(s1.getFullName());