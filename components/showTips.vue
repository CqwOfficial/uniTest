<template>
	<view class="tips-bg" v-if="show.show">
		<view v-if="show.info" class="boxf-t100 flex-cnsc" >
			<view class="tips-block flex-cnss cir-10 ">
				<span class="fm-pfl flx42x30 col-3 flex-c boxf-b20">名称不可用</span>
				<span class="fm-pfl flx40x28 col-3 boxf-b20">1、字号应为2~4个简体汉字</span>
				<span class="fm-pfl flx40x28 col-3 boxf-b20">1、字号应为2~4个简体汉字</span>
				<span class="fm-pfl flx40x28 col-3 boxf-b20">3、不能含有受保护的品牌词汇</span>
				<span class="fm-pfl flx40x28 col-3 boxf-b20">4、不能含有暴力、恐怖、色情词汇</span>
				<span class="fm-pfl flx40x28 col-3 boxf-b20">5、不能含有国家领导人、历史名人姓名</span>
				<span class="fm-pfl flx40x28 col-3 boxf-b20">6、不能含有国家、地区、国际组织名称</span>
			</view>
			<view class="tips-btn" >
				<image @click="closeTips" class="imgx60 boxf-t30" src="../static/img/icon/del-tel.png" mode=""></image>
			</view>
			
		</view>
		<view v-if="show.image" class="boxf-t100 flex-cnsc">
			
			<view class="tips-blocks boxf-h600 flex-cnsc cir-10">
				<view class="boxf-b30 fm-pfr flx48x34 col-0 ">正确示例</view>
				<image class="imgx400x400 boxf-b10" :src="show.image" mode="aspectFit"></image>
				<view class="fm-pfr flx50x36 col-0e8eff border-top-1px-s-e5 boxf-w520  txt-c boxf-t30" style="padding-top: 20upx;" @click="closeTips">确定</view>
			</view>
			
		</view>
		<!-- <view class="tips-bg" v-if="show"></view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showTip: true
			};
		},
		props:['show'],
		methods:{
			closeTips(){
				this.$emit('toClick',false)
			}
		}
	}
</script>

<style scoped>
	.tips-bg{
		position: absolute;
		left: 0;
		top: 0;
		height: 100vh;
		width: 100vw;
		background-color: rgba(0,0,0,0.5);
		z-index: 1000;
	}
	.tips-block{
		position: relative;
		width: 510upx;
		height: 770upx;
		padding: 30upx 40upx 0 40upx;
		background-color: #FFFFFF;
		z-index: 1200;
	}
	.tips-blocks{
		position: relative;
		width: 510upx;
		padding: 30upx 40upx 0 40upx;
		background-color: #FFFFFF;
		z-index: 1200;
	}
	.flex-c{align-self:center}
	.tips-btn{
		position: relative;
		z-index: 1200;
	}
	
</style>
