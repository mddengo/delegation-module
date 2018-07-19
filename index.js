/**
 * STORE VARIABLE WITH FIELDS THAT ARE SHARED ACROSS ALL COMPONENTS
 */
var store = {
    debug: false,
    state: {
        isInstructor: false,
        loggedIn: false,
        skipped: false,
        dgTask: '',
        suggestedTaskEmail: '',
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
    setSkip () {
        this.state.skipped = true;
    },
    clearSkip () {
        this.state.skipped = false;
    },
    setSuggestedTaskEmail(task) {
        this.state.suggestedTaskEmail = task;
    },
    setDgTask(task) {
        this.state.dgTask = task;
    }
};

/**
 * Home Component with Instructor or Student views that lead to Instruction
 *
 * @type {{template: string, data: (function(): {isInstructor: boolean, radio1: string})}}
 */
const Home = {
    template: `
        <div v-if="isInstructor" class="instructor">
            <h3>Instructor Dashboard</h3>
            <p>{{this.isInstructor}}</p>
        </div>
        
        <div v-else class="student">
            <h3>Course Description</h3>
            <p>{{this.isInstructor}}!</p>
            <q-radio
            v-model="radio1"
            val="one"
            color="orange-11"
            unchecked-icon="radio_button_unchecked"
            checked-icon="radio_button_checked"></q-radio>
            <q-radio
            v-model="radio1"
            val="two"
            color="orange-11"
            unchecked-icon="radio_button_unchecked"
            checked-icon="radio_button_checked"></q-radio>
            <p>{{radio1}}</p>
            <q-btn
                @click="$router.push('/skip')"
                color="indigo-11"
                label="START"></q-btn>
        </div>
    `,
    data: function () {
        return {
            isInstructor: store.state.isInstructor,
            radio1: '',
        }
    },
};
const Login = {
    data: function () {
        return {
            user: '',
            pw: '',
        }
    },
    template: `
        <div class="login">
            <div style="width:300px; max-width:70vw;">
                <q-input v-model="user" float-label="Username" />
                <q-input v-model="pw" type="password" float-label="Password" />
                <div style="position:absolute; left:40%; margin-top:15px">
                    <q-btn
                    @click="$router.push('/')"
                    type="submit"
                    color="teal" label="Login"></q-btn>
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
};

/**
 * Assessment Component
 */
const Assessment = {
    data: function () {
        return {
            ass3a: true,
            ass3b: false,
            ass3c: false,
            ass3d: false,
            ass3e: false,
            ass3f: false,
            ass3g: false,
            ass3h: false,
            ass3i: false,
            ass3j: false,
            ass3k: false,
            ass3l: false,
            dgTask: '',
            dgEmailTask: '',
            radioAuth: '',
            radioResp: '',
            radioAccn: '',
            assCorrect: false,
            mod3ba: false,
        }
    },
    template: `
        <div class="assessment">
            <div class="mod3a" v-if="ass3a">
                <p>The following set of questions help us identify instruction specific to you. We assess your inputs to make more efficient use of your learning time. Please note that there is no pass/fail and your results will not be shared with your counselor, manager, nor supervisor.</p>
                <br>
                <q-btn
                    @click="ass3aToggle"
                    color="blue-grey"
                    label="Next"></q-btn>
            </div>
            <div class="mod3b" v-else-if="ass3b">
                <p>Think of the tasks for which you are responsible for completing on the job. Which tasks can you complete on your own? Which tasks should you delegate?</p>
                <p>Below, enter a task that you would like to delegate.</p>
                <div style="width:400px; max-width:100vw;">
                    <q-input v-model="dgTask" />
                </div>
                <br>
                <q-btn
                    @click="ass3bToggle"
                    :disable="dgTask.length < 5"
                    color="blue-grey"
                    label="Next"></q-btn>
            </div>
            <div class="mod3c" v-else-if="ass3c">
                <p>One of the definitions of delegation is "Sharing responsibility and authority with others and holding them accountable for performance."</p>
                <p>Using this definition, reflect on the following situation:</p>
                <p>You recently attended a client meeting with your subordinate. After the meeting, you ask your subordinate to draft a thank you email to the client which you will then review and send to the client.</p>
                <!--TODO-->
                <!--disagree agree agree-->
                <p>Strongly Disagree | Disagree | Neither agree nor disagree | Agree | Strongly Agree</p>
                <span>This delegation involves high sharing of Authority
                    <q-radio
                    v-model="radioAuth"
                    val="authsd"
                    color="orange-11"
                    unchecked-icon="radio_button_unchecked"
                    checked-icon="radio_button_checked"></q-radio>
                    <q-radio
                    v-model="radioAuth"
                    val="authdis"
                    color="orange-11"
                    unchecked-icon="radio_button_unchecked"
                    checked-icon="radio_button_checked"></q-radio>
                    <q-radio
                    v-model="radioAuth"
                    val="authneither"
                    color="orange-11"
                    unchecked-icon="radio_button_unchecked"
                    checked-icon="radio_button_checked"></q-radio>
                    <q-radio
                    v-model="radioAuth"
                    val="authagree"
                    color="orange-11"
                    unchecked-icon="radio_button_unchecked"
                    checked-icon="radio_button_checked"></q-radio>
                    <q-radio
                    v-model="radioAuth"
                    val="authsa"
                    color="orange-11"
                    unchecked-icon="radio_button_unchecked"
                    checked-icon="radio_button_checked"></q-radio>
                </span>
                <br>
                <span>This delegation involves high sharing of Responsibility
                    <q-radio
                    v-model="radioResp"
                    val="respsd"
                    color="orange-11"
                    unchecked-icon="radio_button_unchecked"
                    checked-icon="radio_button_checked"></q-radio>
                    <q-radio
                    v-model="radioResp"
                    val="respdis"
                    color="orange-11"
                    unchecked-icon="radio_button_unchecked"
                    checked-icon="radio_button_checked"></q-radio>
                    <q-radio
                    v-model="radioResp"
                    val="respneither"
                    color="orange-11"
                    unchecked-icon="radio_button_unchecked"
                    checked-icon="radio_button_checked"></q-radio>
                    <q-radio
                    v-model="radioResp"
                    val="respagree"
                    color="orange-11"
                    unchecked-icon="radio_button_unchecked"
                    checked-icon="radio_button_checked"></q-radio>
                    <q-radio
                    v-model="radioResp"
                    val="respsa"
                    color="orange-11"
                    unchecked-icon="radio_button_unchecked"
                    checked-icon="radio_button_checked"></q-radio>
                </span>
                <br>
                <span>This delegation involves high sharing of Accountability 
                    <q-radio
                    v-model="radioAccn"
                    val="accnsd"
                    color="orange-11"
                    unchecked-icon="radio_button_unchecked"
                    checked-icon="radio_button_checked"></q-radio>
                    <q-radio
                    v-model="radioAccn"
                    val="accndis"
                    color="orange-11"
                    unchecked-icon="radio_button_unchecked"
                    checked-icon="radio_button_checked"></q-radio>
                    <q-radio
                    v-model="radioAccn"
                    val="accnneither"
                    color="orange-11"
                    unchecked-icon="radio_button_unchecked"
                    checked-icon="radio_button_checked"></q-radio>
                    <q-radio
                    v-model="radioAccn"
                    val="accnagree"
                    color="orange-11"
                    unchecked-icon="radio_button_unchecked"
                    checked-icon="radio_button_checked"></q-radio>
                    <q-radio
                    v-model="radioAccn"
                    val="accnsa"
                    color="orange-11"
                    unchecked-icon="radio_button_unchecked"
                    checked-icon="radio_button_checked"></q-radio>
                </span>
                <br>
                <q-btn
                    @click="grade3c"
                    :disable="filledOut"
                    color="blue-grey"
                    label="Next"></q-btn>
            </div>
            <div class="mod3d" v-else-if="ass3d">
                <h5>Email Task</h5>
                <p>One of the definitions of delegation is "Sharing responsibility and authority with others and holding them accountable for performance."</p>
                <p>Using this definition, reflect on the following situation:</p>
                <p>You recently attended a client meeting with your subordinate. After the meeting, you ask your subordinate to draft a thank you email to the client which you will then review and send to the client.</p>
                <p>Can you suggest an alternate way of delegating the thank you email task?</p>
                <div style="width:500px">
                    <q-input type="textarea" v-model="dgEmailTask" :max-height="20" /> 
                </div>
                <br>
                <q-btn
                    @click="ass3dToggle"
                    :disable="dgEmailTask.length < 5"
                    color="blue-grey"
                    label="Next"></q-btn>
            </div>
            <div class="mod3e" v-else-if="ass3e"></div>
            <div class="mod3f" v-else-if="ass3f"></div>
            <div class="mod3g" v-else-if="ass3g"></div>
            <div class="mod3h" v-else-if="ass3h"></div>
            <div class="mod3i" v-else-if="ass3i"></div>
            <div class="mod3j" v-else-if="ass3j"></div>
            <div class="mod3k" v-else-if="ass3k"></div>
            <div class="mod3l" v-else-if="ass3l"></div>
            <div class="mod3ca" v-else-if="mod3ba">
                <h6>Defining Delegation</h6>
            </div>
        </div>
    `,
    computed: {
        filledOut () {
            return (this.radioAuth === '' ||
                    this.radioResp === '' ||
                    this.radioAccn === '');
        }
    },
    methods: {
        grade3c () {
            if (this.radioAuth === 'authdis' &&
                this.radioResp === 'respagree' &&
                this.radioAccn === 'accnagree') {
                this.ass3c = false;
                this.mod3ba = true;
            } else {
                this.ass3c = false;
                this.ass3d = true;
            }
        },
        ass3aToggle () {
          this.ass3a = false;
          this.ass3b = true;
        },
        ass3bToggle () {
            this.ass3b = false;
            this.ass3c = true;
        },
        ass3dToggle () {
            this.ass3d = false;
            this.ass3e = true;
        },
        ass3eToggle () {
            this.ass3e = false;
            this.ass3f = true;
        },
    },
    watch: {
        dgTask(val) {
            store.setDgTask(val);
            console.log("Delegated task is: "+ store.state.dgTask);
        },
        dgEmailTask(val) {
            store.setSuggestedTaskEmail(val);
            console.log("Suggested task email is: " + store.state.suggestedTaskEmail);
        },
    }
};

/**
 * Skip Component
 * Learner decides if they want to skip Instruction or not
 * @type {{data: (function(): {radio1: string}), template: string, watch: {radio1(*): void}, methods: {}}}
 */
const Skip = {
    data: function () {
        return {
            radio1: '',
        }
    },
    template: `
        <div class="skip">
            <h5>skip?</h5>
            <p>Choose an option below to proceed.</p>
            <q-radio
            v-model="radio1"
            val="skip"
            label="I would like to skip further instruction and go to the final section."
            color="orange-11"
            unchecked-icon="radio_button_unchecked"
            checked-icon="radio_button_checked"></q-radio>
            <q-radio
            v-model="radio1"
            val="noskip"
            label="I would like to go through the instruction and learn more before proceeding."
            color="orange-11"
            unchecked-icon="radio_button_unchecked"
            checked-icon="radio_button_checked"></q-radio>
            <br><br>
            <q-btn
                @click="$router.push('/instruction')"
                :disable="radio1 === ''"
                color="green"
                label="Submit"></q-btn>
        </div>
    `,
    watch: {
        radio1(val) {
            if (val === 'skip') {
                store.setSkip();
            } else {
                store.clearSkip();
            }
        },
    },
    methods: {
    },
};
const Dashboard = {
    data: function () {
        return {

        }
    },
    template: `
        <div class="dashboard">foo</div>
    `,
};
const Instruction = {
    data: function () {
        return {
            skipped: store.state.skipped,
            test: false,
            ins4a: true,
            ins4b: false,
            ins4c: false,
            ins4d: false,
            ins4e: false,
            ins4f: false,
            dg4bdec: false,
            radio4b: '',
            dg4bdecYes: false,
            dg4bdecNo: false,
        }
    },
    template: `
        <!--<div class="completion" v-if="skipped || test">-->
        <div class="completion" v-if="skipped">
            <p>SKIPPEd</p>
        </div>
        <div class="instruction" v-else>
            <div class="module-4a" v-if="ins4a">
                <p>When you delegate something, there are three things of importance.</p>
                <ol>
                    <li>
                        The <strong><i>person</i></strong> you delegate to, and where he or she is on the different aspects:
                        <ul>
                            <li><strong>Experience and knowledge:</strong> Who has the experience and technical skills necessary to manage the task? If you are delegating to someone who might have a gap, what can you do to bridge the gap for an effective outcome?</li>
                            <li><strong>Interest:</strong> Has someone in your team expressed a specific interest in the task you are considering to delegate?</li>
                            <li><strong>Time:</strong> Who has time available? In case no one is available, can you rearrange assignments?</li>
                            <li><strong>Work, communicating, and learning style:</strong> What is the best way to work with a specific person to accommodate their work, communicating, and learning style? Are you consistently delegating to the same person because that person has a similar style as you? If so, is there a need to get someone else involved?</li>
                        </ul>
                    </li>
                    <li>
                        The <strong><i>task</i></strong> and the different aspects of it:
                        <ul>
                            <li><strong>Urgency:</strong> By when does the task need to be accomplished?</li>
                            <li><strong>Quality:</strong> What are your quality standards and expectations? How can you ensure that the task is performed to these standards?</li>
                            <li><strong>Complexity:</strong> How complex is the task? Can the task be broken down into smaller or more manageable tasks?</li>
                            <li><strong>Priority:</strong> How important is the task?</li>
                        </ul>
                     </li>
                     <li>
                        And your expectations of the <strong><i>result</i></strong> you want to get.
                     </li>
                </ol>
                <p>These all have to be in line. Make sure when you delegate something that these different aspects are addressed.</p>
                <q-btn
                    @click="ins4aToggle"
                    color="blue-grey"
                    label="Next"></q-btn>
            </div>
            <div class="module-4b" v-else-if="ins4b">
                <p>List 10-15 tasks you do on a regular basis. Of these tasks, choose which tasks you can or want to delegate and which tasks you will carry out yourself.</p>
                <p>Write the <strong>tasks you do yourself.</strong></p>
                <div style="width:400px; max-width:100vw;">
                    <q-input float-label="Task 1" />
                    <q-input float-label="Task 2" />
                    <q-input float-label="Task 3" />
                    <q-input float-label="Task 4" />
                    <q-input float-label="Task 5" />
                    <q-input float-label="Task 6" />
                    <q-input float-label="Task 7" />
                    <q-input float-label="Task 8" />
                    <q-input float-label="Task 9" />
                    <q-input float-label="Task 10" />
                    <q-input float-label="Task 11" />
                    <q-input float-label="Task 12" />
                    <q-input float-label="Task 13" />
                    <q-input float-label="Task 14" />
                    <q-input float-label="Task 15" />
                    <br>
                </div>
                <p>Write the <strong>tasks you delegate.</strong> (Remember to include TODO)</p>
                <div style="width:400px; max-width:100vw;">
                    <q-input float-label="Delegated Task 1" />
                    <q-input float-label="Delegated Task 2" />
                    <q-input float-label="Delegated Task 3" />
                    <q-input float-label="Delegated Task 4" />
                    <q-input float-label="Delegated Task 5" />
                    <q-input float-label="Delegated Task 6" />
                    <q-input float-label="Delegated Task 7" />
                    <q-input float-label="Delegated Task 8" />
                    <q-input float-label="Delegated Task 9" />
                    <q-input float-label="Delegated Task 10" />
                    <br>
                </div>
                <div style="width:700px; max-width:100vw;">
                    <p>How many tasks did you delegate?</p>
                        <q-input />
                        <br>
                    <p>Why not fewer and why not more?</p>
                        <q-input type="textarea" :max-height="25" />
                        <br>
                    <p>How did you decide what to delegate? What criteria did you use?</p>
                        <q-input type="textarea" :max-height="40" />
                        <br>
                    <p>Did you choose to delegate the original task you wanted to delegate? (TODO)</p>
                        <q-radio
                        v-model="radio4b"
                        val="yes"
                        label="Yes"
                        color="orange-11"
                        unchecked-icon="radio_button_unchecked"
                        checked-icon="radio_button_checked"></q-radio>
                        <br>
                        <q-radio
                        v-model="radio4b"
                        val="no"
                        label="No"
                        color="orange-11"
                        unchecked-icon="radio_button_unchecked"
                        checked-icon="radio_button_checked"></q-radio>
                 </div>
                 <br>
                <q-btn
                    @click="ins4bToggle"
                    :disable="radio4b === ''"
                    color="blue-grey"
                    label="Next"></q-btn>
            </div>
            <div class="dg-decision" v-else-if="dg4bdec">
                <div class="4b-dg-yes" v-if="dg4bdecYes">YES</div>
                <div class="4b-dg-no" v-else-if="dg4bdecNo">NO</div>
                <br>
                <q-btn
                    @click="dgdecToggle"
                    color="blue-grey"
                    label="Next"></q-btn>
            </div>
            <div class="module-4c" v-else-if="ins4c"></div>
            <div class="module-4d" v-else-if="ins4d"></div>
            <div class="module-4e" v-else-if="ins4e"></div>
            <div class="module-4f" v-else-if="ins4f"></div>
        </div>
    `,
    methods: {
        ins4aToggle () {
            this.ins4a = false;
            this.ins4b = true;
        },
        ins4bToggle () {
            this.ins4b = false;
            this.dg4bdec = true;
            if (this.radio4b === "yes") {
                this.dg4bdecYes = true;
            } else {
                this.dg4bdecNo = true;
            }
        },
        dgdecToggle () {
            this.dg4bdec = false;
            this.ins4c = true;
        },
        ins4cToggle () {
            this.ins4c = false;
            this.ins4d = true;
        },
        ins4dToggle () {
            this.ins4d = false;
            this.ins4e = true;
        },
        ins4eToggle () {
            this.ins4e = false;
            this.ins4f = true;
        },
        ins4fToggle () {
            this.ins4f = false;
            // this.$route.router.go('/'); // router.go('/')
        },
    }
};

/**
 * ROUTER SECTION
 */
const routes = [
    { path: '/login', name: 'Login', component: Login },
    { path: '/', name: 'Home', component: Home },
    { path: '/skip', name: 'Skip', component: Skip },
    { path: '/assessment', name: 'Assessment', component: Assessment },
    { path: '/instruction', name: 'Instruction', component: Instruction },
];
const router = new VueRouter({
    routes
});

/**
 * MAIN APP COMPONENT
 */
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
