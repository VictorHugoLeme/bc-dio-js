
console.log("==================== PROTOTYPE ====================")
console.group()

var obj = {};
obj.name = "Victor";

console.log("Does my object have a property 'name'? " + obj.hasOwnProperty("name"));
console.log("The name of my object is: " + obj.name);

console.groupEnd()
console.log("===================== CLASSES =====================")
console.group()

class Person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        return "Hello, I'm " + this.name;
    }
}
console.log("Calling a method from a class: " + new Person("Victor").greet());

console.groupEnd()
console.log("=================== INHERITANCE ===================")
console.group()

class Student extends Person {
    constructor(name, degree) {
        super(name);
        this.degree = degree;
    }
    greet() {
        return super.greet() + ", I'm a " + this.degree + " student.";
    }
}
console.log("Calling a method from a subclass: " + new Student("Victor", "Computer Science").greet());