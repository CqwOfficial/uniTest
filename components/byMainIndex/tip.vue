<template>
	<view class="flex-rnsc">
		<image 
			class="imgx100 cir" 
			:src="tip.image" 
			mode="scaleToFill">
		</image>
		<text>{{tip.name}}</text>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		props:['tip']
	}
</script>

<style scoped>
	view{
		position: absolute;
		margin: 20upx;
		top: 0;
		width: 710upx;
		height: 160upx;
		border-radius: 10upx;
		background-color: #FFFFFF;
		z-index: 1;
	}
	image{
		margin-left: 30upx;
		margin-right: 20upx;
	}
	text{
		line-height: 30upx;
		font-size: 30upx;
		color: #333333;
		font-family: "PingFangSC-Regular";
	}
</style>
