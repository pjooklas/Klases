import { Pet } from "./Pet.js";

class Dog extends Pet {
    constructor(name, color) {
        super(name, color);
        this.bonesCount = 0;
        this.sound = 'Au au';
    }

    bone(count = 1) {
        this.bonesCount += count;
        console.log(`${this.name}: turi ${this.bonesCount} kaulus.`);
    }
}

export { Dog }