const App = {
	data: () => ({
		title: 'Что-то',
		myHtmlTag: '<div class="myHtmlTag">Это мой кастомный тег</div>',
		address: {
			city: "Moscow",
			country: "Russia",
		},
		items: [1,2,3,4,5,6],
	}),
	methods: {
		addItem() {
			this.items.unshift(this.$refs.myInput.value);
			this.$refs.myInput.value = '';
		},
		log(){
			console.log("Объект успешно добавился")
		}
	},
	computed: {
		evenItems() {
			return this.items.filter(i => i % 2 === 0)
		}
	}
}
Vue.createApp(App).mount('#root');

/*
	Также, мы можем навесить сразу несколько функцию на одно событие через запятую. Особых каких-то ньюансов тут нет, так что все примеры в коде
*/