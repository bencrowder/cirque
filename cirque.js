// Cirque
// A small circle packing demo

import { circles } from './js/circles.js'
import { createWindow } from './js/coordinates.js'
import { finalSVG } from './js/svg.js'
import { setWrapperDimensions, svgWrapper, update, updateSettingsBox } from './js/dom.js'
import { initialSettings } from './js/settings.js'
import { addDownloadHandler, addGenerateHandler, addSidebarHandler } from './js/sidebar.js'


// -------------------------------------------------------------------
// Prepare initial settings

updateSettingsBox(initialSettings())


// -------------------------------------------------------------------
// Generation

const generateSVG = (settings) => finalSVG(settings, circles(settings))
const generate = (settings) => update(generateSVG(settings))

// Initial run
generate(initialSettings())


// -------------------------------------------------------------------
// Set up handlers

addSidebarHandler()
addGenerateHandler(generate)
addDownloadHandler()

window.onresize = setWrapperDimensions
