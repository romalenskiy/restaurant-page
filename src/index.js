import 'reset-css'
import './app.scss'
import * as About from './js_modules/about-tab'
import * as Menu from './js_modules/menu-tab'

const tabNavigation = document.querySelector('.tabs-navigation')
tabNavigation.addEventListener('mousedown', tabToggle)

function tabToggle(tab) {
    const tabs = {
        'about': About.getTab(),
        'menu': Menu.getTab()
    }
    const currentTab = tabs[tab.target.getAttribute('data-tab')]

    const tabsContent = document.querySelector('.tabs-content')
    tabsContent.innerHTML = currentTab
}