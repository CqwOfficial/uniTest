<template>
	<view class="flex-cnsc box">
		<ul class="flex-rncc boxf-t10 boxf-b10" >
			<block v-for="(item,i) in getSteps(step).ball" :key="i">
				<li class="flex-cncc f1">
					<view :class="item.light?'ball-light':'ball-off'">
						<view :class="item.light?'line-light':'line-off'"></view>
					</view>
				</li>
			</block><span>n</span>
			
		</ul>
		<ul class="flex-rnbc boxf-b10" @click="getd">
			<li class="flex-cncc f1"><text>选择行业</text></li>
			<li class="flex-cncc f1"><text>核名</text></li>
			<li class="flex-cncc f1"><text>注册登记</text></li>
			<li class="flex-cncc f1"><text>支付费用</text></li>
			<li class="flex-cncc f1"><text>审核</text></li>
		</ul>
		<ul class="flex-rnbc">
			<block v-for="(item,i) in getSteps(step).ok" :key="i">
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
			getSteps(num){
				let list = { ball:[], lastLight:false, ok:[] };
				let okobj = { ok:true, info:'已完成' };
				let noobj = { ok:false, info:'待完成' };
				let on = { light: true };
				let off = { off: true };
				let reg = /^[0-5]$/;
				let regTest = reg.test(num);
				if(!regTest){num = 0;};
				for(let i=0;i<num;i++){ list.ball.push(on); };
				for(let j=0;j<=4-num;j++){ list.ball.push(off); };
				for(let k=0;k<num;k++){ list.ok.push(okobj); };
				for(let l=0;l<=4-num;l++){ list.ok.push(noobj); };
				return list;
			},
		}
	}
</script>

<style scoped>
	.box{
		width: 100vw;
		height: 180upx;
		background-color: #FFFFFF;
	}
	
	.ball-off{
		position: relative;
		width: 20upx;
		height: 20upx;
		border-radius: 50%;
		background-color: #E5E5E5;
	}

	.ball-light{
		position: relative;
		width: 20upx;
		height: 20upx;
		border-radius: 50%;
		background-color: #0E8EFF;
	}
	.line-light{
		position: absolute;
		left: 10upx;
		width: 140upx;
		height: 0upx;
		font-size: 0;
		border: 1px solid #0E8EFF;
	}
	.line-off{
		position: absolute;
		left: 10upx;
		width: 140upx;
		height: 0upx;
		font-size: 0;
		border: 1px solid #E5E5E5;
	}
	ul{
		width: 750upx;
	}
	ul > li {
		height: 40upx;
	}
	ul > span{
		position: absolute;
		right: 0;
		width: 67upx;
		-webkit-user-select:none;
		-moz-user-select:none;
		-ms-user-select:none;
		user-select:none;
		color: #FFFFFF;
		background-color: #FFFFFF;
	}
	ul > li > view{
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
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
