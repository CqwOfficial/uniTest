<template>
	<view class="boxf-w750 flex-cnss bgc-f" @click="backThings">
		
		<view class="boxf-w710 boxf-l40 fm-pfr flx82x30 col-3 txt-l border-bot-1px-s-e5">{{title}}</view>
		<view class="boxf-w510 boxf-l120 boxf-r120 boxf-t20 boxf-b20 flex-rnbc">
			<block v-for="(item,index) in things" :key="index">
				<index-icon :things="item" :point="item.poi"></index-icon>
			</block>
		</view>
	</view>
</template>

<script>
	import indexIcon from "./indexIcon.vue"
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			backThings(){
				this.$emit("getThings","noClick")
			}
		},
		props:['things','title'],
		components:{
			indexIcon
		}
	}
</script>

<style>

</style>
