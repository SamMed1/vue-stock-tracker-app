<template>
	<div id="app">
		<HeaderItem />
		<UserCard />
		<FooterItem />
	</div>
</template>

<script>
	import HeaderItem from './components/HeaderItem.vue'
	import UserCard from './components/UserCard.vue'
	import ChartItem from './components/ChartItem.vue'
	import FooterItem from './components/FooterItem.vue'

	export default {
		name: 'app',
		components: {
			HeaderItem,
			UserCard,
			ChartItem,
			FooterItem
		}
	}
</script>

<style>
	#app {
		font-family: 'Quicksand', sans-serif;
		color: #2c3e50;
	}

	body {
		background-color: #363744;
	}

	.card {
		background-color: #404453;
		border-left: 2px solid white;
	}

	.has-text-primary {
		color: #58f5d2 !important;
	}

	.has-text-secondary {
		color: #ff4f83 !important;
	}

	.has-background-nav {
		background-color: #292a31;
	}

	.input {
		background: #5f6373;
		border: none;
		color: white;
	}
</style>