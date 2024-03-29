import Vue from "vue";
import Router from "vue-router";

import Home from '@/components/Home.vue'
import Login from '../components/Auth/Login.vue'
import Registration from '../components/Auth/Registration.vue'
import AdList from '../components/Ads/AdList.vue'
import Ad from '../components/Ads/Ad.vue'
import NewAd from '../components/Ads/NewAd.vue'
import Orders from '../components/User/Orders.vue'

import AuthGuard from './auth-guard'

Vue.use(Router);

export default new Router({
    routes: [
        {path: '', name: 'home', component: Home},
        {path: '/login', name: 'login', component: Login},
        {path: '/registration', name: 'registration', component: Registration},
        {path: '/ad-list', name: 'ad-list', component: AdList, beforeEnter: AuthGuard},
        {path: '/ad/:id', name: 'ad', component: Ad, props: true},
        {path: '/new-ad', name: 'new-ad', component: NewAd, beforeEnter: AuthGuard},
        {path: '/orders', name: 'orders', component: Orders, beforeEnter: AuthGuard}
    ],
    mode: 'history'
});
