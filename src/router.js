import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import About from './components/About.vue'
import SheetDB from './components/SheetDB.vue'

Vue.use(Router)

export default new Router ({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/sheetdb',
            name: 'sheetdb',
            component: SheetDB
        }
    ]
})