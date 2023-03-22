import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import HomePage from '../components/HomePage.vue'

import Login from '../components/Login.vue'
import Register from '../components/Register.vue';
import GlobalHome from '../components/GlobalHome.vue';
import SingleProduct from '../components/SingleProduct.vue';
import ExampleComponent from '../components/ExampleComponent.vue'

const routes = [
    { path: '/', component: HomePage, name: 'HomePage' },
    { path: '/product/:slug/:id', component: SingleProduct, name: 'SingleProduct' },
    { path: '/register', component: Register, name: 'Register' },
    { path: '/login', component: Login, name: 'Login' },
    { path: '/examplecomponent', component: ExampleComponent, name: 'ExampleComponent' },
];

const router = new VueRouter({
    routes,
    hashbang: false,
    mode: 'history'
})

export default router;
