<template>
	<view class="btn-box flex-cnsc">
		<block v-if="btn.confirm">
			<button 
				type="primary" 
				hover-class="btn1-hover"
				@click="confirm">{{btn.confirm}}</button>
		</block>
		<block v-if="btn.cancel">
			<button 
				type="primary" 
				hover-class="btn2-hover"
				@click="cancel">{{btn.cancel}}</button>
		</block>
	</view>
</template>

<script>
	import common from '../../common/common.js'
	export default{
		data(){
			return{}
		},
		props:['btn'],
		methods:{
			confirm(){
				this.$emit("confirm", "confirm");
			},
			cancel(){
				this.$emit("cancel", "cancel");
			},
		}
	}
</script>

<style scoped>
	.btn-box{
		margin-top: 130upx;
		width: 100vw;
		padding-top: 30upx;
		padding-bottom: 30upx;
		background-color: #FFFFFF;
	}
	button{
		width: 670upx;
		height: 94upx;
		background-color: #0E8EFF;
		border: 1px solid #0E8EFF;
		font-size: 36upx;
		font-family: "PingFangSC-Semibold";
		color: #FFFFFF;
	}
	button + button{
		margin-top: 20upx;
		width: 670upx;
		height: 94upx;
		background-color: #FFFFFF;
		border: 1px solid #0E8EFF;
		font-size: 36upx;
		font-family: "PingFangSC-Semibold";
		color: #0E8EFF;
	}
	.btn1-hover{
		background-color: rgba(14,142,255,0.7);
	}
	.btn2-hover{
		background-color: rgba(14,142,255,0.1);
	}
</style>
