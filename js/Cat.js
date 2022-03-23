import { Pet } from "./Pet.js";

class Cat extends Pet {
    constructor(name, color) {
        super(name, color);
        this.food = 0;
        this.sound = 'Miau miau';
    }

    eat(count = 1) {
        this.food += count;
        console.log(`${this.name}: turi ${this.food} maisto.`);
    }
}

export { Cat }