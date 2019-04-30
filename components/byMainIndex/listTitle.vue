<template>
	<view class="box flex-rnsc bgc-f boxf-l40 border-bot-1px-s-e5">
		<text class="fm-pfr flx42x30 col-3 ">{{title}}</text>
	</view>
</template>

<script>
	export default{
		data(){
			return{
			}
		},
		props:['title']
	}
</script>

<style scoped>
	.box{
		height: 80upx;
		width: 710upx;
	}
</style>
