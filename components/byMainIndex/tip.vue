<template>
	<view class="box">
		<view class="flex-rnsc">
			<image 
				class="imgx100 cir" 
				:src="tip.image" 
				mode="scaleToFill">
			</image>
			<text>{{tip.name}}</text>
		</view>
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
	.box{
		position: relative;
		top: 0;
		padding-top: 20upx;
	}
	.box > view{
		margin: 0 20upx 20upx 20upx;
		width: 710upx;
		height: 160upx;
		border-radius: 10upx;
		background-color: #FFFFFF;
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
