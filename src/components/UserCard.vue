<template>
	<div class="user-card">

		<section class="hero">
			<div class="hero-body">
				<div class="container">
					<div class="wrap">
						<div>
							<figure class="image is-48x48">
								<img class="is-rounded" src="https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/69248997_10156619677567358_3333642461401579520_n.jpg?_nc_cat=106&_nc_sid=09cbfe&_nc_ohc=YlA4eUt89iIAX-qvCS7&_nc_oc=AQlJcnQbI770v9jwXAc8b1QyFyrVOnfjMpBnAC8kJnkIegbzxEcHZYYkdUjqoYZV2Y88NQQnvGV27lTevfHeUSzd&_nc_ht=scontent-lht6-1.xx&oh=f0d36e166cb9a16e8a11cc184b296ac7&oe=5F9585E5">
							</figure>
						</div>
						<div class="ml-5">
							<h1 class="title has-text-white">
								Hey Sam
							</h1>
							<h2 class="subtitle has-text-grey-light">
								Your Investment Tracking Dashboard
							</h2>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="mb-5">
			<div class="container">
				<div class="card">
					<div class="card-content">
						<div class="columns">
							<div class="column">
								<b-field>
									<b-input v-model="stock" placeholder="EG: MSFT" @input="ChartItemOnInput"></b-input>
								</b-field>
								<p class="title is-7 has-text-grey-light">
									Stock Symbol
								</p>
							</div>
							<div class="column">
								<b-field>
									<b-input type="number" v-model.number="oldprice"></b-input>
								</b-field>
								<p class="title is-7 has-text-grey-light">
									Purchased stock price <span class="has-text-grey">(£)</span>
								</p>
							</div>
							<div class="column">
								<b-field>
									<b-input type="number" v-model.number="newprice"></b-input>
								</b-field>
								<p class="title is-7 has-text-grey-light">
									Current stock price <span class="has-text-grey">(£)</span>
								</p>
							</div>
							<div class="column">
								<b-field>
									<b-input type="number" v-model.number="cost"></b-input>
								</b-field>
								<p class="title is-7 has-text-grey-light">
									Shares purchased <span class="has-text-grey">(£)</span>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="mb-6">
			<div class="container">
				<div class="columns">
					<div class="column is-three-quarters">
						<chart-item :stock="stock" ref="stockChart"></chart-item>
					</div>
					<div class="column">
						<div class="card">
							<div class="card-content">
								<div class="content">
									<p class="title has-text-primary mb-0">£<span v-if="this.oldprice > 0 ">{{costCalcThird}}</span></p>
									<p class="title is-6 has-text-grey-light">Portfolio value</p>

									<p class="title has-text-secondary mb-0"><span v-if="this.oldprice > 0 ">{{third}}</span>%</p>
									<p class="title is-6 has-text-grey-light">% + / -</p>

									<p class="title has-text-secondary mb-0">£<span v-if="this.oldprice > 0 ">{{costCalcSecond}}</span></p>
									<p class="title is-6 has-text-grey-light">£ + / -</p>
								</div>
							</div>
						</div>
					</div>
					
				</div>
				
			</div>
		</section>

	<!--
	new price - old price = {{difference}}<br>
	
	(difference) % (oldprice) = {{second}} <br>
	percentage increase / decrease {{third}}

	cost / 100 = {{costCalc}} (a) <br>
	a x percentage increase = {{costCalcSecond}} (b) <br>
	b x percentage increase = {{costCalcThird}}
	-->

	</div>
</template>

<script>
import ChartItem from './ChartItem';

	export default {

		components: {
			'chart-item': ChartItem,
		},

		data: function () {
			return {
				stock: '',
				oldprice: 0,
				newprice: 0,
				cost: 0,
			}
		},

		 methods: {
			ChartItemOnInput() {
				this.$refs.stockChart.onInput(event);
			},
		},

		computed: {
			difference() {
				return this.newprice - this.oldprice
			},

			second() {
				return this.difference / this.oldprice
			},

			third() {
				return this.second * 100
			},



			costCalc() {
				return this.cost / 100
			},

			costCalcSecond() {
				return this.costCalc * this.third
			},

			costCalcThird() {
				return this.cost + this.costCalcSecond
			}

		}

	}
</script>

<style scoped>
	.user-card {
		padding: 35px;
	}

	h3 {
		color: red;
	}

	.wrap {
		display: flex;
	}
</style>