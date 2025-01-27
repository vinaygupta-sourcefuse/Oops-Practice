class Animal{
    constructor(name){
        console.log("hey there is parent class constructor")
    }

    makeSound(){
        console.log("Animal makes sound")
    }
}

class Dog extends Animal{
    constructor(){
        super();
        console.log("hey there is Dog class constructor")
    }
    makeSound(){
        super.makeSound();
        console.log("Dog barks")
    }
}

const dog = new Dog();

dog.makeSound(); // Dog barks