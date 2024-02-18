Vue.createApp(
    {
        data(){
            return {
                src: 'https://picsum.photos/200/300',
                alt: 'hassan',
                text: 'hassan',
                html: '<strong>moosavi</strong>',
                number: 10,
                isStatus: true,
                names: ['asiye', 'mohamad', 'selin'],
                list: [
                    {
                        name: 'asiye',
                        age: 33
                    },
                    {
                        name: 'mohamad',
                        age: 6
                    },
                    {
                        name: 'selin',
                        age: 2
                    }
                ],
                name: 'mohamad',
                name2: '',
                name3: '',
                name4: '',
                name5: '',
                redColor: false,
                redClass: 'red',
                blueClass: 'blue',
                colors: {
                    redClass: 'red',
                    blueClass: 'blue'
                },
                newStyle: {
                    fontSize: '20px', 
                    border: '5px solid black'
                },
                name6: '',
                active: false,
                langs: ['java', 'java script', 'c'],
                formData: {
                    name: '',
                    message: '',
                    checkbox1: false,
                    checkbox2: true,
                    checkbox: [],
                    radio: '',
                    lang: '',
                    langs: []
                },
                show: true
            }
        },
        watch: {
            active(value) {
                console.log(value);
            }
        },
        computed: {
            isActive() {
                console.log('isActive !!!!');
                return this.active ? 'Is Active' : 'Not Active';
            }
        },
        methods: {
            checkNumber() {
                return this.number > 5 ? true : false;
            },
            update() {
                setTimeout(()=>{
                    this.name = 'selin';
                }, 2000)
            },
            updateName() {
                this.text = 'asiye';
            },
            changeName() {
                this.alt = 'asiye';
            },
            testEvent(event, name) {
                console.log(name, event);
            },
            changeColor() {
                this.redColor = !this.redColor;
            },
            upperCase() {
                console.log('upperCase !!!!');
                return this.name6.toUpperCase();
            },
            toggleActive() {
                this.active = !this.active;
            },
            // isActive() {
            //     console.log('isActive !!!!');
            //     return this.active ? 'Is Active' : 'Not Active';
            // }
            button() {
                console.log(this.$refs);
                console.log(this.$refs.title);
                this.$refs.title.style.color = 'red';
                this.$refs.title.style.fontSize = '40px';
            },
            submitForm() {
                console.log(this.formData);
            }
        },
        beforeCreate() {
            console.log('Running Before Create');
        },
        created() {
            console.log('Running Created');
        },
        beforeMount() {
            console.log('Running Before Mount');
        },
        mounted() {
            console.log('Running Mounted');
        },
        beforeUpdate() {
            console.log('Running Before Update');
        },
        updated() {
            console.log('Running Updated');
        }
    }
).mount('#app');