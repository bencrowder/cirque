// Sidebar-related functionality

import { update } from './dom.js'
import { getSettings } from './settings.js'
import { downloadSVG, svgBlob } from './svg.js'


const toggleSidebar = () => document.querySelector('aside').classList.toggle('active')

// Sidebar toggle button handler
export const addSidebarHandler = () => {
    document.addEventListener('click', (event) => {
        if (!event.target.matches('.settings.button')) return

        toggleSidebar()
    })
}

// Sidebar generate button handler
export const addGenerateHandler = (generate) => {
    document.addEventListener('click', (event) => {
        if (!event.target.matches('#generate')) return

        generate(getSettings())
    })
}

// Sidebar download button handler
export const addDownloadHandler = () => {
    document.addEventListener('click', (event) => {
        if (!event.target.matches('#download')) return

        const svg = downloadSVG(getSettings())
        const a = document.createElement('a')
        a.href = URL.createObjectURL(svgBlob(svg))
        a.download = 'cirque.svg'
        a.click()
        URL.revokeObjectURL(a.href)
    })
}
