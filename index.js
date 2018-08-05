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
 * Modules Component
 */
const Modules = {
    template: `
        <div class="modules">
            <div class="top-bar">
                <div class="text">
                    <h3><q-icon name="people_outline" size="60px" />Essential Delegation Skills</h3>
                    <p style="padding-right: 7em">This course will introduce you to the basics of delegation as a new leader in your organization.
                    This first course in the Delegation track focuses on determining which tasks to delegate.</p>
                    <q-btn
                        class="float-left"
                        @click="$router.push('/welcome')"
                        style="background:#e9d985;
                            color: #605f5e;
                            font-family:'Lato', sans-serif;" 
                        label="Start Chapter 1"></q-btn>
                    <div class="float-right" wait-for-ripple style="width: 400px; max-width:666px;font-family:'Lato', sans-serif;">
                        <div class="float-left" style="font-size:small;">0 out of 4 Chapters Complete</div>
                        <q-icon class="float-right" name="school" />
                        <q-progress :percentage="progress" color="#707070" width="666px" height="20px" />
                    </div>
                </div>
            </div>
            <div class="main-section">
                <q-list style="background-color:#496c94; color:#f0f3f6;">
                    <q-collapsible opened label="Chapter 1: Intro to Delegation">
                    <div>
                        <q-list separator style="background-color: white; color: #605f5e">
                            <q-item>
                                <q-item-main label="Welcome to the Delegation Module" />
                                <q-item-side right>
                                    <q-radio v-model="moduleRadio" val="welc"/>
                                </q-item-side>
                            </q-item>
                            <q-item>
                                <q-item-main label="Integrated Delegation Task" />
                                <q-item-side right>
                                    <q-radio v-model="moduleRadio" val="intdgtask"/>
                                </q-item-side>
                            </q-item>
                            <q-item>
                                <q-item-main label="Intro to Delegation: Pre-Assessment" />
                                <q-item-side right>
                                    <q-radio v-model="moduleRadio" val="preass"/>
                                </q-item-side>
                            </q-item>
                            <q-item>
                                <q-item-main label="Intro to  Delegation: Instruction" />
                                <q-item-side right>
                                    <q-radio v-model="moduleRadio" val="instr"/>
                                </q-item-side>
                            </q-item>
                        </q-list>
                    </div>
                    </q-collapsible>
                </q-list>
                <br>
                <q-list style="background-color:white;">
                    <q-collapsible label="Chapter 2: Benefits & Challenges of Delegation">
                    <div>
                        Content
                    </div>
                    </q-collapsible>
                </q-list>
                <br>
                <q-list style="background-color:white;">
                    <q-collapsible label="Chapter 3: Rules of Delegation">
                    <div>
                        Content
                    </div>
                    </q-collapsible>
                </q-list>
                <br>
                <q-list style="background-color:white;">
                    <q-collapsible label="Chapter 4: Purpose of Task">
                    <div>
                        Content
                    </div>
                    </q-collapsible>
                </q-list>
            </div>
        </div>
    `,
    data: function () {
        return {
            progress: 1,
            moduleRadio: '',
        }
    },
};

/**
 * Welcome Component
 */
const Welcome = {
    template: `
        <div class="welcome-cmp">
            <div class="main">
                <q-card flat color="white" text-color="secbrand" style="min-width: 400px; max-width: 828px; margin:0 auto;">
                    <q-card-main style="padding:5em;">
                        <p style="font-size:30px;font-family:'Dosis',sans-serif;color:#496c94;">Welcome to the Delegation Module</p>
                        <p>Welcome to the course!</p>
                        <p>By the end of this course, you should be well-equipped to:</p>
                        <ul>
                        <li><strong>Define delegation</strong> and identify <strong>features of good delegation</strong></li>
                        <li>Identify potential <strong>benefits and challenges</strong> of delegation</li>
                        <li>Identify <strong>which tasks should be delegated</strong> and <strong>which tasks you must do yourself</strong>, and explain why</li>
                        <li>Identify a <strong>clear purpose of the delegated tasks</strong> and communicate it effectively</li>
                        </ul>
                    </q-card-main>
                </q-card>
                <br>
                <div style="position:absolute; left:45%;">
                <q-btn
                    @click="$router.push('/assessment')"
                    style="background:#e9d985;
                        color: #605f5e;"
                    label="Continue"></q-btn>
                 </div>
                    
</div>
</div>
    `,
    data: function () {
        return {

        }
    },
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
            <div class="landing">
                <div class="vertical-middle landing-text">
                <div class="welcome"><h3>Welcome</h3></div>
                <div class="welcome-text"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
                <div class="welcome-buttons">
                <q-btn
                    style="background: #496c94;
                    color: white"
                    @click="$router.push('/login')"
                    label="Start" />
                <q-btn
                    color="white"
                    text-color="black"
                    outline
                    label="Learn More"></q-btn>
                </div>
            </div>
            </div></div>
        <div class="benefits">
            <h3>Features</h3>
            <div class="row gutter-md">
                <div class="col">
                    <img src="assets/benefitL.svg" width="35%">
                    <h5>Pre-Assessment</h5>
                    <p>Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ero
                    labore et dolore.</p>
                </div>
                <div class="col">
                    <img src="assets/benefitM.svg" width="35%">
                    <h5>Peer Review</h5>
                    <p>Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ero
                    labore et dolore.</p>
                </div>
                <div class="col">
                    <img src="assets/benefitR.svg" width="35%">
                    <h5>Planning & On-the-Job</h5>
                    <p>Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ero
                    labore et dolore.</p>
                </div>
            </div>
        </div>
        </div>
    `,
    data: function () {
        return {
            isInstructor: store.state.isInstructor,
            radio1: '',
        }
    },
};

/**
 * Login Component
 * @type {{data: (function(): {user: string, pw: string}), template: string, watch: {user(*): void}}}
 */
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
                    style="background: #496c94;
                    color: white"
                    @click="$router.push('/dashboard')"
                    type="submit"
                    label="Login"></q-btn>
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
    template: `
        <div class="assessment">
            <q-layout-drawer overlay behavior="mobile" side="left" v-model="left" style="width:380px;">
                <q-list separator>
                    <q-item style="color:#496c94;font-size:25px;">
                        Chapter List
                    </q-item>
                            <q-item class="cursor-pointer" style="background-color:#496c94;color:#f0f3f6;">
                                Chapter 1
                            </q-item>
                                <q-item>
                                    <q-item-main>Welcome to the Delegation Module</q-item-main>
                                    <q-item-side right>
                                        <q-radio />
                                    </q-item-side>
                                </q-item>
                                <q-item>
                                    <q-item-main>Integrated Delegation Task</q-item-main>
                                    <q-item-side right>
                                        <q-radio />
                                    </q-item-side>
                                </q-item>
                                <q-item>
                                    <q-item-main>Intro to Delegation: Pre-Assessment</q-item-main>
                                    <q-item-side right>
                                        <q-radio />
                                    </q-item-side>
                                </q-item>
                                <q-item style="background-color:#e9d985;color:#605f5e;">
                                    <q-item-main>Intro to Delegation: Instruction</q-item-main>
                                    <q-item-side right>
                                        <q-radio v-model="mod1radio"/>
                                    </q-item-side>
                                </q-item>
                            <q-item style="background-color:white;color:#496c94;">
                                Chapter 2
                            </q-item>
                            <q-item style="background-color:white;color:#496c94;">
                                Chapter 3
                            </q-item>
                            <q-item style="background-color:white;color:#496c94;">
                                Chapter 4
                            </q-item>
                </q-list>
            </q-layout-drawer>
            <q-btn
            @click="left = !left"
            class="float-left"
             style="color: #496c94;"
             flat round dense
             icon="menu"
            />
            <p @click="$router.push('/modules')" class="float-right cursor-pointer" style="color: #496c94;">Return to Course</p>
            <br><br>
            <div class="mod3a" v-if="ass3a">
                <div class="row">
                    <div class="col-4">
                        <q-card flat color="brand" text-color="lightbrand" style="height:450px;">
                            <q-card-main style="font-size:17px;padding-top:3em;padding-left:2em; padding-right:2em;"> 
                                <p style="font-size:24px;font-family:'Dosis',sans-serif;">Integrated Delegation Task</p>
                                <p>The following set of questions helps us identify instruction specific to you.
                                <br>
                                <br>We assess your inputs to make more efficient use of your learning time.
                                <br>
                                <br>Please note that there is no pass/fail and your results will not be shared with your counselor, manager, nor supervisor.</p>
                                <br>
                            </q-card-main>
                        </q-card>
                    </div>
                    <div class="col-8">
                        <q-card flat color="white" text-color="secbrand" style="height:450px;">
                            <q-card-main style="padding: 15% 15% 15%; font-size:17.5px;">
                                <p>1. Think of the tasks for which you are responsible for completing on the job. Which tasks can you complete on your own? Which tasks should you delegate?</p>
                                <p>Below, enter a task that you would like to delegate.</p>
                                <div style="max-width:400px;">
                                    <q-input placeholder="Input Text Here" v-model="dgTask" />
                                </div>
                                <br><br><br><br>
                            </q-card-main>
                        </q-card>
                    </div>
                    </div>
                    <br>
                    <div class="fixed-bottom-right save-buttons">
                <q-btn
                    @click="saved"
                    style="background: #e9d985;
                    color: #605f5e;"
                    label="Save"></q-btn>
                <q-btn
                    @click="ass3aToggle"
                    style="background: #e9d985;
                    color: #605f5e;"
                    :disable="ass3aSaveCont"
                    label="Save & Continue"></q-btn>
                    </div>
            </div>
            <div class="mod3b" v-else-if="ass3b">
                <div class="row">
                    <div class="col-4">
                        <q-card flat color="brand" text-color="lightbrand" style="height: 700px; max-height: 1000px;">
                            <q-card-main style="font-size:17px;padding-top:5em;padding-left: 15%; padding-right: 10%;"> 
                                <p style="font-size:30px;font-family:'Dosis',sans-serif;">Pre-Assessment</p>
                                <p>The following set of questions helps us identify instruction specific to you.
                                <br>
                                <br>We assess your inputs to make more efficient use of your learning time.
                                <br>
                                <br>Please note that there is no pass/fail and your results will not be shared with your counselor, manager, nor supervisor.</p>
                                <br>
                            </q-card-main>
                        </q-card>
                    </div>
                    <div class="col-8">
                        <q-card flat color="white" text-color="secbrand" style="min-width:600px;height:700px; max-height: 1000px;">
                            <q-card-main style="padding: 5% 10% 10%;font-size:17px;">
                                <p>2. One of the definitions of delegation is "Sharing responsibility and authority with others and holding them accountable for performance."</p>
                                <p>Using this definition, reflect on the following situation:</p>
                                <p>You recently attended a client meeting with your subordinate. After the meeting, you ask your subordinate to draft a thank you email to the client which you will then review and send to the client.</p>
                                <!--disagree agree agree-->
                                <div class="row justify-end" style="font-size:14px;">
                                    <div class="col-12 col-md-2">Strongly Disagree</div>
                                    <div class="col-12 col-md-2">Disagree</div>
                                    <div class="col-12 col-md-2">Neither Agree nor Disagree</div>
                                    <div class="col-12 col-md-2">Agree</div>
                                    <div class="col-12 col-md-2">Strongly Agree</div>
                                </div>
                                <div class="row justify-start">
                                    <div class="col-12 col-md-2" style="font-size:14px;">This delegation involves high sharing of Authority</div>
                                    <div class="col-12 col-md-2">
                                        <q-radio
                                            v-model="radioAuth"
                                            val="authsd"
                                            color="brand"
                                            unchecked-icon="radio_button_unchecked"
                                            checked-icon="radio_button_checked"></q-radio>
                                    </div>
                                    <div class="col-12 col-md-2">
                                        <q-radio
                                        v-model="radioAuth"
                                        val="authdis"
                                        color="brand"
                                        unchecked-icon="radio_button_unchecked"
                                        checked-icon="radio_button_checked"></q-radio>
                                    </div>
                                    <div class="col-12 col-md-2">
                                        <q-radio
                                        v-model="radioAuth"
                                        val="authneither"
                                        color="brand"
                                        unchecked-icon="radio_button_unchecked"
                                        checked-icon="radio_button_checked"></q-radio>
                                    </div>
                                    <div class="col-12 col-md-2">
                                        <q-radio
                                        v-model="radioAuth"
                                        val="authagree"
                                        color="brand"
                                        unchecked-icon="radio_button_unchecked"
                                        checked-icon="radio_button_checked"></q-radio>
                                    </div>
                                    <div class="col-12 col-md-2">
                                        <q-radio
                                        v-model="radioAuth"
                                        val="authsa"
                                        color="brand"
                                        unchecked-icon="radio_button_unchecked"
                                        checked-icon="radio_button_checked"></q-radio>
                                    </div>
                                </div>
                                <br>
                                <div class="row justify-start">
                                    <div class="col-12 col-md-2" style="font-size:14px;">This delegation involves high sharing of Responsibility</div>
                                    <div class="col-12 col-md-2">
                                        <q-radio
                                            v-model="radioResp"
                                            val="respsd"
                                            color="brand"
                                            unchecked-icon="radio_button_unchecked"
                                            checked-icon="radio_button_checked"></q-radio>
                                    </div>
                                    <div class="col-12 col-md-2">
                                        <q-radio
                                        v-model="radioResp"
                                        val="respdis"
                                        color="brand"
                                        unchecked-icon="radio_button_unchecked"
                                        checked-icon="radio_button_checked"></q-radio>
                                    </div>
                                    <div class="col-12 col-md-2">
                                        <q-radio
                                        v-model="radioResp"
                                        val="respneither"
                                        color="brand"
                                        unchecked-icon="radio_button_unchecked"
                                        checked-icon="radio_button_checked"></q-radio>
                                    </div>
                                    <div class="col-12 col-md-2">
                                        <q-radio
                                        v-model="radioResp"
                                        val="respagree"
                                        color="brand"
                                        unchecked-icon="radio_button_unchecked"
                                        checked-icon="radio_button_checked"></q-radio>
                                    </div>
                                    <div class="col-12 col-md-2">
                                        <q-radio
                                        v-model="radioResp"
                                        val="respsa"
                                        color="brand"
                                        unchecked-icon="radio_button_unchecked"
                                        checked-icon="radio_button_checked"></q-radio>
                                    </div>
                                </div>
                                <br>
                                <div class="row justify-start">
                                    <div class="col-12 col-md-2" style="font-size:14px;">This delegation involves high sharing of Accountability</div>
                                    <div class="col-12 col-md-2">
                                        <q-radio
                                            v-model="radioAccn"
                                            val="accnsd"
                                            color="brand"
                                            unchecked-icon="radio_button_unchecked"
                                            checked-icon="radio_button_checked"></q-radio>
                                    </div>
                                    <div class="col-12 col-md-2">
                                        <q-radio
                                            v-model="radioAccn"
                                            val="accndis"
                                            color="brand"
                                            unchecked-icon="radio_button_unchecked"
                                            checked-icon="radio_button_checked"></q-radio>
                                    </div>
                                    <div class="col-12 col-md-2">
                                        <q-radio
                                            v-model="radioAccn"
                                            val="accnneither"
                                            color="brand"
                                            unchecked-icon="radio_button_unchecked"
                                            checked-icon="radio_button_checked"></q-radio>
                                    </div>
                                    <div class="col-12 col-md-2">
                                        <q-radio
                                            v-model="radioAccn"
                                            val="accnagree"
                                            color="brand"
                                            unchecked-icon="radio_button_unchecked"
                                            checked-icon="radio_button_checked"></q-radio>
                                    </div>
                                    <div class="col-12 col-md-2">
                                        <q-radio
                                        v-model="radioAccn"
                                        val="accnsa"
                                        color="brand"
                                        unchecked-icon="radio_button_unchecked"
                                        checked-icon="radio_button_checked"></q-radio>
                                    </div>
                                </div>
                            </q-card-main>
                        </q-card>
                    </div>
                </div>
                <br>
                <div class="fixed-bottom-right save-buttons">
                    <q-btn
                    @click="saved"
                    style="background: #e9d985;
                    color: #605f5e;"
                    label="Save"></q-btn>
                    <q-btn
                    @click="grade3b"
                    :disable="filledOut"
                    style="background: #e9d985;
                    color: #605f5e;"
                    label="Save & Continue"></q-btn>
                </div>
            </div>
            
            <div class="mod3c" v-else-if="ass3c">
                <div class="row">
                    <div class="col-4">
                        <q-card flat color="brand" text-color="lightbrand" style="height: 500px;">
                            <q-card-main style="font-size:17px;padding-top:5em;padding-left: 15%; padding-right: 10%;"> 
                                <p style="font-size:30px;font-family:'Dosis',sans-serif;">Practice Delegation</p>
                                <p>The following set of questions helps us identify instruction specific to you.
                                <br>
                                <br>We assess your inputs to make more efficient use of your learning time.
                                <br>
                                <br>Please note that there is no pass/fail and your results will not be shared with your counselor, manager, nor supervisor.</p>
                                <br>
                            </q-card-main>
                        </q-card>
                    </div>
                    <div class="col-8">
                        <q-card flat color="white" text-color="secbrand" style="height:500px;">
                            <q-card-title style="font-family:'Dosis',sans-serif;padding-left:3em;padding-top:10%;">Email Task</q-card-title>
                            <q-card-main style="padding-left:3em; padding-right:3em;font-size:17px;">
                                <p>One of the definitions of delegation is "Sharing responsibility and authority with others and holding them accountable for performance."</p>
                                <p>Using this definition, reflect on the following situation:</p>
                                <p>You recently attended a client meeting with your subordinate. After the meeting, you ask your subordinate to draft a thank you email to the client which you will then review and send to the client.</p>
                                <p>Can you suggest an alternate way of delegating the thank you email task?</p>
                                <div style="max-width:500px">
                                    <q-input type="textarea" v-model="dgEmailTask" :max-height="20" /> 
                                </div>
                            </q-card-main>
                        </q-card>
                    </div>
                </div>
                    <div class="fixed-bottom-right save-buttons">
                    <br>
                        <q-btn
                            @click="saved"
                            style="background: #e9d985;
                            color: #605f5e;"
                            label="Save"></q-btn>
                        <q-btn
                            @click="$router.push('/casestudy')"
                            style="background: #e9d985;
                            color: #605f5e;"
                            :disable="dgEmailTask.length < 5"
                            label="Save & Continue"></q-btn>
                    <br>
                    </div>
            </div>
            <div class="mod3d" v-else-if="ass3d">
                <p>You suggested: "{{dgEmailTask}}"</p>
                <p>How does the alternate way you suggested change the responsibility, authority, and accountability for the task?</p>
                <p>For reference: One of the definitions of delegation is "sharing responsibility and authority with others and holding them accountable for performance."</p>
                <br>
                <p>Strongly Disagree | Disagree | Neither agree nor disagree | Agree | Strongly Agree</p>
                <span>This delegation involves high sharing of Authority
                    <q-radio
                    v-model="radioAuth1"
                    val="authsd"
                    color="brand"
                    unchecked-icon="radio_button_unchecked"
                    checked-icon="radio_button_checked"></q-radio>
                    <q-radio
                    v-model="radioAuth1"
                    val="authdis"
                    color="brand"
                    unchecked-icon="radio_button_unchecked"
                    checked-icon="radio_button_checked"></q-radio>
                    <q-radio
                    v-model="radioAuth1"
                    val="authneither"
                    color="brand"
                    unchecked-icon="radio_button_unchecked"
                    checked-icon="radio_button_checked"></q-radio>
                    <q-radio
                    v-model="radioAuth1"
                    val="authagree"
                    color="brand"
                    unchecked-icon="radio_button_unchecked"
                    checked-icon="radio_button_checked"></q-radio>
                    <q-radio
                    v-model="radioAuth1"
                    val="authsa"
                    color="brand"
                    unchecked-icon="radio_button_unchecked"
                    checked-icon="radio_button_checked"></q-radio>
                </span>
                <br>
                <span>This delegation involves high sharing of Responsibility
                    <q-radio
                    v-model="radioResp1"
                    val="respsd"
                    color="brand"
                    unchecked-icon="radio_button_unchecked"
                    checked-icon="radio_button_checked"></q-radio>
                    <q-radio
                    v-model="radioResp1"
                    val="respdis"
                    color="brand"
                    unchecked-icon="radio_button_unchecked"
                    checked-icon="radio_button_checked"></q-radio>
                    <q-radio
                    v-model="radioResp1"
                    val="respneither"
                    color="brand"
                    unchecked-icon="radio_button_unchecked"
                    checked-icon="radio_button_checked"></q-radio>
                    <q-radio
                    v-model="radioResp1"
                    val="respagree"
                    color="brand"
                    unchecked-icon="radio_button_unchecked"
                    checked-icon="radio_button_checked"></q-radio>
                    <q-radio
                    v-model="radioResp1"
                    val="respsa"
                    color="brand"
                    unchecked-icon="radio_button_unchecked"
                    checked-icon="radio_button_checked"></q-radio>
                </span>
                <br>
                <span>This delegation involves high sharing of Accountability 
                    <q-radio
                    v-model="radioAccn1"
                    val="accnsd"
                    color="brand"
                    unchecked-icon="radio_button_unchecked"
                    checked-icon="radio_button_checked"></q-radio>
                    <q-radio
                    v-model="radioAccn1"
                    val="accndis"
                    color="brand"
                    unchecked-icon="radio_button_unchecked"
                    checked-icon="radio_button_checked"></q-radio>
                    <q-radio
                    v-model="radioAccn1"
                    val="accnneither"
                    color="brand"
                    unchecked-icon="radio_button_unchecked"
                    checked-icon="radio_button_checked"></q-radio>
                    <q-radio
                    v-model="radioAccn1"
                    val="accnagree"
                    color="brand"
                    unchecked-icon="radio_button_unchecked"
                    checked-icon="radio_button_checked"></q-radio>
                    <q-radio
                    v-model="radioAccn1"
                    val="accnsa"
                    color="brand"
                    unchecked-icon="radio_button_unchecked"
                    checked-icon="radio_button_checked"></q-radio>
                </span>
                <br>
                <q-btn
                    @click="ass3dToggle"
                    :disable="filledOut1"
                    color="blue-grey"
                    label="Next"></q-btn>
            </div>
            <div class="mod3e" v-else-if="ass3e">
                <p>One of the suggested ways to modify the original task is: "Allow the subordinate to send email directly to the client after your review." </p>
                <p>You suggested: "{{dgEmailTask}}"</p>
                <br><br>
                <div style="width:500px;">
                    <p>How is your proposal similar to the alternative above? (Type "N/A" if not applicable.)</p>
                    <q-input v-model="ans3f1" type="textarea"/>
                    <br><br>
                    <p>How is your proposal different from the alternative above? (Type "N/A" if not applicable.)</p>
                    <q-input v-model="ans3f2" type="textarea" />
                </div>
                <br><br>
                <q-btn
                    @click="ass3eToggle"
                    :disable="filled3f"
                    color="blue-grey"
                    label="Next"></q-btn>
            </div>
            <div class="mod3f" v-else-if="ass3f">
                <div class="row">
                    <div class="col-4">
                        <q-card flat color="brand" text-color="lightbrand" style="height:500px;">
                            <q-card-main style="font-size:17px;padding-left:2em;padding-top:5em;">
                                <p style="font-family:'Dosis',sans-serif;font-size:30px;">Benefits and Challenges of Delegation</p>
                            </q-card-main>         
                        </q-card>
                    </div>
                    <div class="col-8">
                        <q-card flat color="white" text-color="secbrand" style="height:500px;">
                            <q-card-main style="font-size:17px; padding-top:5em;padding-left:2em;">
                                <p>Features of Good Delegation</p>
                                <ul>
                                    <li>Focus on what is important to for you to do personally, not just the urgent</li>
                                    <li>Clarify the responsibility and results intended</li>
                                    <li>Select appropriate person taking into account developmental needs</li>
                                    <li>Communicate level of authority and accountability</li>
                                    <li>Communicate the checkpoints</li>
                                    <li>Create a motivating environment</li>
                                    <li>Make sure the person is held accountable for these results</li>
                                </ul>
                            </q-card-main>
                        </q-card>
                    </div>
</div>
                    <div class="fixed-bottom-right save-buttons">
                <!--<q-btn-->
                    <!--@click="saved"-->
                    <!--style="background: #e9d985;-->
                    <!--color: #605f5e;"-->
                    <!--label="Save"></q-btn>-->
                <q-btn
                    @click="$router.push('/casestudy')"
                    style="background: #e9d985;
                    color: #605f5e;"
                    label="Save & Continue"></q-btn>
                    </div>
            </div>
            <div class="mod3g" v-else-if="ass3g">
                <h6>Identify Benefits of Delegation</h6>
                <h1>Table goes here</h1>
                <q-btn
                    @click="ass3gToggle"
                    color="blue-grey"
                    label="Next"></q-btn>
            </div>
            <div class="mod3h" v-else-if="ass3h">
                <h6>Identify Potential Challenges of Delegation</h6>
                <p>Below are some examples of potential challenges of delegation.</p>
                <ul>
                    <li>“I can do better”</li>
                    <li>Lack of confidence in the team member or “What if my team member fails?”</li>
                    <li>“I don’t have anyone to delegate to”</li>
                    <li>“I don’t want people to think I’m dumping on them”</li>
                </ul>
                <q-btn
                    @click="ass3hToggle"
                    color="blue-grey"
                    label="Next"></q-btn>
            </div>
            <div class="mod3i" v-else-if="ass3i">
                <h6>Create a Plan to Overcome Challenges of Delegation</h6>
                <p>Click the challenge(s) that you would like to learn about overcoming.</p>
                    <q-radio
                    v-model="radioCha1"
                    val="cha1"
                    color="brand"
                    label="'I can do better'"
                    unchecked-icon="radio_button_unchecked"
                    checked-icon="radio_button_checked"></q-radio>
                    <br>
                    <q-radio
                    v-model="radioCha1"
                    val="cha2"
                    color="brand"
                    label="Lack of confidence in the team member or 'What if my team member fails?'"
                    unchecked-icon="radio_button_unchecked"
                    checked-icon="radio_button_checked"></q-radio>
                    <br>
                    <q-radio
                    v-model="radioCha1"
                    val="cha3"
                    color="brand"
                    label="'I don't have anyone to delegate to'"
                    unchecked-icon="radio_button_unchecked"
                    checked-icon="radio_button_checked"></q-radio>
                    <br>
                    <q-radio
                    v-model="radioCha1"
                    val="cha4"
                    color="brand"
                    label="'I don't want people to think I'm dumping on them'"
                    unchecked-icon="radio_button_unchecked"
                    checked-icon="radio_button_checked"></q-radio>
                        <div v-if="radioCha1 === 'cha1'">
                            <br>
                            <p><strong>“I can do better”</strong></p>
                            <ul>
                                <li>Think about whether you are adverse to others doing the work because they have a different style than you. Be open-minded to learn new ways of doing things—focus on the end result and not the process.</li>
                                <li>Consider that they probably can do an adequate job (with appropriate supervision). This will also help them develop and learn so that they can do this on their own in the future.</li>
                                <li>More junior team members can also do it at a lower charge out rate.</li>
                            </ul>
                        </div>
                        <div v-else-if="radioCha1 === 'cha2'">
                            <br>
                            <p><strong>Lack of confidence in the team member or "What if my team member fails?"</strong></p>
                            <ul>
                                <li>Think of the cost of not taking the risk to delegate; consider the overall risk to the engagement if you are the only person doing “everything.”</li>
                                <li>Consider it this way: when you first started driving a car, it probably entailed a certain amount of risk. However, your driving instructor managed the risk by providing the relevant instruction, practice, and time for you to develop the necessary skills.</li>
                            </ul>
                        </div>
                        <div v-else-if="radioCha1 === 'cha3'">
                            <br>
                            <p><strong>“I don't have anyone to delegate to"</strong></p>
                            <ul>
                                <li>If you feel you can’t delegate within your team, look at why your team is so busy. Are any of the staff struggling with assignments, and not asking for training or help? Are some team members busier than others and, if so, how can you help even out their workloads? Are staff doing or correcting work that should have been done correctly by the client?</li>
                                <li>Ask yourself if everyone else is busy or if you are showing a preference for those with styles similar to your own. There may be team members who are equally effective but different from your “usual” choices.</li>
                                <li>Consider options outside of your immediate team. Help can come from peers, from your manager or from other teams.</li>
                            </ul>
                        </div>
                        <div v-else-if="radioCha1 === 'cha4'">
                            <br>
                            <p><strong>“I don't want people to think I'm dumping on them”</strong></p>
                            <ul>
                                <li>People feel “dumped on” when they get only low-competency tasks and when you don’t help them see how learning that new skill or technical knowledge is important to them. If you teach, train and support them in their tasks, they are less likely to feel “dumped on.” Also recognize them for the work they did.</li>
                                <li>Remember that you, like them, should increase your productivity. So, for you, delegating is the quickest way to improve your output.</li>
                            </ul>
                        </div>
                        <br><br><br>
                        <p>Think back to a task that you have delegated. What challenges did you face? What aspects could you improve on for next time?</p>
                        <div style="width:650px;"><q-input type="textarea" /></div>
                        <br>
                        <q-btn
                            @click="ass3iToggle"
                            color="blue-grey"
                            label="Next"></q-btn>
            </div>
            <div class="mod3j" v-else-if="ass3j">
                    <p>As the project progresses, your team has to interview people in multiple roles from the client's organization.
                    This involves continuous email conversations everyday for around two weeks.
                    What would you do in this situation?</p>
                    <q-radio
                    v-model="radio3k"
                    val="3k1"
                    color="brand"
                    label="Completely delegate sending emails to my subordinates showing that I trust in them"
                    unchecked-icon="radio_button_unchecked"
                    checked-icon="radio_button_checked"></q-radio>
                    <br>
                    <q-radio
                    v-model="radio3k"
                    val="3k2"
                    color="brand"
                    label="Prepare a draft email and ask subordinates to use it and review any modifications"
                    unchecked-icon="radio_button_unchecked"
                    checked-icon="radio_button_checked"></q-radio>
                    <br>
                    <q-radio
                    v-model="radio3k"
                    val="3k3"
                    color="brand"
                    label="It is not that straightforward"
                    unchecked-icon="radio_button_unchecked"
                    checked-icon="radio_button_checked"></q-radio>
                    <br><br>
                <q-btn
                    @click="ass3jToggle"
                    :disable="radio3k === ''"
                    color="blue-grey"
                    label="Next"></q-btn>
            </div>
            <div class="mod3k" v-else-if="ass3k">
                <div v-if="radio3k ==='3k1'">
                    <div style="width:750px;">
                    <p>Good choice. It is important to let the team know that you trust them.
                    However, some of the members might think that the work is being delegated because it is routine and not very important.
                    Can you write 3–4 statements addressing this concern so that they take the work seriously?</p>
                        <q-input type="textarea" />
                        <br><br>
                    </div>
                </div>
                <div v-else-if="radio3k ==='3k2'">
                    <div style="width:750px;">
                        <p>Clever Choice. It is important to focus on efficiency.
                        However, some of the members might think that you do not trust them enough and you are practicing micro-management.
                        Can you write 3–4 statements addressing this concern?</p>
                        <q-input type="textarea" />
                        <br><br>
                    </div>
                </div>
                <div v-else-if="radio3k ==='3k3'">
                    <div style="width:750px;">
                        <p>Agreed. On the job situations are not always straightforward to make final decisions.
                        Can you mention at least two conditions on which your decision depends upon?</p>
                        <q-input type="textarea" />
                        <br><br>
                    </div>
                </div>
                <div style="width:750px;">
                    <p>One of the ways to decide which tasks to delegate is to evaluate the importance and urgency of tasks.
                    Importance here means, <strong>"how important it is that you do the task yourself."</strong></p>
                    <p>Mention any 3 criteria which make a task important for you to do. (Ex: Task assigned to you by your manager)</p>
                    <q-input type="textarea" />
                    <br><br>
                    <p>Which of the following are among the criteria of importance that you listed:</p>
                    <q-checkbox
                        v-model="checkGroup3l"
                        color="brand"
                        val="op1"
                        label="Task meets or challenges your skill level" />
                    <br>
                    <q-checkbox
                        v-model="checkGroup3l"
                        color="brand"
                        val="op2"
                        label="Recognition from completion of task" />
                    <br>
                    <q-checkbox
                        v-model="checkGroup3l"
                        color="brand"
                        val="op3"
                        label="Quality expected upon task completion" />
                    <br>
                    <q-checkbox
                        v-model="checkGroup3l"
                        color="brand"
                        val="op4"
                        label="Manager/Client involved directly in task monitoring" />
                    <br>
                    <q-checkbox
                        v-model="checkGroup3l"
                        color="brand"
                        val="op5"
                        label="Other:" /> <div style="width:200px;"><q-input /></div>
                    <br><br>
                    <p>Which of the following types of tasks would you do yourself?</p>
                    <q-checkbox
                        v-model="checkGroup3l2"
                        color="brand"
                        val="op1"
                        label="High Importance and Urgent" />
                    <br>
                    <q-checkbox
                        v-model="checkGroup3l2"
                        color="brand"
                        val="op2"
                        label="Low Importance and Urgent" />
                    <br>
                    <q-checkbox
                        v-model="checkGroup3l2"
                        color="brand"
                        val="op3"
                        label="High Importance and Not Urgent" />
                    <br>
                    <q-checkbox
                        v-model="checkGroup3l2"
                        color="brand"
                        val="op4"
                        label="Low Importance and Not Urgent" />
                    <br><br><br>
                    <p>Why?</p>
                    <q-input />
                    <br><br>
                <q-btn
                    @click="$router.push('/dashboard')"
                    color="blue-grey"
                    label="Next"></q-btn>
                </div>
            </div>
            <div class="mod3ca" v-else-if="mod3ba">
                <div class="row">
                    <div class="col-4">
                        <q-card flat color="brand" text-color="lightbrand" style="height:800px;">
                            <q-card-main style="padding-top:5em;padding-left:5em; padding-right:5em;">
                                <p style="font-size:30px;font-family:'Dosis',sans-serif;">Defining Delegation</p>
                                <p style="font-size:17px;">Describe the task you would like to delegate ("{{dgTask}}") with respect to responsibility, authority, and accountability.</p>
                                    <div style="max-width:379px; font-size:17.5px;">
                                        <q-input dark v-model="dgdefinput" type="textarea" placeholder="Input Text Here"/>
                                    </div>
                            </q-card-main>
                        </q-card>
                    </div>
                    <div class="col-8">
                        <q-card flat color="white" text-color="secbrand" style="height:800px;max-height:1000px;">
                            <q-card-main style="padding: 3em 5em 5em;font-size:17.5px;">
                                <p style="color:#496c94">Delegation</p>
                                <p>Sharing <strong>responsibility</strong> and <strong>authority</strong> with others and holding them <strong>accountable</strong> for performance</p>
                                <p style="color:#496c94">Responsibility</p>
                                <p>Refers to the job assignment, the intended results, as well as the obligation to achieve the intended results</p>
                                <ul>
                                    <li>As a senior, it is your responsibility to make sure the work is completed.</li>
                                    <li>When you delegate a task, you share responsibility with the delegatee in completing that task.</li>
                                </ul>
                                <p style="color:#496c94">Authority</p>
                                <p>Refers to the right to act and make decisions. Successful delegation requires authority equal to the responsibility.</p>
                                <ul>
                                    <li>As a leader, you are still accountable for the work. You have the right to check the work and determine if it is satisfactory.</li>
                                </ul>
                                <p style="color:#496c94">Accountability</p>
                                <p>Refers to being answerable for the end result. It also implies consequences.</p>
                                <ul>
                                    <li>Although you share responsibility of a task when you delegate it,
                                    you are still held accountable for its completion, just as you must hold the delegatee accountable.</li>
                                </ul>
                            </q-card-main>
                        </q-card>
                    </div>
                </div>
                    <div class="fixed-bottom-right save-buttons">
                    <br>
                        <q-btn
                            @click="saved"
                            style="background: #e9d985;
                            color: #605f5e;"
                            label="Save"></q-btn>
                        <q-btn
                            @click="mod3caToggle"
                            style="background: #e9d985;
                            color: #605f5e;"
                            :disable="dgdefinput === ''"
                            label="Save & Continue"></q-btn>
                    <br>
                    </div>
            </div>
        </div>
    `,
    data: function () {
        return {
            radioCha1: '',
            radio3k: '',
            checkGroup3l: [],
            checkGroup3l2: [],
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
            dgdefinput: '',
            radioAuth: '',
            radioResp: '',
            radioAccn: '',
            assCorrect: false,
            mod3ba: false,
            radioAuth1: '',
            radioResp1: '',
            radioAccn1: '',
            ans3f1: '',
            ans3f2: '',
            left: false,
            clicked: false,
            mod1radio: '',
        }
    },
    computed: {
        filledOut () {
            return (this.radioAuth === '' ||
                    this.radioResp === '' ||
                    this.radioAccn === '');
        },
        filledOut1 () {
            return (this.radioAuth1 === '' ||
                this.radioResp1 === '' ||
                this.radioAccn1 === '');
        },
        filled3f () {
            return (this.ans3f1 === '' || this.ans3f2 === '');
        },
        mod3kCheck () {
            return (this.radio3k !== '');
        },
        ass3aSaveCont () {
            return (this.dgTask.length < 5);
        },
    },
    methods: {
        saved () {
            this.$q.notify({
                color: 'posbrand',
                textColor: 'white',
                icon: 'check',
                message: 'Progress Saved',
                position: 'bottom',
                timeout: 3000
            });
        },
        grade3b () {
            if (this.radioAuth === 'authdis' &&
                (this.radioResp === 'respagree' || this.radioResp === 'respsa')&&
                (this.radioAccn === 'accnagree' || this.radioAccn === 'accnsa')) {
                this.ass3b = false;
                this.ass3f = true;
            } else {
                this.ass3b = false;
                this.mod3ba = true;
            }
        },
        mod3caToggle () {
            this.mod3ba = false;
            this.ass3c = true;
        },
        ass3aToggle () {
          this.ass3a = false;
          this.ass3b = true;
        },
        ass3bToggle () {
            this.ass3b = false;
            this.ass3c = true;
        },
        ass3cToggle () {
            this.ass3c = false;
            this.ass3d = true;
        },
        ass3dToggle () {
            this.ass3d = false;
            this.ass3e = true;
        },
        ass3eToggle () {
            this.ass3e = false;
            this.ass3f = true;
        },
        ass3fToggle () {
            this.ass3f = false;
            this.ass3g = true;
        },
        ass3gToggle () {
            this.ass3g = false;
            this.ass3h = true;
        },
        ass3hToggle () {
            this.ass3h = false;
            this.ass3i = true;
        },
        ass3iToggle () {
            this.ass3i = false;
            this.ass3j = true;
        },
        ass3jToggle () {
            this.ass3j = false;
            this.ass3k = true;
        },
        clickToggle () {
            console.log('clicked');
            this.clicked = !this.clicked;
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
            <p>You have completed the basic practice questions on delegation.</p>
            <p>If you are confident about your knowledge of delegation, you can skip the next part, go to the final section, and attempt the assignment for peer feedback.</p>
            <p>Choose an option below to proceed.</p>
            <q-radio
            v-model="radio1"
            val="skip"
            label="I would like to skip further instruction and go to the final section."
            color="brand"
            unchecked-icon="radio_button_unchecked"
            checked-icon="radio_button_checked"></q-radio>
            <br>
            <q-radio
            v-model="radio1"
            val="noskip"
            label="I would like to go through the instruction and learn more before proceeding."
            color="brand"
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
            select1: 'monthly',
            select2: 'lastyear',
            selectOptions1: [
                {
                    label: 'Monthly',
                    value: 'monthly'
                }
            ],
            selectOptions2: [
                {
                    label: 'Last Year',
                    value: 'lastyear'
                }
            ],
            model: 48,
            min: 0,
            max: 100,
        }
    },
    template: `
    <div class="dashboard-container">
        <div class="dashboard">
            <h3>My Learning</h3>
            <div class="row gutter-sm">
                <div class="col-8">
                    <q-card flat color="white" text-color="#496c94" style="min-height:350px;">
                        <q-card-title>Learning Modules</q-card-title>
                        <q-card-main>
                            <q-list style="font-family:'Lato', sans-serif;">
                                <q-item style="font-family:Dosis, sans-serif;font-weight:bold;font-variant-caps:all-small-caps;">
                                <q-item-main label="Module Name" />
                                <q-item-main label="Course No." />
                                <q-item-side right><q-item-main label="Availability" /></q-item-side>
                                </q-item>
                                <q-item>
                                        <q-collapsible icon="explore" label="Fierce Negotiation" style="width:310px">
                                        <div>
                                            Fierce Negotiation
                                        </div>
                                        </q-collapsible>
                                    <q-item-main label="15-112" />
                                    <q-item-side right>
                                        <q-item-main>
                                        <q-btn
                                        rounded
                                        color="green"
                                        size="sm"
                                        label="Finished"/></q-item-main>
                                    </q-item-side>
                                </q-item>
                                <q-item>
                                    <q-collapsible icon="perm_identity" label="Executive Presence" style="width:310px">
                                        <div>
                                            Executive Presence
                                        </div>
                                    </q-collapsible>
                                    <q-item-main label="21-127" />
                                    <q-item-side right>
                                        <q-item-main>
                                        <q-item-tile icon="error_outline" color="red" />
                                        <q-btn
                                        rounded
                                        color="red"
                                        size="sm"
                                        label="Overdue"/></q-item-main>
                                    </q-item-side>
                                </q-item>
                                <q-item>
                                    <q-collapsible icon="shopping_cart" label="Essential Delegation Skills">
                                        <div style="width:25em">
                                            This course will introduce you to the basics of delegation as a new leader in your organization.
                                            This first course in the Delegation track focuses on determining which tasks to delegate.
                                        </div>
                                    </q-collapsible>
                                    <q-item-main label="18-100" />
                                    <q-item-side right>
                                        <q-item-main>
                                        <q-btn
                                        rounded
                                        color="primary"
                                        size="sm"
                                        @click="$router.push('/modules')"><div style="color:#027be3">ss</div>Start<div style="color:#027be3">ss</div></q-btn>
                                        </q-item-main>
                                    </q-item-side>
                                </q-item>
                            </q-list>
                        </q-card-main>
                        <q-card-title><span slot="subtitle" style="color:#496c94;">Show More</span></q-card-title>
                    </q-card>
                </div>
                <div class="col-4">
                    <q-card flat color="white" text-color="#496c94" style="height:350px;">
                        <q-card-title>Quick Details</q-card-title>
                        <q-card-main style="font-family:'Lato', sans-serif;">
                            <q-item>
                                <q-item-side>
                                    <q-item-tile icon="person_add" color="blue" />
                                </q-item-side>
                                <q-item-main label="Last 24 Hours" />
                                <q-item-side right>
                                    <q-item-main label="0 Recently Added" />
                                </q-item-side>
                            </q-item>
                            <q-item>
                                <q-item-side>
                                    <q-item-tile icon="refresh" color="green" />
                                </q-item-side>
                                <q-item-main label="Upcoming Modules" />
                                <q-item-side right>
                                    <q-item-main label="3" />
                                </q-item-side>
                            </q-item>
                            <q-item>
                                <q-item-side>
                                    <q-item-tile icon="timer" color="blue-10" />
                                </q-item-side>
                                <q-item-main label="On Hold" />
                                <q-item-side right>
                                    <q-item-main label="1" />
                                </q-item-side>
                            </q-item>
                            <q-item>
                                <q-item-side>
                                    <q-item-tile icon="error" color="yellow" />
                                </q-item-side>
                                <q-item-main label="Due in One Week" />
                                <q-item-side right>
                                    <q-item-main label="1" />
                                </q-item-side>
                            </q-item>
                            <q-item>
                                <q-item-side>
                                    <q-item-tile icon="report_problem" color="red" />
                                </q-item-side>
                                <q-item-main label="Overdue" />
                                <q-item-side right>
                                    <q-item-main label="1" />
                                </q-item-side>
                            </q-item>
                        </q-list>
                        </q-card-main>
                    </q-card>
                </div>
                <div class="col-4">
                    <q-card flat color="white" text-color="#496c94" style="height:450px;">
                        <q-card-title>
                            My Curricula
                            <span slot="subtitle" style="color:#4d4f5c;">Total Modules: 4</span>
                        </q-card-title>
                        <q-card-separator />
                        <br>
                        <q-card-media>
                        <div>
                            <q-knob
                                v-model="model"
                                :min="min"
                                :max="max"
                                color="brand"
                                size="12em"
                                readonly
                            >
                            {{model}}% Finished
                            </q-knob>
                        </div>
                        </q-card-media>
                        <q-card-main style="font-family:'Lato', sans-serif;">
                            <div class="row">
                                <div class="col-6">Total Hours</div>
                                <div class="col-6">Finished Hours</div>
                                <div class="col-6" style="color:#4d4f5c">48 hrs</div>
                                <div class="col-6" style="color:#4d4f5c">23 hrs</div>
                            </div>
                        </q-card-main>
                        <q-card-separator />
                        <q-card-title>
                            <span slot="subtitle" style="color:#4d4f5c; text-align:left;">View Full Report</span>
                        </q-card-title>
                    </q-card>
                </div>
                <div class="col-8">
                    <q-card flat color="white" text-color="#496c94" style="height:450px;">
                        <q-card-title>Learning Average Hours
                        <br>
                        <div style="font-size:small;" class="float-left">
                            <span slot="subtitle" style="color:#496c94;">Avg 5hrs</span>
                        </div>
                        <div class="selectors"> 
                            <div class="row gutter-sm on-right">
                                <div class="col-3" style="max-width:150px;">
                                    <q-select
                                    v-model="select1"
                                    :options="selectOptions1"
                                    />
                                </div>
                                <div class="col-3" style="width:200px;">
                                    <q-select
                                    v-model="select2"
                                    :options="selectOptions2"
                                    />
                                </div>
                            </div>
                        </div>
                        </q-card-title>
                        <q-card-media>
                            <img src="assets/studyGraph2x.jpg">
                        </q-card-media>
                    </q-card>
                </div>
            </div>
        </div>
    </div>
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
            emailTask: store.state.suggestedTaskEmail,
            dgTask: store.state.dgTask,
        }
    },
    template: `
        <div class="completion" v-if="skipped">
            <p>In most organizations, tasks are not assigned unless there is a clear <strong>purpose to the task</strong>.</p>
            <p>It’s important to understand the difference between the terms <i>task</i> and <i>purpose</i>.</p>
            <p>The <strong><i>task</i></strong> is what must be accomplished.</p>
            <p>The <strong><i>purpose</i></strong> is the reason that the task is being done—it gives meaning to the task.</p>
            <p>The two terms may look different at different levels of the organization. At higher levels, the purpose of the work may be clear
            (“we need to expand” or “we need to have safety in all our plants”), but the specific tasks needed to accomplish the work may be less clear.</p>
            <br><br>
            <p>What is the purpose of the original task you wanted to delegate? ("{{dgTask}}")</p>
            <div style="width:600px;"><q-input type="textarea" /></div>
            <br><br>
            <q-btn
                @click="$router.push('/dashboard')"
                color="green"
                label="Submit"></q-btn>
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
                <p>Write the <strong>tasks you delegate.</strong> (Remember to include "{{emailTask}})"</p>
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
                    <p>Did you choose to delegate the original task you wanted to delegate? ("{{emailTask}}")</p>
                        <q-radio
                        v-model="radio4b"
                        val="yes"
                        label="Yes"
                        color="brand"
                        unchecked-icon="radio_button_unchecked"
                        checked-icon="radio_button_checked"></q-radio>
                        <br>
                        <q-radio
                        v-model="radio4b"
                        val="no"
                        label="No"
                        color="brand"
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
 * Delegation Log Component
 */
const DgLog = {
    template: `
        <div class="dglog">
            <q-layout-drawer overlay behavior="mobile" side="left" v-model="showLeft">
                <q-list separator>
                    <q-item style="color:#496c94;font-size:25px;">
                        Jane Doe's Task Log
                    </q-item>
                            <q-item>
                                Definition of Delegation
                            </q-item>
                            <q-item style="background-color:#e9d985;color:#605f5e;">
                                Features of Good Delegation
                            </q-item>
                            <q-item>
                                Challenges of Delegation
                             </q-item>
                             <q-item>
                                Considering the Delegatees
                             </q-item>
                </q-list>
            </q-layout-drawer>
            <div style="padding-top:5em;padding-left:5em;">
            <q-btn
                class="float-left"
                @click="showLeft= !showLeft"
                style="color:#496c94;"
                flat
                round
                icon="menu"
            />
            </div>
            <div class="float-right cursor-pointer" style="color:#496c94;padding-right:5em">
                <p @click="calendarToggle"><q-icon name="calendar_today" /> Calendar</p>
            </div>
            <br><br><br>
            <div class="row" v-if="planselect === 'plan'">
                <div class="col-4">
                    <q-card flat color="brand" text-color="lightbrand" style="height:800px; max-height:1000px;">
                    <div style="max-width:300px;padding-top:3em;padding-left:3em;">
                        <q-select
                        disabled
                        style="color:white;"
                        dark
                        v-model="planselect"
                        :options="planOptions"
                        />
                    <p
                    style="
                    padding-top:1em;
                    font-size:24px;">Write down more specifics for the task you are planning for.</p>
                    </div>
                    </q-card>
                </div>
                <div class="col-8">
                    <q-card flat color="white" text-color="secbrand" style="height:800px;max-height:1000px;">
                        <div class="row" style="padding: 3em 3em 0 3em;">
                            <div class="col-10">
                                <p>Focus on what is important for you to do personally, not just the urgent.</p>
                                <div style="max-width:400px;">
                                    <q-input v-model="input1" placeholder="Input Text Here" />
                                </div>
                            </div>
                            <div class="col-2">
                                <q-icon name="help" style="color:#496c94">
                                    <q-tooltip style="background-color:#e9d985;font-family:'Lato',sans-serif;max-width:400px;">
                                        Think about how not everything urgent is important, and people make mistakes doing the urgent tasks. Review ‘the matrix!’
                                    </q-tooltip>
                                </q-icon>
                            </div>
                            <div class="col-10">
                                <p>Clarify the responsibility and results intended.</p>
                                <div style="max-width:400px;">
                                    <q-input v-model="input2" placeholder="Input Text Here" />
                                </div>
                            </div>
                            <div class="col-2">
                                <q-icon name="help" style="color:#496c94">
                                    <q-tooltip style="background-color:#e9d985;font-family:'Lato', sans-serif;max-width:400px;">
                                    </q-tooltip>
                                </q-icon>
                            </div>
                            <div class="col-10">
                                <p>Select appropriate person taking into account developmental needs.</p>
                                <div style="max-width:400px;">
                                    <q-input v-model="input3" placeholder="Input Text Here" />
                                </div>
                            </div>
                            <div class="col-2">
                                <q-icon name="help" style="color:#496c94">
                                    <q-tooltip style="background-color:#e9d985;font-family:'Lato', sans-serif;max-width:400px;">
                                    </q-tooltip>
                                </q-icon>
                            </div>
                            <div class="col-10">
                                <p>Communicate level of authority and accountability.</p>
                                <div style="max-width:400px;">
                                    <q-input v-model="input4" placeholder="Input Text Here" />
                                </div>
                            </div>
                            <div class="col-2">
                                <q-icon name="help" style="color:#496c94">
                                    <q-tooltip style="background-color:#e9d985;font-family:'Lato', sans-serif;max-width:400px;">
                                    </q-tooltip>
                                </q-icon>
                            </div>
                            <div class="col-10">
                                <p>Communicate the checkpoints.</p>
                                <div style="max-width:400px;">
                                    <q-input v-model="input5" placeholder="Input Text Here" />
                                </div>
                            </div>
                            <div class="col-2">
                                <q-icon name="help" style="color:#496c94">
                                    <q-tooltip style="background-color:#e9d985;font-family:'Lato', sans-serif;max-width:400px;">
                                    </q-tooltip>
                                </q-icon>
                            </div>
                            <div class="col-10">
                                <p>Create a motivating environment.</p>
                                <div style="max-width:400px;">
                                    <q-input v-model="input6" placeholder="Input Text Here" />
                                </div>
                            </div>
                            <div class="col-2">
                                <q-icon name="help" style="color:#496c94">
                                    <q-tooltip style="background-color:#e9d985;font-family:'Lato', sans-serif;max-width:400px;">
                                    </q-tooltip>
                                </q-icon>
                            </div>
                            <div class="col-10">
                                <p>Make sure the person is held accountable for these results.</p>
                                <div style="max-width:400px;">
                                    <q-input v-model="input7" placeholder="Input Text Here" />
                                </div>
                            </div>
                            <div class="col-2">
                                <q-icon name="help" style="color:#496c94">
                                    <q-tooltip style="background-color:#e9d985;font-family:'Lato', sans-serif;max-width:400px;">
                                    </q-tooltip>
                                </q-icon>
                            </div>
                        </div>
                </q-card>
            </div>
                    <div class="fixed-bottom-right save-buttons">
                        <q-btn
                        @click="saved"
                        style="background: #e9d985;
                        color: #605f5e;"
                        label="Save"></q-btn>
                        <q-btn
                        @click="afterPlanToggle"
                        style="background: #e9d985;
                        color: #605f5e;"
                        :disable="inputCheck"
                        label="Save & Continue"></q-btn>
                    </div>
        </div>
        
            <div class="row" v-else-if="planselect === 'reflect'">
                <div class="col-4">
                    <q-card flat color="brand" text-color="lightbrand" style="height:800px; max-height:1000px;">
                    <div style="max-width:300px;padding-top:3em;padding-left:3em;">
                        <q-select
                        style="color:white;"
                        dark
                        v-model="planselect"
                        :options="planOptions"
                        />
                    <p
                    style="
                    padding-top:1em;
                    font-size:24px;">
                    For the steps you completed, what did you do?</p>
                    </div>
                    </q-card>
                </div>
                <div class="col-8">
                    <q-card flat color="white" text-color="secbrand" style="height:800px;max-height:1000px;">
                        <div class="row" style="padding: 3em 3em 0 3em;">
                            <div class="col-1">
                                <q-checkbox v-model="checked" />
                            </div>
                            <div class="col-10">
                                <p>Focus on what is important for you to do personally, not just the urgent.</p>
                                <div style="max-width:400px;">
                                    <q-input v-model="input1" placeholder="Input Text Here" />
                                </div>
                            </div>
                            <div class="col-1">
                                <q-icon name="help" style="color:#496c94">
                                    <q-tooltip style="background-color:#e9d985;font-family:'Lato',sans-serif;max-width:400px;">
                                        Think about how not everything urgent is important, and people make mistakes doing the urgent tasks. Review ‘the matrix!’
                                    </q-tooltip>
                                </q-icon>
                            </div>
                            <div class="col-1">
                                <q-checkbox v-model="checked1" />
                            </div>
                            <div class="col-10">
                                <p>Clarify the responsibility and results intended.</p>
                                <div style="max-width:400px;">
                                    <q-input v-model="input2" placeholder="Input Text Here" />
                                </div>
                            </div>
                            <div class="col-1">
                                <q-icon name="help" style="color:#496c94">
                                    <q-tooltip style="background-color:#e9d985;font-family:'Lato', sans-serif;max-width:400px;">
                                    </q-tooltip>
                                </q-icon>
                            </div>
                            <div class="col-1">
                                <q-checkbox v-model="checked2" />
                            </div>
                            <div class="col-10">
                                <p>Select appropriate person taking into account developmental needs.</p>
                                <div style="max-width:400px;">
                                    <q-input v-model="input3" placeholder="Input Text Here" />
                                </div>
                            </div>
                            <div class="col-1">
                                <q-icon name="help" style="color:#496c94">
                                    <q-tooltip style="background-color:#e9d985;font-family:'Lato', sans-serif;max-width:400px;">
                                    </q-tooltip>
                                </q-icon>
                            </div>
                            <div class="col-1">
                                <q-checkbox v-model="checked3" />
                            </div>
                            <div class="col-10">
                                <p>Communicate level of authority and accountability.</p>
                                <div style="max-width:400px;">
                                    <q-input v-model="input4" placeholder="Input Text Here" />
                                </div>
                            </div>
                            <div class="col-1">
                                <q-icon name="help" style="color:#496c94">
                                    <q-tooltip style="background-color:#e9d985;font-family:'Lato', sans-serif;max-width:400px;">
                                    </q-tooltip>
                                </q-icon>
                            </div>
                            <div class="col-1">
                                <q-checkbox v-model="checked4" />
                            </div>
                            <div class="col-10">
                                <p>Communicate the checkpoints.</p>
                                <div style="max-width:400px;">
                                    <q-input v-model="input5" placeholder="Input Text Here" />
                                </div>
                            </div>
                            <div class="col-1">
                                <q-icon name="help" style="color:#496c94">
                                    <q-tooltip style="background-color:#e9d985;font-family:'Lato', sans-serif;max-width:400px;">
                                    </q-tooltip>
                                </q-icon>
                            </div>
                            <div class="col-1">
                                <q-checkbox v-model="checked5" />
                            </div>
                            <div class="col-10">
                                <p>Create a motivating environment.</p>
                                <div style="max-width:400px;">
                                    <q-input v-model="input6" placeholder="Input Text Here" />
                                </div>
                            </div>
                            <div class="col-1">
                                <q-icon name="help" style="color:#496c94">
                                    <q-tooltip style="background-color:#e9d985;font-family:'Lato', sans-serif;max-width:400px;">
                                    </q-tooltip>
                                </q-icon>
                            </div>
                            <div class="col-1">
                                <q-checkbox v-model="checked6" />
                            </div>
                            <div class="col-10">
                                <p>Make sure the person is held accountable for these results.</p>
                                <div style="max-width:400px;">
                                    <q-input v-model="input7" placeholder="Input Text Here" />
                                </div>
                            </div>
                            <div class="col-1">
                                <q-icon name="help" style="color:#496c94">
                                    <q-tooltip style="background-color:#e9d985;font-family:'Lato', sans-serif;max-width:400px;">
                                    </q-tooltip>
                                </q-icon>
                            </div>
                        </div>
                </q-card>
            </div>
                    <div class="fixed-bottom-right save-buttons">
                        <q-btn
                        @click="saved"
                        style="background: #e9d985;
                        color: #605f5e;"
                        label="Save"></q-btn>
                        <q-btn
                        style="background: #e9d985;
                        color: #605f5e;"
                        :disable="inputCheck"
                        label="Save & Continue"></q-btn>
                    </div>
        </div>
        
            <div>
                <q-modal v-model="reminder">
                    <div class="cursor-pointer" style="width:868px;text-align:center;">
                        <img src="assets/Calendar@2x.jpg" width="100%" @click="dgTaskToggle">
                    </div>
                </q-modal>
                
                <q-modal v-model="dgTask">
                    <q-card flat color="white" text-color="secbrand" style="min-width:570px;max-width:828px;margin:0 auto;">
                        <div>
                            <h4 style="padding-left:2em;">Delegation of Deliverable Task</h4>
                            <q-card-main>
                            <q-list style="font-family:'Lato', sans-serif;">
                                <q-item style="font-family:Dosis, sans-serif;font-weight:bold;font-variant-caps:all-small-caps;">
                                    <q-item-main label="Subtask Name" />
                                    <q-item-main label="Delegatee" />
                                    <q-item-main label="Delegation Plan" />
                                    <q-item-side right><q-item-main label="Due" /></q-item-side>
                                </q-item>
                                <q-item>
                                   <q-collapsible label="Presentation Draft" style="width:215px">
                                        <div>
                                        </div>
                                   </q-collapsible>
                                    <q-item-main label="John Smith" />
                                    <q-item-side class="on-left">
                                        <q-btn
                                        rounded
                                        color="green"
                                        size="sm"
                                        label="Finished"/></q-item-side>
                                    <q-item-side right>
                                        <q-item-main>6/2/2018</q-item-main>
                                    </q-item-side>
                                </q-item>
                                
                                <q-item>
                                    <q-collapsible label="Report Draft" style="width:215px">
                                        <div>
                                        </div>
                                        </q-collapsible>
                                    <q-item-main label="Jane Doe" />
                                    <q-item-side class="on-left">
                                        <q-btn
                                        rounded
                                        color="green"
                                        size="sm"
                                        label="Finished"/></q-item-side>
                                    <q-item-side right>
                                        <q-item-main>6/4/2018</q-item-main>
                                    </q-item-side>
                                </q-item>
                                
                                <q-item>
                                    <q-collapsible label="Working Prototype">
                                        <div>
                                        </div>
                                        </q-collapsible>
                                    <q-item-main label="Jean Roe" />
                                    <q-item-side class="on-left">
                                        <q-btn
                                        rounded
                                        color="green"
                                        size="sm"
                                        label="Finished"/></q-item-side>
                                    <q-item-side right>
                                        <q-item-main>6/4/2018</q-item-main>
                                    </q-item-side>
                                </q-item>
                                
                                <q-item>
                                    <q-collapsible label="Commercial Video" style="width:215px">
                                        <div>
                                        </div>
                                        </q-collapsible>
                                    <q-item-main label="Roe Joan" />
                                    <q-item-side class="on-left">
                                        <q-btn
                                        @click="dgTask = false"
                                        rounded
                                        color="primary"
                                        size="sm"><div style="color:#027be3">.s</div>Start<div style="color:#027be3">ss</div></q-btn></q-item-side>
                                    <q-item-side right>
                                        <q-item-main>6/7/2018</q-item-main>
                                    </q-item-side>
                                </q-item>
                            </q-list>
                            </q-card-main>
                        <div style="text-align:center;">
                            <q-card-title><span slot="subtitle" style="color:#496c94;">+ Add More</span></q-card-title>
                        </div>
                </div>
            </q-card>
        </q-modal>
        
                <q-modal v-model="afterPlan">
                    <div class="cursor-pointer" style="width:868px;text-align:center;">
                        <img src="assets/Calendar2@2x.jpg" width="100%" @click="reflectToggle">
                    </div>
                </q-modal>
            </div>
</div>
    `,
    data: function () {
        return {
            showLeft: false,
            plan: true,
            reminder: true,
            reflect: false,
            dgTask: false,
            afterPlan: false,
            planselect: 'plan',
            planOptions: [
                {
                    label: 'Delegation - Plan',
                    value: 'plan',
                },
                {
                    label: 'Delegation - Reflect',
                    value: 'reflect',
                }
            ],
            checked: false,
            checked1: false,
            checked2: false,
            checked3: false,
            checked4: false,
            checked5: false,
            checked6: false,
            input1: '',
            input2: '',
            input3: '',
            input4: '',
            input5: '',
            input6: '',
            input7: '',
        }
    },
    computed: {
        inputCheck () {
          return (!this.input1 || !this.input2 || !this.input3 || !this.input4 ||
              !this.input5 || !this.input6 || !this.input7);
        },
    },
    methods: {
        saved () {
            this.$q.notify({
                color: 'posbrand',
                textColor: 'white',
                icon: 'check',
                message: 'Progress Saved',
                position: 'bottom',
                timeout: 3000,
            });
        },
        afterPlanToggle() {
            this.afterPlan = true;
        },
        dgTaskToggle() {
            this.reminder = false;
            this.dgTask = true;
        },
        reflectToggle() {
            this.afterPlan = false;
            this.plan = false;
            this.reflect = true;
            this.planselect = 'reflect';
        },
        calendarToggle() {
            this.afterPlan = true;
        }
    }
};

/**
 * Case Study
 */
const CaseStudy = {
    template: `
        <div class="casestudy">
            <q-btn
            class="float-left"
             style="color: #496c94;"
             flat round dense
             icon="menu"
            />
            <p @click="$router.push('/modules')" class="float-right cursor-pointer" style="color: #496c94;">Return to Course</p>
            <br><br>
            <h3 style="text-align:center;">Case Study</h3>
            <div class="row gutter-y-lg" style="margin: 0 auto;">
                <div class="col-5">
                    <q-card flat color="brand" text-color="lightbrand" style="height:285px;">
                        <q-card-main style="font-size:17px;padding-top:3em;padding-left:3em;padding-right:3em;">
                            <p>In this section, please describe at least three criteria that make a task
                            important for you to do personally (50-100 words).</p>
                        </q-card-main>
                    </q-card>
                </div>
                <div class="col-7">
                    <q-card flat color="white" text-color="secbrand" style="height:285px;">
                        <q-card-main style="font-size:20px;padding-top:3em;padding-left:3em;padding-right:3em;">
                            <p>In this section, please describe at least three criteria
                            that make a task important for you to do personally (50-100 words).</p>
                                <div style="max-width:544px;font-size:17px">
                                    <q-input placeholder="One" />
                                    <br>
                                    <q-input placeholder="Two" />
                                    <br>
                                    <q-input placeholder="Three" />
                                </div>
                        </q-card-main>
                    </q-card>
                </div>
                
                <div class="col-5">
                    <q-card flat color="brand" text-color="lightbrand" style="height:800px;">
                        <q-card-main style="line-height:1.5em;padding-top:3em;padding-left:3em;padding-right:3em;font-size:17px;">
                            <p>You have two options:</p>
                            <ol>
                                <li>Describe (100-150 words) a challenging situation you have encountered or may encounter
                                on the job with:</li>
                                    <ul>
                                        <li>Three or more tasks to be done</li> 
                                        <li>Two or more different deadlines</li>
                                        <li>Two or more people (including yourself)
                                        responsible and/or accountable for the tasks</li>
                                    </ul>
                                <li>Use the following situation:</li>
                                    <ul>
                                        <li>As an employee with two years of experience in investment banking, you have been made
                                        responsible for conducting financial analyses of a company and creating reports of your findings.</li>
                                        <li>You are good at analyzing income statements and cash flows, but you are not confident
                                        about analyzing balance sheets. Three months from now, you will be taking a
                                        certification exam where your financial analysis skills will be tested.</li>
                                        <li>You know a recently hired employee who is good at financial analysis and
                                        who has expressed interest to work with you. The typical time allocated for financial analysis
                                        at your organization is seven days. You are required to complete the task in ten days.</li>
                                    </ul>
                            </ol>
                        </q-card-main>
                    </q-card>
                </div>
                <div class="col-7">
                    <q-card flat color="white" text-color="secbrand" style="height:800px;">
                        <q-card-main style="font-size:20px;padding-top:3em;padding-left:3em;padding-right:3em;">
                            <p>Select a delegating situation to analyze, and describe why you selected this situation.</p>
                                <div style="max-width:544px;font-size:17px;">
                                    <q-input type="textarea" :max-height="250" placeholder="Input Text Here" />
                                </div>
                           <br>
                            <p style="padding-top:3em;">If you chose to describe your own situation,
                            please input some tags that relate to the situation. </p>
                                <div style="max-width:544px;font-size:17px;">
                                    <q-chips-input
                                    color="brand"
                                    chips-color="brand"
                                    chips-bg-color="lightbrand"
                                    v-model="model" placeholder="Type Tags & Press Enter to Input" />

                                </div>
                        </q-card-main>
                    </q-card>
                </div>
                
                <div class="col-5">
                    <q-card flat color="brand" text-color="lightbrand" style="height:285px;">
                        <q-card-main style="font-size:17px;padding-top:3em;padding-left:3em;padding-right:3em;">
                            <p>Identify all tasks in the selected situation and classify them according to importance and urgency.
                            Explain why you classified each task accordingly (75-150 words).</p>
                        </q-card-main>
                    </q-card>
                </div>
                <div class="col-7">
                    <q-card flat color="white" text-color="secbrand" style="height:285px;">
                        <q-card-main style="font-size:20px;padding-top:3em;padding-left:3em;padding-right:3em;">
                            <p>Identify all tasks in the selected situation and classify them according to importance and urgency.
                            Explain why you classified each task accordingly (75-150 words).</p>
                                <div style="max-width:544px;font-size:17px">
                                    <q-input type="textarea" :max-height="100" placeholder="Input Text Here" />
                                </div>
                        </q-card-main>
                    </q-card>
                </div>
                
                <div class="col-5">
                    <q-card flat color="brand" text-color="lightbrand" style="height:325px;">
                        <q-card-main style="font-size:17px;padding-top:3em;padding-left:3em;padding-right:3em;">
                            <p> For each task, decide whether to delegate the task or do it yourself.
                            Specify when you will delegate or do the task. Provide a clear rationale for each decision.
                            (You can refer to your previous classifications.) </p>
                        </q-card-main>
                    </q-card>
                </div>
                <div class="col-7">
                    <q-card flat color="white" text-color="secbrand" style="height:325px;">
                        <q-card-main style="font-size:20px;padding-top:3em;padding-left:3em;padding-right:3em;">
                            <p> For each task, decide whether to delegate the task or do it yourself.
                            Specify when you will delegate or do the task. Provide a clear rationale for each decision.
                            (You can refer to your previous classifications.) </p>
                                <div style="max-width:544px;font-size:17px">
                                    <q-input type="textarea" :max-height="100" placeholder="Input Text Here" />
                                </div>
                        </q-card-main>
                    </q-card>
                </div>
</div>
                <q-modal v-model="submit" style="font-family:'Dosis', sans-serif;">
                    <div style="font-size:30px;max-height:400px;max-width:500px;text-align:left;padding:2em;">
                        <p>Thank you.</p>
                        <p>Your assignment has been submitted.</p>
                        <br>
                        <q-btn
                            @click="$router.push('/dashboard')"
                            style="background:#e9d985;
                                color:#605f5e;"
                                label="Go Back to My Dashboard" />
                    </div>
                </q-modal>
                
                    <div class="fixed-bottom-right save-buttons">
                <q-btn
                    @click="saved"
                    style="background: #e9d985;
                    color: #605f5e;"
                    label="Save"></q-btn>
                <q-btn
                    @click="submitToggle"
                    style="background: #e9d985;
                    color: #605f5e;"
                    label="Save & Continue" />
                    </div>
</div>`,
    data: function () {
        return {
            model: [],
            submit: false,
        }
    },
    methods: {
        saved () {
            this.$q.notify({
                color: 'posbrand',
                textColor: 'white',
                icon: 'check',
                message: 'Progress Saved',
                position: 'bottom',
                timeout: 3000
            });
        },
        submitToggle () {
            this.submit = true;
        },
    }
}

/**
 * Feedback
 */
const Feedback = {
    template: `
        <div class="feedback">
            <h3 style="text-align:center;">Peer Feedback</h3>
                <q-list no-border style="background-color:#496c94; color:#f0f3f6;">
                    <q-collapsible opened label="Chapter 1: Intro to Delegation">
                    <div>
                        <q-list separator style="background-color: white; color: #605f5e">
                            <q-item>
                                <q-item-main label="Reviewer 1 evaluated your submission in comparison to submission A" />
                                <q-item-side right>
                                    <q-icon name="keyboard_arrow_right" color="brand" />
                                </q-item-side>
                            </q-item>
                            <q-item>
                                <q-item-main label="Reviewer 2 evaluated your submission in comparison to submission B" />
                                <q-item-side right>
                                    <q-icon name="keyboard_arrow_right" color="brand" />
                                </q-item-side>
                            </q-item>
                            <q-item>
                                <q-item-main label="Reviewer 3 evaluated your submission in comparison to submission C" />
                                <q-item-side right>
                                    <q-icon name="keyboard_arrow_right" color="brand" />
                                </q-item-side>
                            </q-item>
                            <q-item>
                                <q-item-main label="Reviewer 4 evaluated your submission in comparison to submission D"/>
                                <q-item-side right>
                                    <q-icon name="keyboard_arrow_right" color="brand" />
                                </q-item-side>
                            </q-item>
                        </q-list>
                    </div>
                    </q-collapsible>
                </q-list>
                <br>
                <q-list style="background-color:white; color:#496c94;">
                    <q-collapsible label="Chapter 2: Benefits & Challenges of Delegation">
                    <div>
                        Chapter 2
                    </div>
                    </q-collapsible>
                </q-list>
                <br>
                <q-list style="background-color:white;color:#496c94">
                    <q-collapsible label="Chapter 3: Rules of Delegation">
                    <div>
                        Chapter 3
                    </div>
                    </q-collapsible>
                </q-list>
                <br>
                <q-list style="background-color:white;color:#496c94">
                    <q-collapsible label="Chapter 4: Purpose of Task">
                    <div>
                        Chapter 4
                    </div>
                    </q-collapsible>
                </q-list>
            
</div>`,
}

/**
 * Peer Review
 */
const PeerReview = {
    template: `
        <div class="peer-review">
            <div @click="$router.push('/modules')" class="cursor-pointer" style="font-family:'Dosis',sans-serif;font-size:18px;padding-left:5em;">Return to Course</div>
            <br>
            <div class="row gutter-y-md" style="font-size:17px">
                <div class="col-4" style="font-family:'Dosis',sans-serif;font-size:30px;text-align:center;">Reviewing Criteria</div>
                <div class="col-4" style="font-family:'Dosis',sans-serif;font-size:30px;text-align:center;">Review this Submission</div>
                <div class="col-4" style="font-family:'Dosis',sans-serif;font-size:30px;text-align:center;">In Comparison to This Submission</div>
                
                <div class="col-4">
                    <q-card flat color="brand" text-color="lightbrand" style="height:285px">
                        <div style="padding:2em">
                            <p>Does the submission clearly describe at least three criteria to evaluate the
                        importance of personally doing a task?</p>
                            <q-icon class="on-left" name="check_circle_outline" color="posbrand" size="30px" />
                            <q-icon class="on-right" name="highlight_off" color="negbrand" size="30px"/>
                        </div>
                    </q-card>
                </div>
                <div class="col-4">
                    <q-card flat color="white" text-color="secbrand" style="height:285px">
                        <div style="padding: 2em">
                            <p><strong>In this section, please describe at least three criteria that make a task important
                            for you to do personally (50-100 words).</strong></p>
                            <br><br>
                            <div style="max-width:544px">
                                <q-input v-model="one" type="textarea" color="brand"/>
                            </div>
                        </div>
                    </q-card>
                </div>
                <div class="col-4">
                    <q-card flat color="grey-4" text-color="secbrand" style="height:285px">
                        <div style="padding:2em;">
                            <p><strong>In this section, please describe at least three criteria that make a task important
                            for you to do personally (50-100 words).</strong></p>
                            <br><br>
                            <div style="max-width:544px">
                                <q-input v-model="two" type="textarea" color="brand" :max-height="63" />
                            </div>
                        </div>
                    </q-card>
                </div>
                
                <div class="col-4">
                    <q-card flat color="brand" text-color="lightbrand" style="height:587px">
                        <div style="padding:2em">
                            <p>Does the submission select an on-the-job situation and clearly explain why they selected this situation?</p>
                            <q-icon class="on-left" name="check_circle_outline" color="posbrand" size="30px" />
                            <q-icon class="on-right" name="highlight_off" color="negbrand" size="30px"/>
                            <br><br>
                            <p>Is the selected situation challenging?</p>
                            <q-icon class="on-left" name="check_circle_outline" color="posbrand" size="30px" />
                            <q-icon class="on-right" name="highlight_off" color="negbrand" size="30px"/>
                            <br><br>
                            <p>Does the selected situation involve 2 or more different deadlines?</p>
                            <q-icon class="on-left" name="check_circle_outline" color="posbrand" size="30px" />
                            <q-icon class="on-right" name="highlight_off" color="negbrand" size="30px"/>
                            <br><br>
                            <p>Does the selected situation involve 2 or more people responsible and/or accountable for the tasks?</p>
                            <q-icon class="on-left" name="check_circle_outline" color="posbrand" size="30px" />
                            <q-icon class="on-right" name="highlight_off" color="negbrand" size="30px"/>
                        </div>
                    </q-card>
                </div>
                <div class="col-4">
                    <q-card flat color="white" text-color="secbrand" style="min-height:587px">
                        <div style="padding:2em;">
                        <q-list style="font-weight:bold;width=688px">
                            <q-collapsible label="Select a delegating situation to analyze, and describe why you selected this situation. You have two options:">
                                <div>
                            <ol>
                                <li>Describe (100-150 words) a challenging situation you have encountered or may encounter
                                on the job with:</li>
                                    <ul>
                                        <li>Three or more tasks to be done</li> 
                                        <li>Two or more different deadlines</li>
                                        <li>Two or more people (including yourself)
                                        responsible and/or accountable for the tasks</li>
                                    </ul>
                                <li>Use the following situation:</li>
                                    <ul>
                                        <li>As an employee with two years of experience in investment banking, you have been made
                                        responsible for conducting financial analyses of a company and creating reports of your findings.</li>
                                        <li>You are good at analyzing income statements and cash flows, but you are not confident
                                        about analyzing balance sheets. Three months from now, you will be taking a
                                        certification exam where your financial analysis skills will be tested.</li>
                                        <li>You know a recently hired employee who is good at financial analysis and
                                        who has expressed interest to work with you. The typical time allocated for financial analysis
                                        at your organization is seven days. You are required to complete the task in ten days.</li>
                                    </ul>
                            </ol>
                                </div>
                            </q-collapsible>
                        </q-list>
                        <br><br>
                        <div style="max-width:544px;text-align:center;">
                            <q-input v-model="three" type="textarea" color="brand" :max-height="325" />
                        </div>
                        </div>
                    </q-card>
                </div>
                <div class="col-4">
                    <q-card flat color="grey-4" text-color="secbrand" style="min-height:587px">
                        <div style="padding:2em;">
                        <q-list style="font-weight:bold">
                            <q-collapsible label="Select a delegating situation to analyze, and describe why you selected this situation. You have two options:">
                                <div>
                            <ol>
                                <li>Describe (100-150 words) a challenging situation you have encountered or may encounter
                                on the job with:</li>
                                    <ul>
                                        <li>Three or more tasks to be done</li> 
                                        <li>Two or more different deadlines</li>
                                        <li>Two or more people (including yourself)
                                        responsible and/or accountable for the tasks</li>
                                    </ul>
                                <li>Use the following situation:</li>
                                    <ul>
                                        <li>As an employee with two years of experience in investment banking, you have been made
                                        responsible for conducting financial analyses of a company and creating reports of your findings.</li>
                                        <li>You are good at analyzing income statements and cash flows, but you are not confident
                                        about analyzing balance sheets. Three months from now, you will be taking a
                                        certification exam where your financial analysis skills will be tested.</li>
                                        <li>You know a recently hired employee who is good at financial analysis and
                                        who has expressed interest to work with you. The typical time allocated for financial analysis
                                        at your organization is seven days. You are required to complete the task in ten days.</li>
                                    </ul>
                            </ol>
                                </div>
                            </q-collapsible>
                        </q-list>
                        <br><br>
                            <div style="max-width:544px">
                                <q-input v-model="four" type="textarea" color="brand" :max-height="325" />
                            </div>
                        </div>
                    </q-card>
                </div>
                
                <div class="col-4">
                    <q-card flat color="brand" text-color="lightbrand" style="height:324px">
                        <div style="padding:2em">
                            <p>Which submission does a better job identifying the tasks involved in the situation?</p>
                                  <q-btn class="on-left" outline rounded color="yellowbrand" label="Left" />
                                  <q-btn class="on-right" outline rounded color="yellowbrand" label="Right" />
                                  <br><br>
                            <p>Give your peer on the left some constructive feedback: Compared to the righthand submission, what does the lefthand submission do well?</p>
                            <div style="max-width:402px"><q-input dark placeholder="Input Text Here" /></div>
                        </div>
                    </q-card>
                </div>
                <div class="col-4">
                    <q-card flat color="white" text-color="secbrand" style="height:324px">
                        <div style="padding:2em">
                            <p><strong>Identify all tasks in the selected situation and classify them according to importance and urgency.
                            Explain why you classified each task accordingly (75-150 words).</strong></p>
                            <br><br>
                            <div style="max-width:544px">
                                <q-input v-model="five" type="textarea" color="brand" :max-height="114" />
                            </div>
                        </div>
                    </q-card>
                </div>
                <div class="col-4">
                    <q-card flat color="grey-4" text-color="secbrand" style="height:324px">
                        <div style="padding:2em;">
                            <p><strong>Identify all tasks in the selected situation and classify them according to importance and urgency.
                            Explain why you classified each task accordingly (75-150 words).</strong></p>
                            <br><br>
                            <div style="max-width:544px">
                                <q-input v-model="six" type="textarea" color="brand" :max-height="114" />
                            </div>
                        </div>
                    </q-card>
                </div>
                
                <div class="col-4">
                    <q-card flat color="brand" text-color="lightbrand" style="height:300px">
                        <div style="padding:2em;">
                            <p>Does the submission provide a clear rationale for delegating or not delegating each task?</p>
                            <q-icon class="on-left" name="check_circle_outline" color="posbrand" size="30px" />
                            <q-icon class="on-right" name="highlight_off" color="negbrand" size="30px"/>
                        </div>
                    </q-card>
                </div>
                <div class="col-4">
                    <q-card flat color="white" text-color="secbrand" style="height:300px">
                        <div style="padding:2em;">
                            <p><strong> For each task, decide whether to delegate the task or do it yourself.
                            Specify when you will delegate or do the task. Provide a clear rationale for each decision.
                            (You can refer to your previous classifications.) </strong></p>
                            <br><br>
                            <div style="max-width:544px">
                                <q-input v-model="two" type="textarea" color="brand" :max-height="63" />
                            </div>
                        </div>
                    </q-card>
                </div>
                <div class="col-4">
                    <q-card flat color="grey-4" text-color="secbrand" style="height:300px">
                        <div style="padding:2em;">
                            <p><strong>For each task, decide whether to delegate the task or do it yourself.
                            Specify when you will delegate or do the task. Provide a clear rationale for each decision.
                            (You can refer to your previous classifications.)</strong></p>
                         <br><br>
                            <div style="max-width:544px;text-align:center;">
                                <q-input v-model="seven" type="textarea" color="brand" :max-height="63" />
                            </div>
                        </div>
                    </q-card>
                </div>
                
                <div>
                <q-modal v-model="feedback">
                    <div class="cursor-pointer" style="width:868px;text-align:center;">
                        <img src="assets/How%20to%20give%20good%20feedback@2x.jpg" width="60%" @click="feedback = false">
                    </div>
                </q-modal>
                </div>
</div>
                    <div class="fixed-bottom-right save-buttons">
                    <br>
                        <q-btn
                            @click="saved"
                            style="background: #e9d985;
                            color: #605f5e;"
                            label="Save"></q-btn>
                        <q-btn
                            @click="$router.push('/dashboard')"
                            style="background: #e9d985;
                            color: #605f5e;"
                            label="Save & Submit"></q-btn>
                    <br>
                    </div>
</div>`,
    data: function () {
        return {
            one: 'Tasks that can offer genuine learning opportunities; tasks that can showcase my skills; tasks that I enjoy doing.',
            two: '1. Outside expectations - if my superiors expect me to do this task for them personally (because they do not yet know those working under me, for example) then I will do that for them personally.\n' +
            '\n' +
            '2. Urgency\n' +
            '\n' +
            '3. Whether the task can be split up and delegated or if it really is complex and requires the same person to be in charge of the entire thing.',
            three: 'Option 1:\n' +
            '\n' +
            'My situation included balancing my thesis project and two internship projects at the same time. \n' +
            '\n' +
            'Thesis was supposed to be submitted for review in mid November, but I was very behind at the beginning of November. My first internship is wrapping up a final project report at the end of November, and requires a big time commitment from me. My second internship is relatively relaxing but still required me 3 workdays a week. \n' +
            '\n' +
            'I was accountable for my thesis project, I needed to submit my draft so that my advisor can revise it and make sure that it would be presentable by beginning of December. I was also responsible for drafting a major section of the project report for my first internship, where my supervisors were responsible to put all sections together for review and submission.\n' +
            '\n' +
            'I selected this situation because it was a real situation and it was quite challenging for me at the time. ',
            four: 'I will select situation 2. \n' +
            '\n' +
            'I have not encountered the type of situation described in "1" in my current job.',
            five: 'Task 1: write up the thesis (high importance, high urgency)\n' +
            '\n' +
            'Task 2: proofread the thesis to check for errors (low importance, high urgency)\n' +
            '\n' +
            'Task 3: analyzing data for the project report for internship 1 (high importance, high urgency)\n' +
            '\n' +
            'Task 4: write up the results for the report for internship 1 (high importance, medium urgency)\n' +
            '\n' +
            'Task 5: keep up with daily tasks for internship 2 (medium importance, low urgency)',
            six: '1. Reaching out to colleague who is good at financial analysis. - Important and urgent \n' +
            '\n' +
            '2. Conducting financial analyses = three subtasks - all equally important and somewhat urgent\n' +
            '\n' +
            'analyzing income statements,\n' +
            'analyzing cash flows,\n' +
            '\n' +
            'analyzing balance sheets\n' +
            '\n' +
            '3.  Creating the report. Important, not urgent because the other things are required first. ',
            seven: '1. Reach out to colleague - do it myself. I cannot delegate this to someone else because I am asking for this favor on behalf of myself. \n' +
            '\n' +
            '2. Delegate, but also observe the colleague while he is analyzing balance sheets. \n' +
            '\n' +
            '3. Creating report - do myself',
            feedback: true,
        }
    },
    methods: {
        saved () {
            this.$q.notify({
                color: 'posbrand',
                textColor: 'white',
                icon: 'check',
                message: 'Progress Saved',
                position: 'bottom',
                timeout: 3000
            });
        },
    }
};

/**
 * ROUTER SECTION
 */
const routes = [
    { path: '/login', name: 'Login', component: Login },
    { path: '/dashboard', name: 'Dashboard', component: Dashboard },
    { path: '/', name: 'Home', component: Home },
    { path: '/modules', name: 'Modules', component: Modules },
    { path: '/welcome', name: 'Welcome Delegation', component: Welcome },
    { path: '/skip', name: 'Skip', component: Skip },
    { path: '/assessment', name: 'Assessment', component: Assessment },
    { path: '/instruction', name: 'Instruction', component: Instruction },
    { path: '/casestudy', name: 'Case Study', component: CaseStudy},
    { path: '/feedback', name: 'Feedback Tree', component: Feedback},
    { path: '/peerreview', name: 'Peer Review', component: PeerReview},
    { path: '/dglog', name: 'Delegation Log', component: DgLog},
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
