// SVG functions


// -------------------------------------------------------------------
// General SVG functionality

// Given a window and a contents string, produces the overall SVG text
const frameSVG = (settings, contents) => `<svg id="svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 ${settings.width} ${settings.height}" xml:space="preserve">${contents}</svg>`

// Produces the SVG for the background
const backgroundSVG = (settings) => `<g id="background"><rect fill="${settings.bgColor}" width="${settings.width}" height="${settings.height}" /></g>`

// Produces the SVG for a circle
const circleSVG = (c) => `<circle cx="${c.x}" cy="${c.y}" r="${c.r}" />`

// Produces the SVG for all the circles
const circlesSVG = (circles) => `<g id="circles">${circles.map(circleSVG)}</g>`

// Produces the filter
const filterSVG = (settings) => (settings.turbulence ? `<filter id="circleFilter">
    <feTurbulence type="turbulence" baseFrequency="${settings.turbFreq1}" numOctaves="${settings.turbOctaves1}" result="turbulence2"/>
    <feDisplacementMap in2="turbulence2" in="SourceGraphic" scale="${settings.turbScale1}" xChannelSelector="R" yChannelSelector="G" result="disp"/>

    <feTurbulence type="turbulence" baseFrequency="${settings.turbFreq2}" numOctaves="${settings.turbOctaves2}" result="turbulence" />
    <feDisplacementMap in2="turbulence" in="disp" scale="${settings.turbScale2}" xChannelSelector="R" yChannelSelector="G" />
</filter>` : '')

// Produces the CSS
const cssSVG = (settings) => `<style type="text/css">
    #circles circle {
        fill: ${settings.circleColor};
        ${settings.turbulence ? 'filter: url(#circleFilter);' : ''}
    }
</style>`

// Produces the inner text
const innerSVG = (settings, circles) => [
    filterSVG(settings),
    cssSVG(settings),
    backgroundSVG(settings),
    circlesSVG(circles),
].join('')

// Produces the final SVG text
export const finalSVG = (settings, circles) => frameSVG(settings, innerSVG(settings, circles))


// -------------------------------------------------------------------
// Download-related functionality

// Get the SVG from the DOM
const getSVGTextFromDOM = () => document.getElementById('svg').innerHTML

// Turn the SVG text into a file for downloading
export const svgBlob = (svg) => (new Blob([svg], {type: 'image/svg+xml'}))

// Produces SVG for download (adds the XML bit, which we don't use
// in the in-browser preview)
export const downloadSVG = (settings) => `<?xml version="1.0" encoding="utf-8"?>${frameSVG(settings, getSVGTextFromDOM())}`
