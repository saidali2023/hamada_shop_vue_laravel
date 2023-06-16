/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');




import Toaster from 'v-toaster'
import 'v-toaster/dist/v-toaster.css'
Vue.use(Toaster, {timeout: 4000})


Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('global-home', require('./components/GlobalHome.vue').default);
Vue.component('register', require('./components/Register.vue').default);
Vue.component('login', require('./components/Login.vue').default);
Vue.component('myfooter', require('./components/MyFooter.vue').default);
Vue.component('home-page', require('./components/HomePage.vue').default);
Vue.component('header-top', require('./components/Header.vue').default);
Vue.component('categotries', require('./components/Categotries.vue').default);

Vue.component('wishlist', require('./components/WishList.vue').default);
Vue.component('myaccount', require('./components/MyAccount.vue').default);
Vue.component('checkout', require('./components/CheckOut.vue').default);
Vue.component('carts', require('./components/Carts.vue').default);



/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
 import router from './routes/routes'
import Axios from 'axios';

import Vuex from 'vuex';
Vue.use(Vuex)
// https://stackoverflow.com/questions/71294692/how-to-fetch-data-from-api-in-vuex
// https://medium.com/@esmaydogdu/vuex-fetch-b0e8472e7676
const store = new Vuex.Store({
    state: {
        userToken:null,
        productId:null,
        user: null,
        EditedPost: {},
        searchProducts: {},
        // OrderDetails: {},
        OrderDetails: '2',
        contactInfo:'',
        categotries:[]
    },
    getters: { //center
        isLogged(state) {
            return !!state.userToken;
        },
        isAdmin(state) {
            if (state.user) {
                return state.user.is_admin
            }
            return null
        },
        PostToEdit(state) {
            return state.EditedPost
        },
        getSearchProducts(state) {
            return state.searchProducts
        },
        getOrderDetails(state) {
            return state.OrderDetails
        },

    },
    mutations: {
        setUserToken(state, userToken) {
            state.userToken = userToken;
            localStorage.setItem('userToken', JSON.stringify(userToken));
            axios.defaults.headers.common.Authorization = `Bearer ${userToken}`
        },
        removeUserToken(state) {

            state.userToken = null;
            localStorage.removeItem('userToken')
        },
        setUser(state, user) {
            state.user = user
        },
        logout(state) {
            state.userToken = null;
            localStorage.removeItem('userToken');
            window.location.pathname = "/"
        },
        EditPost(state, post){
            state.EditedPost = post;
        },
        saveSearchProducts(state, products) {
            state.searchProducts = products;
        },
        saveOrderDetails(state, datails) {
            state.OrderDetails = datails;
        },
        updateContactinfo(state, contactinfo){
          state.contactInfo = contactinfo;
        },
        updateCategotries(state, categotries){
          state.categotries = categotries;
        },

    },
    actions: {
        addToCart({ state },payload){
          const headers = {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer '+state.userToken
          };
          axios.post('https://elnamat.com/poems/eshop/api/buyers/addtocart',
             payload,headers
           ).then(res => {
             console.log(res);
             this.$toaster.success('Your toaster success message.');
             swal({
                 text: "User signup successful, please login",
                 icon: "success",
                 title: 'Your work has been saved',
                 timer: 2500
               });
          })
        },
        removeFromCart({ state },payload){
          const headers = {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer '+state.userToken
          };
          axios.post('https://elnamat.com/poems/eshop/api/buyers/product/remove-from-cart',
             payload,headers
           ).then(res => {
             console.log(res);
             this.$toaster.success(res.data.msg);

          })
        },
        removeFromWishlists({ state },payload){
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+state.userToken
            };
            axios.post('https://elnamat.com/poems/eshop/api/buyers/addto/wishlists',
               payload,headers
             ).then(res => {
               console.log(res);
               this.$toaster.success(res.data.msg);

            })
        },
        RegisterUser({ commit }, payload) {
            axios.post('https://elnamat.com/poems/eshop/api/buyers/register', payload)
                .then(res => {
                    console.log(res)
                    commit('setUserToken', res.data.token)
                })
                .catch(err => {
                    console.log(err)
                })
        },
        LoginUser({ commit }, payload) {
          axios.post('https://elnamat.com/poems/eshop/api/buyers/login', payload)
              .then(res => {
                  console.log(res);
                  commit('setUserToken', res.data.data.token);
                  localStorage.setItem('userTokenn', JSON.stringify('hgcychchchcghchgchghcgchgchgchgchg'));
              })
              .catch(err => {
                  console.log(err)
              })



        },
        getContactinfo({commit}){
           axios.get('https://elnamat.com/poems/eshop/api/buyers/contactinfo')
          .then(res =>{
            // console.log(res.data.data);
            store.commit('updateContactinfo', res.data.data);
          })
          .catch(err =>{
            console.log(err)
          })
        },
        getCategotries({commit}){
            axios.get('https://elnamat.com/poems/eshop/api/buyers/categotries')
            .then(res => {
              console.log('Component mountvvvvmmmm.');
              // console.log(res.data.data);
                // this.categotries = res.data;
                store.commit('updateCategotries', res.data.data);
            })
            .then(err => console.log(err))
        }

    }

})

const app = new Vue({
    el: '#app',
    router,
    store: store,
});
