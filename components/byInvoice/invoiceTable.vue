<template>
	<view class="invoice">
		<view class="flex-cncc"><image src="https://zhushangimages.oss-cn-hangzhou.aliyuncs.com/invoice_electronic.png"></image></view>
		<ul class="flex-cnsc">
			<block v-for="(item, i) in invlist" :key="i">
				<li class="flex-rnss">
					<text space="emsp">{{item.title}}</text>
					<block v-if="item.list">
						<ul class="invoice-detail">
							<block v-for="(item2, i2) in item.list" :key="i2">
								<li class="flex-rnsc">
									<text>{{item2.title}}</text>
									<text>{{item2.money}}</text>
								</li>
							</block>
							
						</ul>
					</block>
					<block v-if="item.text">
						<view class="invoice-base">{{item.text}}</view>
					</block>
				</li>
			</block>
		</ul>
	</view>
	
</template>

<script>
	export default{
		data(){
			return{
				text:true,
				list:false
			}
		},
		props:["invlist"]
	}
</script>

<style scoped>
	.invoice{
		width: 100vw;
		height: 100%;
		background-color: #FFFFFF;
	}
	.invoice > view{
		margin-top: 40upx;
	}
	.invoice > view > image{
		width: 300upx;
		height: 80upx;
	}
	.invoice > ul{
		width: 690upx;
		margin-top: 40upx;
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
	.invoice-detail{
		margin-left: 40upx;
		width: 510upx;
	}
	.invoice-detail > li{
		width: 510upx;
	}
	.invoice-detail > li > text{
		padding-top: 6upx;
		line-height: 40upx;
		font-size: 28upx;
		font-family: "PingFangSC-Light";
		color: #333333;
	}
	.invoice-detail > li >text + text{
		flex:1;
		padding-top: 6upx;
		line-height: 40upx;
		font-size: 28upx;
		font-family: "PingFangSC-Light";
		color: #333333;
		text-align: center;
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
