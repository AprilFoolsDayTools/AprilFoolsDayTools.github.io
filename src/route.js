import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Home from '@/pages/home.vue'
import FakeImg from '@/pages/fakeimg.vue'
import error from '@/pages/error.vue'

const routes = [
    { path: '/', name: 'index', redirect: '/home' },
    { path: '/home', name: 'home', component: Home, title: '首頁' },
    { path: '/fakeimg', name: 'fakeimg', component: FakeImg, title: 'DC騙圖產生器' },
    { path: '/page/:has?', name: 'notfond', component: error },
    { path: '/:pathMatch(.*)*', name: '404', component: error },
]

const routeList = [
    { category: '首頁', url: '/home' },
    { category: 'DC騙圖產生器', url: '/fakeimg' },
]
const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export { router, routeList } 