// Coordinate/window functions


// Create a coordinates object
export const coords = (x, y) => ({ x: x, y: y })


// Window functions

const win = (min, max) => ({ min: min, max: max })

export const createWindow = (w, h) => win(coords(0, 0), coords(w, h))
