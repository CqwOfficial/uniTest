<template>
	<view class="box boxf-b20" @click="naviGo">
		<ul class="flex-cnsc">
			<li class="flex-rnbc li-1 border">
				<view class="flex-rnsc boxf-l30">
					<image src="../../static/img/icon/time.png"></image>
					<text class="font-1 boxf-l10">{{box.time}}</text>
				</view>
				<view class="flex-rnec boxf-r30" @click="makePhoneCall">
					<text class="font-1 boxf-r10">{{box.tel}}</text>
					<image src="../../static/img/icon/tel2.png"></image>
				</view>
			</li>
			<li class="flex-rnbc">
				<view class="boxf-l30 boxf-t30 boxf-b30">
					<text class="font-2">{{box.shop}}</text>
				</view>
				<view class="flex-rnec boxf-r30">
					<text class="font-2 boxf-r20">{{box.name}}</text>
					<image class="rotate-270" src="../../static/img/icon/arrow-blue.png"></image>
				</view>
			</li>
			<li><slot></slot></li>
		</ul>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		props:['box'],
		methods:{
			naviGo(){
				this.$emit("navi",this.box)
			},
			makePhoneCall(){
				// uni.makePhoneCall({
				// 	phoneNumber: this.box.tel
				// });
			}
		}
	}
</script>

<style scoped>
	.box{
		margin-left: 15upx;
		margin-right: 15upx;
		width: 720upx;
		background-color: #FFFFFF;
		border: 1px solid #0E8EFF;
	}
	.border{
		border-bottom: 1upx dashed #E5E5E5;
	}
	li{
		width: 720upx;
	}
	image{
		width: 35upx;
		height: 35upx;
	}
	.li-1{
		padding: 20upx 30upx 20upx 30upx;
	}
	.font-1{
		line-height: 34upx;
		font-size: 24upx;
		font-family: "PingFangSC-Light";
		color: #333333;
	}
	.font-2{
		line-height: 54upx;
		font-size: 38upx;
		font-family: "PingFangSC-Regular";
		color: #333333;
	}
</style>
