
class Animal {
  constructor(name, legCount) {
    this.name = name
    this.legCount = legCount
  }

  // Example of a staticMethod;
  static myType()
  {
    console.log("I am an Animal");
  }

  // Example of regularMethod;
  describe() {
    return `${this.name} has ${this.legCount} legs`
  }
}

let dog = new Animal("Doggie", 4)
console.log(dog.describe());




class Alien {
  constructor(name, planet, speak) {
    this.name = name;
    this.planet = planet;
    this.language = speak; // Use a different property name to avoid overwriting the method
  }

  static myType()
  {
    console.log("I am an Alien");
  }

  speak() {
    console.log("Hi, there! I am from planet " + this.planet + " and I speak " + this.language);
  }
}

let superman = new Alien("Superman", "Krypton", "Kryptonian");
superman.speak();

Alien.myType();
Animal.myType();



