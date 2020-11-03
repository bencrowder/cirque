// Random functions

import { coords } from './coordinates.js';


// Return a random number between the two given numbers
const randInRange = (min, max) => Math.random() * (max - min) + min

// Return a random coordinate within the given window
export const randInWindow = (w, h) => coords(randInRange(0, w), randInRange(0, h))
