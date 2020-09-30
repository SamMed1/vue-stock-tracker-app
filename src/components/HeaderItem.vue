<template>
	<b-navbar class="has-background-nav">
		<template slot="brand">
			<b-navbar-item>
				<div class="logo">
					stox
				</div>
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

	.logo span {
		font-size: 1rem;
	}

	@media screen and (min-width: 1024px) {
		.navbar {
			min-height: 3.25rem;
			padding: 0rem 4%;
		}
	}
</style>