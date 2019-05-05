<template>
	<view class="invoice">
		<ul class="flex-cnsc">
			<li class="flex-rnss">
				<text space="emsp">{{line.title}}</text>
				<view class="invoice-base">{{line.text}}</view>
			</li>
			
		</ul>
	</view>
	
</template>

<script>
	export default{
		data(){
			return{
			}
		},
		props:["line"]
	}
</script>

<style scoped>
	.invoice{
		padding-top: 30upx;
		width: 100vw;
		height: 100%;
		background-color: #FFFFFF;
	}
	.invoice > ul{
		width: 690upx;
		margin-left: 40upx;
		margin-right: 20upx;
	}
	.invoice > ul > li{
		margin-bottom: 30upx;
		width: 690upx;
	}
	.invoice > ul > li > text{
		width: 140upx;
		height: 50upx;
		line-height: 48upx;
		font-size: 34upx;
		font-family: "PingFangSC-Light";
		text-align: justify;
		color: #333333;
	}
	.invoice-base{
		margin-left: 40upx;
		padding-top: 6upx;
		width: 510upx;
		line-height: 40upx;
		font-size: 28upx;
		font-family: "PingFangSC-Light";
		color: #333333;
	}
</style>
