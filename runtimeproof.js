class Animal{
    speak(){
        console.log("Animal makes sound")
    }
}

class Dog extends Animal {}

const dog = new Dog();
dog.speak(); // Animal makes sound

Dog.prototype.speak = function(){ // overriding without class using prototype
    console.log("Dog barks")
}

dog.speak(); // Dog barks