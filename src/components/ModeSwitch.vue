<template>
	<section class="hero">
		<div class="hero-body pt-0 pb-0 mt-6">
			<div class="container">
				<div class="field has-text-white">
					<b-switch
							  v-model="lightMode"
							  passive-type='is-primary'
							  type='is-warning'>
						{{ lightMode ? "Light Mode" : "Dark Mode" }}
					</b-switch>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				lightMode: false
			}
    	}
	}
</script>

<style scoped>
	.switch {
		float: right;
	}
</style>