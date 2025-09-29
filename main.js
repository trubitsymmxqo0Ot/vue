const h = Vue.h;
const app = Vue.createApp({
  data() {
    return {
      title: "Это title из свойства template",
    };
  },
  methods: {
    changeTitle() {
      this.title = "Изменили";
    },
  }
});

const app2 = Vue.createApp({
	data(){
		return {
			title: 'Это второй app, который никак не связан с первым'
		}
	}
})

app2.mount("#root2");
app.mount("#root");

/*
	Во vue существует возможность создания сразу нескольких приложений. Причем они никак не будут связанны
	между собой и если что-то поменяется в условном первом блоке, то на второй блок это никак не повлияет, 
	даже если мы поменяем условный title, который есть и у блока #1, и у блока #2

*/
