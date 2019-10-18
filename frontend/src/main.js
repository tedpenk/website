import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.filter('reverse', function (value) {
    // slice to make a copy of array, then reverse the copy
    return value.slice().reverse();
});

new Vue({
    extends: App,
    router
}).$mount('#app');