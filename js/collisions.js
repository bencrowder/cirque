// Collision detection functions


// Distance function
export const dist = (c1, c2) => Math.sqrt(
    Math.pow(c1.x - c2.x, 2) + Math.pow(c1.y - c2.y, 2)
)

// Add everything together, used by collision()
const circleSizes = (c1, c2) => c1.r + c1.padding + c2.r + c2.padding

// See if the two circles have collided
export const collision = (c1, c2) => circleSizes(c1, c2) >= dist(c1, c2)

// See if the circle has collided with any of the circles in the list
export const collisions = (c1, circles) => circles.some((c2) => collision(c1, c2))
