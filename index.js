// Parent class
class Animal {

  alive = true;

  eat(){
    console.log(`This ${this.name} is eating`)
  }
  sleep(){
    console.log(`This ${this.name} is sleeping`)
  }
}
// Child classes
class Rabbit extends Animal {

  name = "rabbit"

  run(){
    console.log(`This ${this.name} is r unning`)
  }
}
class Fish extends Animal {

  name = "fish"

  swim(){
    console.log(`This ${this.name} is swimming`)
  }
}
class Hawk extends Animal {

  name = "hawk"

  fly(){
    console.log(`This ${this.name} is flying`)
  }
}

const rabbit = new Rabbit()
const fish = new Fish()
const hawk = new Hawk()

hawk.eat()
hawk.sleep()
hawk.alive = false

console.log(hawk.alive ? "The hawk is still alive." : "The hawk passed on.")
