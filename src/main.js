import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import VueRouter from 'vue-router'

Vue.use( Buefy )
Vue.use( VueRouter )

import App from './App.vue'
new Vue( {
	render: h => h( App )
} ).$mount( '#app' )