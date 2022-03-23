import { Dog } from './js/Dog.js';
import { Cat } from './js/Cat.js';

const rexas = new Dog('Rexas', 'black');
const brisius = new Dog('Brisius', 'brown');

rexas.voice();
brisius.voice();

rexas.introduction();
brisius.introduction();

rexas.bone(); // Rexas: turi 1 kaulus.
rexas.bone(); // Rexas: turi 2 kaulus.
rexas.bone(); // Rexas: turi 3 kaulus.
rexas.bone(3); // Rexas: turi 6 kaulus.
rexas.bone(); // Rexas: turi 7 kaulus.
rexas.bone(4); // Rexas: turi 11 kaulus.

const garfildas = new Cat('Garfildas', 'orange');

garfildas.voice();
garfildas.introduction();