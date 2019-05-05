<template>
	<view class="flex-cnsc" @click="urlGo">
		<view class="flex-cncc imgx100 cir poi" 
			:data-text="point" 
			:class="getIcon(things).bg"
			v-if="point">
			<image class="imgx60" :src="getIcon(things).src"></image>
		</view>
		
		<view class="flex-cncc imgx100 cir" 
			:class="getIcon(things).bg"
			v-if="!point">
			<image class="imgx60" :src="getIcon(things).src"></image>
		</view>

		<view class="fm-pfr flx42x30 col-3 boxf-t20">{{getIcon(things).info}}</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			};
		},
		props:['things','point'],
		onLoad(){
		},
		methods:{
			urlGo:function() {
				switch (this.getIcon(this.things).info){
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
			},
			getIcon(num){
				let _item = {};
				switch (num){
					case 1:
							_item.src = "../static/img/index/business.png";
							_item.bg = "bgc-f90";
							_item.info = "营业执照";
						return _item
					case 2:
							_item.src="../static/img/index/annual.png";
							_item.bg="bgc-1ee";
							_item.info="工商年报";
						return _item
					case 3:
							_item.src="../static/img/index/cancel.png";
							_item.bg="bgc-f30";
							_item.info="注销/变更";
						return _item
					case 4:
							_item.src="../static/img/index/invoice.png";
							_item.bg="bgc-f80";
							_item.info="开发票";
						return _item
					case 5:
							_item.src="../static/img/index/manage.png";
							_item.bg="bgc-4b8";
							_item.info="发票管理";
						return _item
					case 6:
							_item.src="../static/img/index/declare.png";
							_item.bg="bgc-bf8";
							_item.info="纳税申报";
						return _item
					case 7:
							_item.src="../static/img/index/bank.png";
							_item.bg="bgc-0997f7";
							_item.info="银行开户";
						return _item
					case 8:
							_item.src="../static/img/index/seal.png";
							_item.bg="bgc-f80";
							_item.info="公章管理";
						return _item
					case 9:
							_item.src="../static/img/index/attendant.png";
							_item.bg="bgc-0997f7";
							_item.info="联系客服";
						return _item
					default:
						break;
				}
			},
			
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
		width: 33upx;
		height: 33upx;
		border-radius: 50%;
		color: #FFFFFF;
		font-size: 22upx;
		text-align: center;
		line-height: 32upx;
		font-family: "PingFangSC-Medium";
		background-color: #FF3300;
		z-index: 100;
	}
</style>