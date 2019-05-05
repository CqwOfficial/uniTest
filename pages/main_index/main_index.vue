<template>
	<view class="container">
		<floor></floor>
		<tip :tip="indexTip"></tip>
		<view class="boxf-t20">
			<step :step="stepNum"></step>
		</view>
		
		<ul class="boxf-t20 boxf-w750 flex-cnsc bgc-f">
			<li>
				<list-title :title="title1"></list-title>
				<ul class="flex-rncc boxf-2040">
					<li class="flex-100"><index-icon :things="1" :point="12" ></index-icon></li>
					<li class="flex-100"><index-icon :things="2"></index-icon></li>
					<li class="flex-100"><index-icon :things="3"></index-icon></li>
				</ul>
			</li>
		</ul>
		
		<ul class="boxf-t20 boxf-w750 flex-cnsc bgc-f">
			<li>
				<list-title :title="title2"></list-title>
				<ul class="flex-rncc boxf-2040">
					<li class="flex-100"><index-icon :things="4"></index-icon></li>
					<li class="flex-100"><index-icon :things="5" :point="9"></index-icon></li>
					<li class="flex-100"><index-icon :things="6"></index-icon></li>
				</ul>
			</li>
		</ul>
		
		<ul class="boxf-t20 boxf-w750 flex-cnsc bgc-f">
			<li>
				<list-title :title="title3"></list-title>
				<ul class="flex-rncc boxf-2040">
					<li class="flex-100"><index-icon :things="7"></index-icon></li>
					<li class="flex-100"><index-icon :things="8"></index-icon></li>
					<li class="flex-100"><index-icon :things="9" :point="2" ></index-icon></li>
				</ul>
			</li>
		</ul>
		
	</view>
</template>

<script>
	import floor from "../../components/byMainIndex/floor.vue"
	import tip from "../../components/byMainIndex/tip.vue"
	import step from "../../components/byMainIndex/steps.vue"
	import listTitle from "../../components/byMainIndex/listTitle.vue"
	import indexIcon from "../../components/indexIcon.vue"
	export default {
		data() {
			return {
				stepNum: 1, // 这个是用来控制 步骤条进度的，有效输入范围是0-5，输入其他则默认为0；
				indexTip:{
					name: "田昊",
					image: "../../static/img/icon/head.png"
				},
				title1:"工商服务",
				title2:"财税服务",
				title3:"更多"
			}
		},
		components:{
			floor,
			tip,
			step,
			listTitle,
			indexIcon
		},
		onLoad() {
		},
		methods: {
		}
	}
</script>

<style>
	
</style>
