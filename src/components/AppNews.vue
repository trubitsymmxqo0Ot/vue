<template>
	<div class="news">
		<p class="news__text">{{ title }}</p>
		<button @click="open" class="news__button">Открыть</button>
		<p v-if="isNewOpen">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis sunt natus quis eum itaque, veniam ullam vel corporis nihil. Ullam iste qui ab beatae voluptatibus? Voluptatibus quia necessitatibus aut eius?</p>
	</div>
</template>

<script>
export default {
	props: {
		title: String, //Валидация в одну строку, не тонкая валидация
		id: {
			type: Number,
			required: true,
		},
		isOpen: {
			type: Boolean,
			required: false,
			default: false,
			validator(value){
				return value === true || value === false
			}
		}
	},	
	// emits: ['open-flag'], можем указывать так, если типизация не нужна
	emits: {
		'open-flag'(num) {
			if(num) {
				return true
			}
			console.warn('Не получили 42')
		}
	},
	data(){
		return {
			isNewOpen: this.isOpen,
		}
	},
	methods: {
		open() {
			this.isNewOpen = !this.isNewOpen;
			if(this.isNewOpen) {
				this.$emit('open-flag', 42);
			}
		}
	}
}
</script>