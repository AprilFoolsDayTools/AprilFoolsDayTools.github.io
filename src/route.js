import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Home from '@/pages/home.vue'
import FakeImg from '@/pages/fakeimg.vue'
import Shoping from '@/pages/shoping.vue'
import ShopingDashboard from '@/pages/shopingDashboard.vue'

const routes = [
    { path: '/', name: 'index', redirect: '/home' },
    { path: '/home', name: 'home', component: Home, title: '首頁' },
    { path: '/fakeimg', name: 'fakeimg', component: FakeImg, title: 'DC騙圖產生器' },
    { path: '/shoping', name: 'shoping', component: Shoping, title: '購物商城' },
    { path: '/shoping-dashboard', name: 'shopingDashboard', component: ShopingDashboard, title: '購物商城控制台' },
    { path: '/page/:has?', name: 'notfond', component: Home },
    { path: '/:pathMatch(.*)*', name: '404', component: Home },
]

const routeList = [
    { category: '首頁', url: '/home' },
    { category: 'DC騙圖產生器', url: '/fakeimg' },
    // { category: '購物商城', url: '/shoping' },
    // { category: '購物商城控制台', url: '/shoping-dashboard' },
]
const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
});

export { router, routeList } 