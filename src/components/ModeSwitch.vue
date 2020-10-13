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
		},
		mounted() {
			let bodyElement = document.body;
			bodyElement.classList.add( "app-background" );

			// check for active theme
			let htmlElement = document.documentElement;
			let theme = localStorage.getItem( "theme" );

			if ( theme === 'dark' ) {
				htmlElement.setAttribute( 'theme', 'dark' )
				this.lightMode = true
			} else {
				htmlElement.setAttribute( 'theme', 'light' );
				this.lightMode = false
			}
		},
		watch: {
			lightMode: function () {
				// add/remove class to/from html tag
				let htmlElement = document.documentElement;

				if ( this.lightMode ) {
					localStorage.setItem( "theme", 'dark' );
					htmlElement.setAttribute( 'theme', 'dark' );
				} else {
					localStorage.setItem( "theme", 'light' );
					htmlElement.setAttribute( 'theme', 'light' );
				}
			}
		}

	}
</script>

<style scoped>
	.switch {
		float: right;
	}
</style>