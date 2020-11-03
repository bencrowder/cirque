// DOM functions

import { getSettings, settingsToText } from './settings.js'
import { downloadSVG, svgBlob } from './svg.js'


// -------------------------------------------------------------------
// Sidebar/settings

export const updateSettingsBox = (settings) => { document.querySelector("textarea#settings").innerHTML = settingsToText(settings) }


// -------------------------------------------------------------------
// SVG

// Finds the SVG wrapper element
export const svgWrapper = () => document.querySelector("#wrapper")

// Given SVG text, replaces the existing SVG element with the new SVG element
export const update = (svg) => { svgWrapper().innerHTML = svg; setWrapperDimensions() }


// -------------------------------------------------------------------
// SVG wrapper sizing

// Given an aspect ratio and the wrapper dimensions, return the scaled size
const getDimensions = (aspectRatio, w, h) => {
    let nw, nh

    if (aspectRatio > 1) {
        // Horizontal
        nw = w
        nh = w / aspectRatio
    } else if (aspectRatio < 1) {
        // Vertical
        nw = h * aspectRatio
        nh = h
    } else {
        // Square
        nw = Math.min(w, h)
        nh = nw
    }

    return [nw, nh]
}

const getAspectRatio = () => getSettings().width / getSettings().height

const getNewWrapperDimensions = () => {
    const main = document.querySelector('main')
    return getDimensions(getAspectRatio(), main.clientWidth, main.clientHeight)
}

export const setWrapperDimensions = () => {
    const [nw, nh] = getNewWrapperDimensions()
    const wrapper = svgWrapper()
    wrapper.style.width = `${nw}px`
    wrapper.style.height = `${nh}px`
}
