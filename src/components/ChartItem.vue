<template>
	<section>
		<div class="container">
			<div class="card">
				<div class="card-content">
					<canvas v-if="this.stock != '' " id="bar-chart2" width="200" height="150"></canvas>
					<mock-chart v-if="this.stock == '' "></mock-chart>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import MockChart from './MockChart';

	export default {
		components: {
			'mock-chart': MockChart,
		},

		props: [ 'stock' ],

		data: function () {
			return {
				difference: '',
			}
		},

		methods: {
			onInput( event ) {
				this.textInput = event.target.value;
				var param = event.target.value;
				var url = 'http://api.marketstack.com/v1/eod?access_key=bca428891880307ff55dab467675b520&limit=30&symbols=';
				var urlWithParams = url + param;

				var request = new XMLHttpRequest()

				// Open a new connection, using the GET request on the URL endpoint
				request.open( 'GET', urlWithParams, true ) // URL of the API endpoint.

				request.onload = function () {
					// Begin accessing JSON data here
					var data = JSON.parse( this.response );
					if ( request.status >= 200 && request.status < 400 ) {

						const all = data;
						const item_name = data[ 'data' ];

						var stackValues = [];
						var stackDates = [];
						for ( var key in item_name ) {
							// console.log( key );
							console.log( item_name[ key ][ 'open' ] );
							stackValues.push( item_name[ key ][ 'open' ] );
							stackDates.push( item_name[ key ][ 'date' ].substring( 0, 10 ) );
						}

						console.log( stackValues );

						new Chart( document.getElementById( "bar-chart2" ), {
							type: 'line',
							data: {
								labels: stackDates.reverse(),
								datasets: [ {
									label: "Stock Price",
									data: stackValues.reverse(),
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
						} );


					} else {
						console.log( 'error' )
					}
				}
				request.send()
			},
		},
	}
</script>

<style scoped>
	h2 {
		font-size: 40px;
		color: mediumseagreen;
	}
</style>