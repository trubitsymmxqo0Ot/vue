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
	Очень круто, что с помощью vue мы также можем рабоать и с инлайн стилями динамично. Для этого нам нужно его забайндить либо через
	v-bind, либо через :. Далее, после этого, все, что внутри style будет восприниматься как JavaScript, поэтому значения стилей 
	нам нжуон будет поместить в кавычки, иначе они будут восприниматься как переменные.

	После чего мы можем просто обычными тернарными операторами ? : по условию отображать тот или иной стиль.
*/