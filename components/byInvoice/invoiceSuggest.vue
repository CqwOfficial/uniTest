<template>
	<view class="page flex-cnsc">
		<image :src="suggest.image"></image>
		<text>{{suggest.title}}</text>
		<text>{{suggest.text}}</text>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		props:['suggest']
	}
</script>

<style scoped>
	.page{
		width: 100vw;
		padding-top: 100upx;
		padding-bottom: 40upx;
		border-bottom: 1px solid #E5E5E5;
		background-color: #FFFFFF;
	}
	.page > image{
		width: 120upx;
		height: 120upx;
	}
	.page >text{
		margin-top: 30upx;
		line-height: 56upx;
		font-size: 40upx;
		font-family: "PingFangSC-Light";
		color: #333333;
	}
	.page >text + text{
		margin-top: 10upx;
		line-height: 38upx;
		font-size: 26upx;
		font-family: "PingFangSC-Light";
		color: #888888;
	}
</style>
