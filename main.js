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
	},
	computed: {
		doubleNodes() { 
			return this.nodes.length * 2;
		}
	},
	watch: {
		inputValue(value) {
			if(value.length > 10){ //Больше 10 символов мы не сможем написать
				this.inputValue = '';
			}
			console.log('input value changed', value);
		}
	}
}

Vue.createApp(App).mount('#root') 

/*
	Во vue существует такой метод - watch, это метод, который создается на верхнем уровне App, то есть, рядом с computed, methods и data.
	Такой метод существует для того, чтобы следить за какой-то переменной, watch помогает нам отслеживать изменение данных, запросы
	на сервер и прочее. Также, через watch мы можем и менять поведение отслеживаемого объекта.
	
	Очень важным условием слежки является то, что метод нужно называть точно также, как называется переменная, за которой мы хотим следить.
	Условно, у нас есть переменная inputText и мы хотим за ней следить. Значит внутри watch мы должны создать метод inputText(), который
	автоматически начнет следить за обычной переменной inputText.

	Все примеры выше
*/