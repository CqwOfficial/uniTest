<template>
	<view class="container">
		<floor></floor>
		<tip :tip="indexTip"></tip>
		<step :step="step"></step>
		<view class="">
			dssd
		</view>
	</view>
</template>

<script>
	import floor from "../../components/byMainIndex/floor.vue"
	import tip from "../../components/byMainIndex/tip.vue"
	import step from "../../components/byMainIndex/steps.vue"
	export default {
		data() {
			return {
				indexTip:{
					name: "田昊",
					image: "../../static/img/icon/head.png"
				},
				step:{
					ball:[
						{light:true},
						{off:true},
						{light:true},
						{light:true}
					],
					lastBall:{light:true},
					ok:[
						{ok:true,info:'已完成'},
						{ok:false,info:'待完成'},
						{ok:true,info:'已完成'},
						{ok:true,info:'已完成'},
						{ok:true,info:'已完成'},
					]
				}
			}
		},
		components:{
			floor,
			tip,
			step
		},
		onLoad() {
			// this.test()
		},
		methods: {
			// async test(){
			// }
		}
	}
</script>v

<style>
	
</style>
