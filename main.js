const App = {
	data() {
		return{
			title: "Список заметок",
			placeholder: 'Введите название заметки',    
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
	Дело в том, что мы можем использовать методы и внутри интерпаляции, однако, обычные методы, которые описаны выше, неявно возращают
	undefined, а такое приводить к строке нельзя, vue просто не отрисует undefined, который был приведен к строке.
	Как раннее говорилось, мы в интерпаляцию ({{сюда}}) можем передавать только те данные, которые можно перевести к строке, т.к. vue
	у себя под капотом делает JSON.stringify для данных. Однако, мы можем создавать методы, в которых явно будем возращать 
	какие-то данные, это будет работать как с функией и аргументом и таким образом, мы можем возращать данные, которые так или 
	иначе были преобразованы, примеры выше
*/