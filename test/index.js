Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
});

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        seen: true,
        list: [
            {id: 0, text: 'kenny'},
            {id: 1, text: 'bouby'},
            {id: 2, text: 'mr. p'},
        ]
    }
});

app.message = 'data has been changed';
app.seen = false;

var app2 = new Vue({
    el: '#app2',
    data: {
        message: "You loaded this page on: " + new Date().toLocaleString(),
        list: [
            {text: 'hohoho'},
            {text: 'hehehe'}
        ]
    }
});

app2.list.push({text: 'hahaha'});

var app3 = new Vue({
    el: '#app3',
    data: {
        message: "Up with Boobs!",
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('');
        }
    },
});
