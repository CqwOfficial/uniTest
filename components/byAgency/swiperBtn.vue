<template>
	<view class="btn-box flex-cnsc" @click.native.stop="boxType">
		<block v-if="state.start">
			<button 
				type="primary" 
				hover-class="btn1-hover"
				@click.native.stop="getStart">打印材料</button>
		</block>
		<block v-if="state.waiting">
			<view class="flex-rnbc">
				<button 
					type="primary" 
					hover-class="btn2-hover"
					@click.native.stop="getWaitBack">重新打印</button>
				<button 
					type="primary" 
					hover-class="btn1-hover"
					@click.native.stop="getWaitGo">我已领取材料</button>
			</view>
		</block>
		<block v-if="state.end">
			<button 
				type="primary" 
				hover-class="btn1-hover"
				@click.native.stop="getEnd">工商已开始受理</button>
		</block>
		
	
	</view>
</template>

<script>
	import common from '../../common/common.js'
	export default{
		data(){
			return{
				state:{
					start: true,
					waiting: false,
					end: false
				},
				ok:"审核已通过",
				end:"材料已领取"
			}
		},
		methods:{
			boxType(){
				return
				//防止 按钮区域误触
			},
			getStart(){
				let _this = this;
				uni.showModal({
					title: "提示",
					content:"请确认开始打印材料",
					success: function (res) {
						if (res.confirm) {
							_this.state.start = false;
							_this.state.waiting = true;
							_this.$emit("navi",_this.ok)
						} else if (res.cancel) {
							
						}
					}
				})
			},
			getWaitBack(){
				let _this = this;
				uni.showModal({
					title: "提示",
					content:"请确认重新开始打印材料",
					success: function (res) {
						if (res.confirm) {
							_this.state.start = true;
							_this.state.waiting = false;
							_this.$emit("navi",_this.ok)
						} else if (res.cancel) {
							
						}
					}
				})
			},
			getWaitGo(){
				let _this = this;
				uni.showModal({
					title: "提示",
					content:"请确认已经领取材料",
					success: function (res) {
						if (res.confirm) {
							_this.state.waiting = false;
							_this.state.end = true;
							_this.$emit("navi",_this.end)
						} else if (res.cancel) {
							
						}
					}
				})
			},
			getEnd(){
				common.showToast("工商已开始受理")
				return
			}
		}
	}
</script>

<style scoped>
	.btn-box{
		width: 100%;
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
	view > view > button{
		width: 315upx;
		height: 94upx;
		background-color: #FFFFFF;
		border: 1px solid #888888;
		font-size: 36upx;
		font-family: "PingFangSC-Semibold";
		color: #333333;
	}
	view > view > button + button{
		margin-left: 30upx;
		width: 315upx;
		height: 94upx;
		background-color: #0E8EFF;
		border: 1px solid #0E8EFF;
		font-size: 36upx;
		font-family: "PingFangSC-Semibold";
		color: #FFFFFF;
	}
	.btn1-hover{
		background-color: rgba(14,142,255,0.7);
	}
	.btn2-hover{
		background-color: rgba(14,142,255,0.1);
	}
</style>