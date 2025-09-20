const App = {
	data() {
		return{
			title: "Список заметок",
			inputText: 'Введите название заметки',    
			inputValue: '',
			nodes: [],
		}
	},
	methods: {
		inputChangeHandler(event) {
			this.inputValue = event.target.value;
		},
		handleAddNodes() {
			this.nodes.push(this.inputValue);
			this.inputValue = '';
		},
		deleteNode(idx) {
			this.nodes.splice(idx, 1);
		},
		toUpperCaseMethod(item) {
			return item.toUpperCase();
		}
	}
}

Vue.createApp(App).mount('#root') 

/*
	Ярлыки очень полезны при разработке и их обязательно нужно запомнить, так как на самом деле, скорее всего, именно запись по ярлыкам
	и будет встречаться чаще всего.

	Для v-bind ярлык будет следующим: v-bind:placeholder'...' -> :placeholder='...'
	Для v-on ярлык будет следующим: v-on:click='...' -> @click='...'

	Все примеры в html
*/