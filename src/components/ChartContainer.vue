<template>
	<div style="color: white;">
		{{ info }}
	</div>
</template>

<script>
	import axios from 'axios';

	export default {
		data() {
			return {
				info: null
			}
		},
		mounted() {
			axios
				.get( 'http://api.marketstack.com/v1/eod?access_key=bca428891880307ff55dab467675b520&symbols=MSFT' + '&limit=30' )
				.then( response => ( this.info = response ) )
		}
	}
</script>