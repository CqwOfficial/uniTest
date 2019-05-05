<template>
	<view class="invoice flex-rnss">
		<text space="emsp">{{outlay.title}}</text>
		<block v-if="outlay.list">
			<ul class="invoice-detail">
				<block v-for="(item, i) in outlay.list" :key="i">
					<li class="flex-rnbc">
						<text>{{item.title}}</text>
						<text>{{item.money}}</text>
					</li>
				</block>
			</ul>
		</block>
	</view>
	
</template>

<script>
	export default{
		data(){
			return{
			}
		},
		props:["outlay"]
	}
</script>

<style scoped>
	.invoice{
		margin-top: 20upx;
		padding: 30upx 20upx 30upx 40upx;
		width: 750upx;
		height: 100%;
		background-color: #FFFFFF;
	}
	.invoice > text{
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
		margin-right: 20upx;
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
