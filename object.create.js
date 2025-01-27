
// overriading without class using Object.create

const Animal ={
        sound (){
        console.log("Sachin makes sound")
    }
};

const dog = Object.create(Animal); // dog is inheriting Animal

dog.sound = function(){
    console.log("Dog barks")
}

dog.sound(); // Dog barks