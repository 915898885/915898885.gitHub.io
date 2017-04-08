import {
	SHOW_LOADING,
	HIDE_LOADING
} from './types'
const state={
	loading:false
}
const mutations={
	[SHOW_LOADING](state){
		state.loading=true;
	},
	[HIDE_LOADING](state){
		state.loading=false;
	}
}
const getters={
	loading:(state)=>{
		return state.loading;
	}
}
export default{
	state,
	getters,
	mutations
}