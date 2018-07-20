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
                @click="$router.push('/assessment')"
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
    template: `
        <div class="assessment">
            <div class="mod3a" v-if="ass3a">
                <p>The following set of questions helps us identify instruction specific to you. We assess your inputs to make more efficient use of your learning time. Please note that there is no pass/fail and your results will not be shared with your counselor, manager, nor supervisor.</p>
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
            <div class="mod3e" v-else-if="ass3e">
                <p>You suggested: "{{dgEmailTask}}"</p>
                <p>How does the alternate way you suggested change the responsibility, authority, and accountability for the task?</p>
                <p>For reference: One of the definitions of delegation is "sharing responsibility and authority with others and holding them accountable for performance."</p>
                <br>
                <p>Strongly Disagree | Disagree | Neither agree nor disagree | Agree | Strongly Agree</p>
                <span>This delegation involves high sharing of Authority
                    <q-radio
                    v-model="radioAuth1"
                    val="authsd"
                    color="orange-11"
                    unchecked-icon="radio_button_unchecked"
                    checked-icon="radio_button_checked"></q-radio>
                    <q-radio
                    v-model="radioAuth1"
                    val="authdis"
                    color="orange-11"
                    unchecked-icon="radio_button_unchecked"
                    checked-icon="radio_button_checked"></q-radio>
                    <q-radio
                    v-model="radioAuth1"
                    val="authneither"
                    color="orange-11"
                    unchecked-icon="radio_button_unchecked"
                    checked-icon="radio_button_checked"></q-radio>
                    <q-radio
                    v-model="radioAuth1"
                    val="authagree"
                    color="orange-11"
                    unchecked-icon="radio_button_unchecked"
                    checked-icon="radio_button_checked"></q-radio>
                    <q-radio
                    v-model="radioAuth1"
                    val="authsa"
                    color="orange-11"
                    unchecked-icon="radio_button_unchecked"
                    checked-icon="radio_button_checked"></q-radio>
                </span>
                <br>
                <span>This delegation involves high sharing of Responsibility
                    <q-radio
                    v-model="radioResp1"
                    val="respsd"
                    color="orange-11"
                    unchecked-icon="radio_button_unchecked"
                    checked-icon="radio_button_checked"></q-radio>
                    <q-radio
                    v-model="radioResp1"
                    val="respdis"
                    color="orange-11"
                    unchecked-icon="radio_button_unchecked"
                    checked-icon="radio_button_checked"></q-radio>
                    <q-radio
                    v-model="radioResp1"
                    val="respneither"
                    color="orange-11"
                    unchecked-icon="radio_button_unchecked"
                    checked-icon="radio_button_checked"></q-radio>
                    <q-radio
                    v-model="radioResp1"
                    val="respagree"
                    color="orange-11"
                    unchecked-icon="radio_button_unchecked"
                    checked-icon="radio_button_checked"></q-radio>
                    <q-radio
                    v-model="radioResp1"
                    val="respsa"
                    color="orange-11"
                    unchecked-icon="radio_button_unchecked"
                    checked-icon="radio_button_checked"></q-radio>
                </span>
                <br>
                <span>This delegation involves high sharing of Accountability 
                    <q-radio
                    v-model="radioAccn1"
                    val="accnsd"
                    color="orange-11"
                    unchecked-icon="radio_button_unchecked"
                    checked-icon="radio_button_checked"></q-radio>
                    <q-radio
                    v-model="radioAccn1"
                    val="accndis"
                    color="orange-11"
                    unchecked-icon="radio_button_unchecked"
                    checked-icon="radio_button_checked"></q-radio>
                    <q-radio
                    v-model="radioAccn1"
                    val="accnneither"
                    color="orange-11"
                    unchecked-icon="radio_button_unchecked"
                    checked-icon="radio_button_checked"></q-radio>
                    <q-radio
                    v-model="radioAccn1"
                    val="accnagree"
                    color="orange-11"
                    unchecked-icon="radio_button_unchecked"
                    checked-icon="radio_button_checked"></q-radio>
                    <q-radio
                    v-model="radioAccn1"
                    val="accnsa"
                    color="orange-11"
                    unchecked-icon="radio_button_unchecked"
                    checked-icon="radio_button_checked"></q-radio>
                </span>
                <br>
                <q-btn
                    @click="ass3eToggle"
                    :disable="filledOut1"
                    color="blue-grey"
                    label="Next"></q-btn>
            </div>
            <div class="mod3f" v-else-if="ass3f">
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
                    @click="ass3fToggle"
                    :disable="filled3f"
                    color="blue-grey"
                    label="Next"></q-btn>
            </div>
            <div class="mod3g" v-else-if="ass3g">
                <h5>Benefits and Challenges of Delegation</h5>
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
                <q-btn
                    @click="ass3gToggle"
                    color="blue-grey"
                    label="Next"></q-btn>
            </div>
            <div class="mod3h" v-else-if="ass3h">
                <h6>Identify Benefits of Delegation</h6>
                <h1>Table goes here</h1>
                <q-btn
                    @click="ass3hToggle"
                    color="blue-grey"
                    label="Next"></q-btn>
            </div>
            <div class="mod3i" v-else-if="ass3i">
                <h6>Identify Potential Challenges of Delegation</h6>
                <p>Below are some examples of potential challenges of delegation.</p>
                <ul>
                    <li>“I can do better”</li>
                    <li>Lack of confidence in the team member or “What if my team member fails?”</li>
                    <li>“I don’t have anyone to delegate to”</li>
                    <li>“I don’t want people to think I’m dumping on them”</li>
                </ul>
                <q-btn
                    @click="ass3iToggle"
                    color="blue-grey"
                    label="Next"></q-btn>
            </div>
            <div class="mod3j" v-else-if="ass3j">
                <h6>Create a Plan to Overcome Challenges of Delegation</h6>
                <p>Click the challenge(s) that you would like to learn about overcoming.</p>
                    <q-radio
                    v-model="radioCha1"
                    val="cha1"
                    color="orange-11"
                    label="'I can do better'"
                    unchecked-icon="radio_button_unchecked"
                    checked-icon="radio_button_checked"></q-radio>
                    <br>
                    <q-radio
                    v-model="radioCha1"
                    val="cha2"
                    color="orange-11"
                    label="Lack of confidence in the team member or 'What if my team member fails?'"
                    unchecked-icon="radio_button_unchecked"
                    checked-icon="radio_button_checked"></q-radio>
                    <br>
                    <q-radio
                    v-model="radioCha1"
                    val="cha3"
                    color="orange-11"
                    label="'I don't have anyone to delegate to'"
                    unchecked-icon="radio_button_unchecked"
                    checked-icon="radio_button_checked"></q-radio>
                    <br>
                    <q-radio
                    v-model="radioCha1"
                    val="cha4"
                    color="orange-11"
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
                            @click="ass3jToggle"
                            color="blue-grey"
                            label="Next"></q-btn>
            </div>
            <div class="mod3k">
                <p>As the project progresses, your team has to interview people in multiple roles from the client's organization.
                This involves continuous email conversations everyday for around two weeks.
                What would you do in this situation?</p>
                    <q-radio
                    v-model="radio3k"
                    val="3k1"
                    color="orange-11"
                    label="Completely delegate sending emails to my subordinates showing that I trust in them"
                    unchecked-icon="radio_button_unchecked"
                    checked-icon="radio_button_checked"></q-radio>
                    <br>
                    <q-radio
                    v-model="radio3k"
                    val="3k2"
                    color="orange-11"
                    label="Prepare a draft email and ask subordinates to use it and review any modifications"
                    unchecked-icon="radio_button_unchecked"
                    checked-icon="radio_button_checked"></q-radio>
                    <br>
                    <q-radio
                    v-model="radio3k"
                    val="3k3"
                    color="orange-11"
                    label="It is not that straightforward"
                    unchecked-icon="radio_button_unchecked"
                    checked-icon="radio_button_checked"></q-radio>
                    <br>
            </div>
            <div class="mod3l" v-else-if="ass3l"></div>
            <div class="mod3m" v-else-if="ass3m"></div>
            <div class="mod3ca" v-else-if="mod3ba">
                <h6>Defining Delegation</h6>
                <!--TODO-->
                <q-table
                :data="tableData"
                :columns="columns"
                row-key="name"
                hide-header
                hide-bottom
                />
                <br>
                <p>Describe the task you would like to delegate ("{{dgTask}}") with respect to responsibility, authority, and accountability.</p>
                <div style="width: 500px">
                    <q-input v-model="defdginput"/>
                </div>
                <br>
                <q-btn
                    @click="mod3caToggle"
                    :disable="defdginput === ''"
                    color="blue-grey"
                    label="Next"></q-btn>
            </div>
        </div>
    `,
    data: function () {
        return {
            columns: [
                {
                    name: 'term',
                    required: true,
                    label: 'Term',
                    align: 'left',
                    field: 'name',
                },
                {
                    name: 'def',
                    required: true,
                    label: 'Definition',
                    align: 'left',
                    field: 'def',
                }
            ],
            tableData: [
                {
                    name: 'Delegation',
                    def: 'Sharing responsibility and authority with others and holding them accountable for performance',
                },
                {
                    name: 'Responsibility',
                    def: 'Refers to the job assignment, the intended results, as well as the obligation to achieve the intended results\n' +
                    'As a senior, it is your responsibility to make sure the work is completed.\n' +
                    'When you delegate a task, you share responsibility with the delegatee in completing that task.\n',
                },
                {
                    name: 'Accountability',
                    def: 'Refers to being answerable for the end result. It also implies consequences.\n' +
                    'Although you share responsibility of a task when you delegate it, you are still held accountable for its completion, just as you must hold the delegatee accountable\n',
                },
                {
                    name: 'Authority',
                    def: 'Refers to the right to act and make decisions. Successful delegation requires authority equal to the responsibility.\n' +
                    'As a leader, you are still accountable for the work. You have the right to check the work and determine if it is satisfactory.\n',
                }
            ],
            radioCha1: '',
            radio3k: '',
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
            ass3m: false,
            dgTask: '',
            dgEmailTask: '',
            radioAuth: '',
            radioResp: '',
            radioAccn: '',
            assCorrect: false,
            mod3ba: false,
            defdginput: '',
            radioAuth1: '',
            radioResp1: '',
            radioAccn1: '',
            ans3f1: '',
            ans3f2: '',
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
        }
    },
    methods: {
        grade3c () {
            if (this.radioAuth === 'authdis' &&
                (this.radioResp === 'respagree' || this.radioResp === 'respsa')&&
                (this.radioAccn === 'accnagree' || this.radioAccn === 'accnsa')) {
                this.ass3c = false;
                this.ass3d = true;
            } else {
                this.ass3c = false;
                this.mod3ba = true;
            }
        },
        mod3caToggle () {
            this.mod3ba = false;
            this.ass3d = true;
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
        ass3kToggle () {
            this.ass3k = false;
            this.ass3l = true;
        },
        ass3lToggle () {
            this.ass3l = false;
            this.ass3m = true;
        },
        ass3mToggle () {
            this.ass3m = false;
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
            emailTask: store.state.suggestedTaskEmail,
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
