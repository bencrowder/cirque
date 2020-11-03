// Settings functions


// -------------------------------------------------------------------
// Initial settings

export const initialSettings = () => ({
    width: 800,
    height: 800,
    circles: 1200,
    attempts: 100,
    startRadius: 3,
    maxRadius: 80,
    radiusStep: 0.1,
    borderPadding: 2,
    bgColor: "#333",
    circleColor: "#fff",
    turbulence: 1,
    turbFreq1: 0.05,
    turbOctaves1: 5,
    turbScale1: 2,
    turbFreq2: 0.02,
    turbOctaves2: 5,
    turbScale2: 0.5,
})


// -------------------------------------------------------------------
// Functions for turning the settings object into text

// Turn individual setting into text (for settings textarea)
const settingToText = (setting) => `${setting[0]}: ${setting[1]}`

// Turn settings into text (for settings textarea)
export const settingsToText = (settings) => Object.entries(settings).map(settingToText).join("\n")


// -------------------------------------------------------------------
// Functions for turning text back into a settings object

// Get settings text from the textarea
export const getSettingsBoxText = () => document.querySelector('textarea#settings').value

// Split and trim
const splitAndTrim = (text, delimiter) => text.split(delimiter).map((e) => e.trim())

// Split settings text into lines
const settingLinesFromText = (text) => splitAndTrim(text, '\n')

// Split a settings line into its key/value parts, returns a two-element array
const settingFromText = (text) => splitAndTrim(text, ':')

// Parse the field with the right type
export const parseType = (field, value) => ({
    width: parseInt,
    height: parseInt,
    circles: parseInt,
    attempts: parseInt,
    startRadius: parseFloat,
    maxRadius: parseFloat,
    radiusStep: parseFloat,
    borderPadding: parseFloat,
    bgColor: String,
    circleColor: String,
    turbulence: parseInt,
    turbFreq1: parseFloat,
    turbOctaves1: parseFloat,
    turbScale1: parseFloat,
    turbFreq2: parseFloat,
    turbOctaves2: parseFloat,
    turbScale2: parseFloat,
}[field])(value)

// Parse the integer value of the setting
const parseSetting = (setting) => [setting[0], parseType(setting[0], setting[1])]

// Get settings from the textarea and turn into an array
const settingsArrayFromText = () => settingLinesFromText(getSettingsBoxText())
    .map(settingFromText)
    .map(parseSetting)

// Turn a settings array into an object
const settingsObjectFromArray = (a) => a.reduce((acc, item) => { acc[item[0]] = item[1]; return acc }, {})

// Get settings from the textarea
export const getSettings = () => settingsObjectFromArray(settingsArrayFromText())
