import 'reset-css'
import './app.scss'
import * as About from './js_modules/about-tab'
import * as Menu from './js_modules/menu-tab'
import * as FindUs from './js_modules/find-us-tab'

// Initial tab
const tabsContent = document.querySelector('.tabs-content')
tabsContent.innerHTML = About.getTab()
markTab('about')


// Tabs handler
const tabNavigation = document.querySelectorAll('.tab-title')
tabNavigation.forEach((tab) => {
    tab.addEventListener('mousedown', tabToggle)
})

function tabToggle(tab) {
    const tabs = {
        'about': About.getTab(),
        'menu': Menu.getTab(),
        'find-us': FindUs.getTab()
    }
    const tabData = tab.target.getAttribute('data-tab')
    const currentTab = tabs[tabData]

    tabsContent.innerHTML = currentTab
    markTab(tabData)
}

function markTab(tab) {
    const tabs = document.querySelectorAll('.tab-title')
    tabs.forEach((tab) => {
        tab.classList.remove('active')
    })
    const currentTab = document.querySelector(`.tab-title[data-tab="${tab}"]`)
    currentTab.classList.add('active')
}