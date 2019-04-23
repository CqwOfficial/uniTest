<template>
	<view class="flex-cnsc" @click="urlGo">
		<view class="flex-cncc imgx100 cir poi" 
			:data-text="point" 
			:class="things.bg"
			v-if="point">
			<image class="imgx60" :src="things.src"></image>
		</view>
		
		<view class="flex-cncc imgx100 cir" 
			:class="things.bg"
			v-if="!point">
			<image class="imgx60" :src="things.src"></image>
		</view>

		<view class="fm-pfr flx42x30 col-3 boxf-t20">{{things.info}}</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			};
		},
		props:['things','point'],

		methods:{
			urlGo:function() {
				switch (this.things.info){
					case "营业执照":
						uni.navigateTo({
							url: '/pages/business/license/license'
						});
						break;
					case "工商年报":
						uni.navigateTo({
							url: '/pages/business/annual/annual'
						});
						break;
					case "注销/变更":
						uni.navigateTo({
							url: '/pages/business/cancel/cancel'
						});
						break;
					case "开发票":
						uni.navigateTo({
							url: '/pages/tax/create/create'
						});
						break;
					case "发票管理":
						uni.navigateTo({
							url: '/pages/tax/invoice/invoice'
						});
						break;
					case "纳税申报":
						uni.navigateTo({
							url: '/pages/tax/declare/declare'
						});
						break;
					case "银行开户":
						uni.navigateTo({
							url: '/pages/more/bank/bank'
						});
						break;
					case "公章管理":
						uni.navigateTo({
							url: '/pages/more/seal/seal'
						});
						break;
					case "联系客服":
						uni.navigateTo({
							url: '/pages/more/call/call'
						});
						break;
					default:
						break;
				}
			}
			
		}
	}
</script>

<style scoped>
	.poi{
		position: relative;
	}
	.poi:before{
		position: absolute;
		content: attr(data-text);
		top: -10%;
		right:-25%;
		width: 35upx;
		height: 35upx;
		border-radius: 50%;
		color: #FFFFFF;
		font-size: 22upx;
		line-height: 36upx;
		font-family: "PingFangSC-Medium";
		background-color: #FF3300;
		z-index: 100;
	}
</style>