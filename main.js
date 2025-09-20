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
	Внутри vue существует также v-model, в целом, автор очень кратко и по верхам консулся модели, рассматривать мы будем её дальше.
	Сейчас же важно понять, что мы смогли отказаться от value и v-on:input, использовав только 1 v-model.

	Внутрь v-model мы просто передали (в нашем примере) переменную с пустой строкой, а v-model уже самостоятельно сделал 
	все оптимизации и обеспечил работоспособность нашего input
*/