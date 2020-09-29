<template>
	<b-navbar class="has-background-nav">
		<template slot="brand">
			<b-navbar-item>
				<div class="logo">
					stox.com
				</div>
			</b-navbar-item>
		</template>
		<template slot="start">
			<b-navbar-item href="#">
				Home
			</b-navbar-item>
			<b-navbar-item href="#">
				Documentation
			</b-navbar-item>
			
		</template>

		<template slot="end">
			<b-navbar-item tag="div">
				<div class="buttons">
					<a class="button is-primary">
						<strong>Sign up</strong>
					</a>
					<a class="button is-light">
						Log in
					</a>
				</div>
			</b-navbar-item>
		</template>
	</b-navbar>
</template>

<script>
	module.exports = {
		props: [ 'personName' ]
	}
</script>

<style scoped>
	h2 {
		font-size: 40px;
		color: mediumseagreen;
	}
	.logo {
		font-size: 1.5rem;
		color: #fff;
	}
</style>