// Vue.component('tab-delegation-log', {
//    template: '<div class="tab-content">Delegation Log</div>',
// });
//
// Vue.component('tab-active-modules', {
//     template: '<div class="tab-content">Active modules</div>',
// });
// Vue.component('tab-pending-peer-reviews', {
//     template: '<div class="tab-content">Pending peer reviews</div>',
// });

// var app = new Vue({
//     el: '#app',
//     data: {
//         currTab: 'Delegation Log',
//         tabs: ['Active Modules', 'Pending Peer Reviews', 'Delegation Log'],
//     },
//     computed: {
//         currTabComponent: function() {
//             let currTab = this.currTab.toLowerCase().split(' ').join('-');
//             return 'tab-' + currTab;
//         }
//     }
// });

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

// Vue.component('my-page', {
//     template: '#my-page'
// });

const routes = [
    { path: '/foo', name: 'Foo', component: Foo },
    { path: '/bar', name: 'Bar', component: Bar },
]
const router = new VueRouter({
    routes
})

const app = new Vue({
    el: '#app',
    router,
    // data: function () {
    //     return {
    //         version: Quasar.version,
    //         drawerState: true
    //     }
    // },
    // methods: {
    //     launch: function (url) {
    //         Quasar.utils.openURL(url)
    //     }
    // },
}).$mount('#app')
