import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import HomePage from '../components/HomePage.vue'

import Login from '../components/Login.vue'
import Register from '../components/Register.vue';
import GlobalHome from '../components/GlobalHome.vue';
import SingleProduct from '../components/SingleProduct.vue';
import ExampleComponent from '../components/ExampleComponent.vue'
import Shops from '../components/Shops.vue'

import WishList from '../components/WishList.vue'
import MyAccount from '../components/MyAccount.vue'
import CheckOut from '../components/CheckOut.vue'
import Carts from '../components/Carts.vue'
import About from '../components/About.vue'

const routes = [
    { path: '/', component: HomePage, name: 'HomePage' },
    { path: '/category/:id', component: Shops, name: 'Shops' },
    { path: '/product/:slug/:id', component: SingleProduct, name: 'SingleProduct' },
    { path: '/register', component: Register, name: 'Register' },
    { path: '/login', component: Login, name: 'Login' },
    { path: '/wishlist', component: WishList, name: 'WishList' },
    { path: '/myaccount', component: MyAccount, name: 'MyAccount' },
    { path: '/checkout', component: CheckOut, name: 'CheckOut' },
    { path: '/carts', component: Carts, name: 'Carts' },
    { path: '/shops', component: Shops, name: 'Shops' },
    { path: '/about', component: About, name: 'About' },
    { path: '/examplecomponent', component: ExampleComponent, name: 'ExampleComponent' },
];

const router = new VueRouter({
    routes,
    hashbang: false,
    mode: 'history'
})

export default router;
