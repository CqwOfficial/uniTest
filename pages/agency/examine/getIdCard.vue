<template>
	<view class="page flex-cnsc">
		<view class="boxf-t40 fm-pfl flx48x34 col-3">拍摄/上传身份证</view>
		<view class="boxf-t20 fm-pfl flx40x28 col-0e8eff boxf-b40" @click="showTipsModel">查看示例</view>
		<show-tips :show="showThings" @toClick="closeTips"></show-tips>
		
		<view @click="getPhoto" id="photo1">
			<view class="imgx486x308 flex-cncc id-man" v-if="!switchFacePhoto">
				<image class="imgx80" src="../../../static/img/photo/idcard-add.png" mode=""></image>
			</view>
			<view class="imgx486x308 flex-cncc bgc-8 cir-10 photo-contianer" v-if="switchFacePhoto">
				<image class="imgx400x250" :src="userFaceIdCard" mode=""></image>
				<view class="water-mark-left">仅用于实名认证</view>
				<view class="imgx50 cencel-btn" @click.stop="cencelPhoto" id="cel1">
					<image class="imgx50" src="../../../static/img/icon/x.png" mode=""></image>
				</view>
			</view>
		</view>
		<view class="fm-pfl flx38x26 col-8 boxf-t30 boxf-b30">身份证人像面</view>
		<view @click="getPhoto" id="photo2">
			<view class="imgx486x308 flex-cncc id-na" v-if="!switchBackPhoto">
				<image class="imgx80" src="../../../static/img/photo/idcard-add.png" mode=""></image>
			</view>
			<view class="imgx486x308 flex-cncc bgc-8 cir-10 photo-contianer" v-if="switchBackPhoto">
				<image class="imgx400x250" :src="userBackIdCard" mode=""></image>
				<view class="water-mark-center">仅用于实名认证</view>
				<view class="imgx50 cencel-btn" @click.stop="cencelPhoto" id="cel2">
					<image class="imgx50" src="../../../static/img/icon/x.png" mode=""></image>
				</view>
			</view>
		</view>
		<view class="fm-pfl flx38x26 col-8 boxf-t30 boxf-b30">身份证人像面</view>
		
		<bot-btn class="bot-btn" :botBtn="botBtn" @toClick="checkIdCard"></bot-btn>
	</view>
</template>

<script>
	import showTips from "components/showTips.vue"
	import botBtn from "components/botButton.vue"
	export default{
		data(){
			return{
				showTips: false,
				showThings:{
					show:false,
					image:"../../../static/img/photo/show-idcard.png"
				},
				botBtn:{
					res:true,
					light:false,
					resBtn:"核实身份信息"
				},
				userFaceIdCard:"",
				switchFacePhoto:false,
				userBackIdCard:"",
				switchBackPhoto:false
			}
		},
		components:{
			showTips,
			botBtn
		},
		
		methods:{
			showTipsModel(){
				this.showThings.show = true;
			},
			closeTips(n){
				this.showThings.show = false;
			},
			getPhoto(n){
				let _this = this;
				let _id = n.currentTarget.id;
				console.log(_id)
					uni.showActionSheet({
						itemList: ['相机', '相册'],
						success: function (res) {
							console.log('选中了第' + (res.tapIndex + 1) + '个按钮');
							if(res.tapIndex==0){
								uni.chooseImage({
									count: 1, //默认9
									sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
									sourceType: ['camera'], //从相册选择
									success: function (res1) {
										console.log(res1);
										var tempFilePaths = res1.tempFilePaths;
										uni.saveFile({
											tempFilePath: tempFilePaths[0],
											success: function (res2) {
												if(_id == "photo1"){
													_this.switchFacePhoto = true;
													_this.userFaceIdCard = res2.savedFilePath;
													if(_this.switchFacePhoto &&_this.switchBackPhoto){
														_this.botBtn.light=true; // 控制底部按钮颜色
													}else{
														_this.botBtn.light=false;
													}
												}else if(_id == "photo2"){
													_this.switchBackPhoto = true;
													_this.userBackIdCard = res2.savedFilePath;
													if(_this.switchFacePhoto &&_this.switchBackPhoto){
														_this.botBtn.light=true; // 控制底部按钮颜色
													}else{
														_this.botBtn.light=false;
													}
												}
												
											}
										});
									}
								});
							}else if(res.tapIndex == 1){
								uni.chooseImage({
									count: 1, //默认9
									sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
									sourceType: ['album'], //从相册选择
									success: function (res1) {
										console.log(res1);
										var tempFilePaths = res1.tempFilePaths;
										uni.saveFile({
											tempFilePath: tempFilePaths[0],
											success: function (res2) {
												if(_id == "photo1"){
													_this.switchFacePhoto = true;
													_this.userFaceIdCard = res2.savedFilePath;
													if(_this.switchFacePhoto &&_this.switchBackPhoto){
														_this.botBtn.light=true; // 控制底部按钮颜色
													}else{
														_this.botBtn.light=false;
													}
												}else if(_id == "photo2"){
													_this.switchBackPhoto = true;
													_this.userBackIdCard = res2.savedFilePath;
													if(_this.switchFacePhoto &&_this.switchBackPhoto){
														_this.botBtn.light=true; // 控制底部按钮颜色
													}else{
														_this.botBtn.light=false;
													}
												}
												
											}
										});
									}
								});
							}
						},
						fail: function (res) {
							console.log(res.errMsg);
						}
					});
				
			},
			cencelPhoto(n){
				let _ids = n.currentTarget.id;
				if(_ids == "cel1"){
					this.userFaceIdCard = "";
					this.switchFacePhoto = false;
				}else if(_ids == "cel2"){
					this.userBackIdCard = "";
					this.switchBackPhoto = false;
				}
				
				// this.openGetPhoto = !this.openGetPhoto;
			},
			checkIdCard(){
				if(this.botBtn.light == true){
					uni.navigateTo({
						url:'./registration'
					})
				}
			}
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
		background: url('../../../static/img/photo/idcard-bg-man.png') no-repeat;
		background-size: 100% 100%;
	}
	.id-na{
		background: url('../../../static/img/photo/idcard-bg-nation.png') no-repeat;
		background-size: 100% 100%;
	},
	.bot-btn{
		position: fixed;
		bottom: 0;
	}
	.photo-contianer{
		position: relative;
	}
	.cencel-btn{
		position: absolute;
		right: -35upx;
		top: -25upx;
	}
	.water-mark-center{
		position: absolute;
		transform: rotate(-35deg);
		padding: 3upx 10upx 3upx 10upx;
		line-height: 40upx;
		font-size: 28upx;
		letter-spacing:3upx;
		color: #FFFFFF;
		background-color: none;
		border: 5upx solid #FFFFFF;
		vertical-align: middle;
		text-align: center;
	}
	.water-mark-left{
		position: absolute;
		left: 20upx;
		transform: rotate(-35deg);
		padding: 3upx 10upx 3upx 10upx;
		line-height: 40upx;
		font-size: 28upx;
		letter-spacing:3upx;
		color: #FFFFFF;
		background-color: none;
		border: 5upx solid #FFFFFF;
		vertical-align: middle;
		text-align: center;
	}
</style>
