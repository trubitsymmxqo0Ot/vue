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
  },
  render() {
    return h(
      "div",
      {
        class: "card",
      },
      [
        h("h1", {
			class: "card__title"
		}, this.title),
        h("button", {
          class: "card__second-tilte",
		  onClick: this.changeTitle,
        }, 'Изменить'),
      ]
    );
  },
  // template: `
  // 	<div class="card">
  // 		<h1 class="card__title">{{ title }}</h1>
  // 		<button class="card__second-title" @click="title = 'Изменили'">Изменить</button>
  // 	</div>
  // `
});

app.mount("#root");

/*
	Теперь поговорим про virtualDOM. В целом, vue используют виртуальный дом точно также, как это делает реакт,
	то есть, он вносит изменения точечно в определенный узел DOM дерева, а не меняет его весь сразу. Но
	под капотом он делает все через так называемый v, выше примеры как это работает. В целом, это не обязательно
	запоминать на зубок, просто иметь ввиду, что vue привычные нам теги, переменные и прочее внутри template 
	переводит в свой синтаксис, который особым образом взаимодействует со стандартным DOM деревом через 
	призму virtualDOM.

	Также, выше в примере я написал render вместо template. render работает точно также, как и template
*/
