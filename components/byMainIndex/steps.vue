<template>
	<view class="flex-cnsc box">
		<ul class="flex-rncc boxf-t10 boxf-b10" >
			<block v-for="(item,i) in step.ball" :key="i">
				<li class="flex-cncc f1"><view :class="item.light?'ball-light':'ball-off'"></view></li>
			</block>
			
			<li class="flex-cncc f1"><view :class="step.lastBall.light?'ball-last-light':'ball-last-off'"></view></li>
		</ul>
		<ul class="flex-rnbc boxf-b10" @click="getd">
			<li class="flex-cncc f1"><text>选择行业</text></li>
			<li class="flex-cncc f1"><text>核名</text></li>
			<li class="flex-cncc f1"><text>注册登记</text></li>
			<li class="flex-cncc f1"><text>支付费用</text></li>
			<li class="flex-cncc f1"><text>审核</text></li>
		</ul>
		<ul class="flex-rnbc">
			<block v-for="(item,i) in step.ok" :key="i">
				<li class="flex-cncc f1"><text :class="item.ok?'col':'col1'">{{item.info}}</text></li>
			</block>
			
		</ul>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		
		props:['step'],
		methods:{
			getd(){
				console.log(this.step)
			}
		}
	}
</script>

<style scoped>
	.box{
		width: 100vw;
		height: 180upx;
		background-color: #FFFFFF;
	}
	.ball-last-off{
		position: relative;
		width: 20upx;
		height: 20upx;
		border-radius: 50%;
		background-color: #E5E5E5;
	}
	.ball-last-light{
		position: relative;
		width: 20upx;
		height: 20upx;
		border-radius: 50%;
		background-color: #0E8EFF;
	}
	.ball-off{
		position: relative;
		width: 20upx;
		height: 20upx;
		border-radius: 50%;
		background-color: #E5E5E5;
	}
	.ball-off:after{
		position: absolute;
		content: "d";
		top: 9upx;
		left: 10upx;
		width: 140upx;
		height: 0;
		line-height: 0;
		font-size: 0;
		border: 1px solid #E5E5E5;
	}
	.ball-light{
		position: relative;
		width: 20upx;
		height: 20upx;
		border-radius: 50%;
		background-color: #0E8EFF;
	}
	.ball-light:after{
		position: absolute;
		content: "d";
		top: 9upx;
		left: 10upx;
		width: 140upx;
		height: 0;
		line-height: 0;
		font-size: 0;
		border: 1px solid #0E8EFF;
	}
	ul{
		width: 750upx;
	}
	ul > li {
		height: 40upx;
	}
	li > text{
		font-size: 20upx;
		font-family: "PingFangSC-Light";
	}
	.f1{
		flex: 1 0 0 ;
	}
	.col{
		color: #0E8EFF;
	}
	.col1{
		color: #333333;
	}
</style>
