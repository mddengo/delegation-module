var store = {
    debug: false,
    state: {
        isInstructor: false,
        loggedIn: false,
    },
    setInstructor () {
        this.state.isInstructor = true;
        if (this.debug) console.log('setMessageAction triggered with', this.state.isInstructor)
    },
    clearInstructor () {
        if (this.debug) console.log('clearMessageAction triggered')
        this.state.isInstructor = false;
    },
    setLoggedIn () {
        this.state.loggedIn = true;
    },
    clearLoggedIn () {
        this.state.loggedIn = false;
    },

};

const Home = {
    template: `
        <div v-if="isInstructor" class="instructor">
            <h3>Instructor Dashboard</h3>
            <p>{{this.isInstructor}}</p>
        </div>
        
        <div v-else class="student">
            <h3>Course Description</h3>
            <p>{{this.isInstructor}}!</p>
            <q-btn color="indigo-11" label="START"></q-btn>
        </div>
    `,
    data: function () {
        return {
            isInstructor: store.state.isInstructor,
        }
    },
    // ready: function () {
    //     store.setLoggedIn();
    // }
};
const Login = {
    data: function () {
        return {
            user: '',
        }
    },
    template: `
        <div class="login">
            <div style="width:300px; max-width:70vw;">
                <q-input v-model="user" float-label="Username" />
                <q-input type="password" float-label="Password" />
                <div style="position:absolute; left:40%; margin-top:15px">
                    <router-link to="/"><q-btn color="teal" label="Login"></q-btn></router-link>
                </div>
            </div>
        </div>
    `,
    watch: {
        user(val) {
            if (val === 'instructor') {
                store.setInstructor();
            } else {
                store.clearInstructor();
            }
        },
    },
    // ready: function () {
    //     store.clearLoggedIn();
    // }
};

const routes = [
    { path: '/login', name: 'Login', component: Login },
    { path: '/', name: 'Home', component: Home },
];
const router = new VueRouter({
    routes
});

const app = new Vue({
    el: '#app',
    router,
    data: {
        loggedIn: store.state.loggedIn,
    },
    methods: {
    },
    watch: {
    },
    components: {
        login: Login,
        home: Home,
    }
}).$mount('#app')
