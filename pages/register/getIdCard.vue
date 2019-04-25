<template>
	<view class="page flex-cnsc">
		<view class="boxf-t40 fm-pfl flx48x34 col-3">拍摄/上传身份证</view>
		<view class="boxf-t20 fm-pfl flx40x28 col-0e8eff boxf-b40" @click="showTipsModel">查看示例</view>
		<show-tips :show="showThings" @toClick="closeTips"></show-tips>
		
		<view @click="getPhoto">
			<view class="imgx486x308 flex-cncc id-man">
				<image class="imgx80" src="../../static/img/photo/idcard-add.png" mode=""></image>
			</view>
		</view>
		<view class="fm-pfl flx38x26 col-8 boxf-t30 boxf-b30">身份证人像面</view>
		<view @click="getPhoto">
			<view class="imgx486x308 flex-cncc id-na">
				<image class="imgx80" src="../../static/img/photo/idcard-add.png" mode=""></image>
			</view>
		</view>
		<view class="fm-pfl flx38x26 col-8 boxf-t30 boxf-b30">身份证人像面</view>
	</view>
</template>

<script>
	import showTips from "../../components/showTips.vue"
	export default{
		data(){
			return{
				showTips: false,
				showThings:{
					show:false,
					image:"../static/img/photo/show-idcard.png"
				}
			}
		},
		methods:{
			showTipsModel(){
				this.showThings.show = true;
			},
			closeTips(n){
				this.showThings.show = false;
			},
			getPhoto(){
				
				uni.showActionSheet({
					itemList: ['相机', '相册'],
					success: function (res) {
						console.log('选中了第' + (res.tapIndex + 1) + '个按钮');
						if(res.tapIndex==0){
							uni.chooseImage({
					count: 6, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album','camera'], //从相册选择
					success: function (res) {
						console.log(JSON.stringify(res.tempFilePaths));
					}
				});
						}
					},
					fail: function (res) {
						console.log(res.errMsg);
					}
				});
			}
		},
		components:{
			showTips
		}
	}
</script>

<style scoped>
	.page{
		width: 100vw;
		height: 100vh;
	}
	.tips{
		position: absolute;
		z-index: 1100;
		
	}
	.id-man{
		background: url('../../static/img/photo/idcard-bg-man.png') no-repeat;
		background-size: 100% 100%;
	}
	.id-na{
		background: url('../../static/img/photo/idcard-bg-nation.png') no-repeat;
		background-size: 100% 100%;
	}

</style>
