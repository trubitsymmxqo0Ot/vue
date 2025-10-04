<template>
	<div class="news">
		<p class="news__text">{{ title }}</p>
		<button @click="isOpen = !isOpen" class="news__button">Открыть</button>
		<p v-if="isOpen">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis sunt natus quis eum itaque, veniam ullam vel corporis nihil. Ullam iste qui ab beatae voluptatibus? Voluptatibus quia necessitatibus aut eius?</p>
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
	},	
	data(){
		return {
			isOpen: false,
		}
	}
}
</script>