// Circle functions

import { collisions } from './collisions.js'
import { randInWindow } from './random.js'


// Generate a new circle object with the given radius and padding, at a
// random location within the given window.
const circle = (settings) => ({
    ...randInWindow(settings.width, settings.height),
    r: settings.startRadius,
    padding: settings.borderPadding,
})

// Given a number of attempts, tries to create a new circle that doesn't
// collide with any other circle.
const findCircle = (settings, circles) => {
    let attempts = settings.attempts
    while (attempts > 0) {
        // Create a randomly located circle
        const c = circle(settings)

        // Check for collisions with the other circles
        if (!collisions(c, circles)) return c

        attempts--
    }
}

// Generates a circle object that where the radius is increased by step
const largerCircle = (c, step) => ({ ...c, r: c.r + step })

// Grows a circle by increasing the radius and checking for collisions
// with other circles. Returns the largest circle in that space, capped
// by maxRadius.
const growCircle = (c, settings, circles) => {
    if (c === undefined) {
        return null
    }

    let out = c

    while (out.r + settings.radiusStep <= settings.maxRadius) {
        c = largerCircle(c, settings.radiusStep)

        if (collisions(c, circles)) {
            // Return the last circle
            return out
        }

        out = c
    }

    return out
}

// Generates a list of num circles. Takes a parameters object and a window.
export const circles = (settings) => {
    let list = Array()

    // Creates a circle by finding empty space and then growing the circle
    // as much as it can.
    const createCircle = () => {
        // First find a place for it
        let c = findCircle(settings, list)

        // And grow it
        return growCircle(c, settings, list)
    }

    for (let i=0; i<settings.circles; i++) {
        const c = createCircle()
        if (c) list.push(c)
    }

    return list
}
