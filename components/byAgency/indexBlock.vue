<template>
	<view class="block" @click="navigation">
		<view type="primary" >
			<image :src="block.image"></image>
			<text>{{block.text}}</text>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		props:['block'],
		methods:{
			navigation(){
				this.$emit("navi",this.block.text)
			}
		}
	}
</script>

<style scoped>
	.block{
		position: relative;
		display: flex;
		flex-flow: column nowrap;
		justify-content: flex-start;
		align-items: center;
		width: 100vw;
		z-index: 1;
	}
	view>view{
		display: flex;
		flex-flow: column nowrap;
		justify-content: flex-start;
		align-items: center;
		padding-top: 30upx;
		padding-bottom: 30upx;
		width: 710upx;
		background-color: #999899;
		border-radius: 20upx;
	}
	view > image{
		margin-bottom: 30upx;
		width: 100upx;
		height: 100upx;
	}
	view > text{
		line-height: 48upx;
		font-size: 34upx;
		font-family: "PingFangSC-Regular";
		color: #FFFFFF;
	}
	
</style>
