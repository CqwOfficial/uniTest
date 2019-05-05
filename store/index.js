import Vue from 'vue'
import Vuex from 'vuex'

import states from './state/index.js'

Vue.use(Vuex);

const store = new Vuex.Store({
	state: states,
	mutations: {
		change: function(state, nickname) {
			state.nickname = nickname;
		}
	}
});
export default store
