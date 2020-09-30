<template>
	<section>
		<canvas v-if="this.stock != '' " id="bar" width="200" height="150"></canvas>
	</section>
</template>

<script>
	export default {
		props: [ 'stock' ],

		mounted() {

			new Chart( document.getElementById( "bar" ), {
				type: 'line',
				data: {
					labels: [ '- 6 days', '- 5 days', '- 4 days', '- 3 days', '- 2 days', '- 1 day' ],
					datasets: [ {
						label: "Stock Price",
						data: [ 2, 1, 6, 4, 12, 8 ],
						borderColor: '#58f5d2',
					} ]
				},

				options: {
					scales: {
						yAxes: [ {
							ticks: {
								fontColor: "#b5b5b5",
							}
						} ],
						xAxes: [ {
							ticks: {
								fontColor: "#b5b5b5",
							}
						} ]
					}
				}
			} )
		}
	}
</script>

<style scoped>
	h2 {
		font-size: 40px;
		color: mediumseagreen;
	}
</style>