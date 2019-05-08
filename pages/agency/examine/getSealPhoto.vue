<template>
	<view class="page flex-cnsc">
		<text>拍摄/上传印章</text>
		<text @click="showTips">查看示例</text>
		<show-tips :show="showThings" @toClick="closeTips"></show-tips>
		<ul class="bgc-e5">
			<li class="flex-cnsc boxf-b20 bgc-f">
				<photo @photo="getOfficalSeal"></photo>
				<text class="col-b2 fm-pfl flx38x26">公章</text>
			</li>
			<li class="flex-cnsc boxf-b20 bgc-f">
				<photo @photo="getInvoiceSeal"></photo>
				<text class="col-b2 fm-pfl flx38x26">发票章</text>
			</li>
			<li class="flex-cnsc boxf-b20 bgc-f">
				<photo @photo="getLegalPersonSeal"></photo>
				<text class="col-b2 fm-pfl flx38x26">法人章</text>
			</li>
		</ul>

		<btn :btn="btn" @confirm="pushPhoto"></btn>

	</view>
</template>

<script>
	import showTips from "components/showTips.vue"
	import photo from "../../../components/byAgency/photo.vue"
	import btn from "../../../components/byAgency/btnTemplate.vue"
	export default {
		data() {
			return {
				showThings: {
					show: false,
					image: "../../../static/img/photo/sealTest.jpg"
				},
				officeSeal: '',
				invoiceSeal: '',
				legalPersonSeal: '',
				btn: {
					confirm: "提交"
				},
				userInfo: {}
			}
		},
		onLoad: function(e) {
			this.userInfo = e;
		},
		methods: {
			closeTips(n) {
				this.showThings.show = false;
			},
			showTips() {
				this.showThings.show = true;
			},
			getOfficalSeal(n) {
				this.officeSeal = n;
			},
			getInvoiceSeal(n) {
				this.invoiceSeal = n;
			},
			getLegalPersonSeal(n) {
				this.legalPersonSeal = n;
			},
			pushPhoto() {
				// 逻辑从待刻主页一直跑到这里，会得到待刻页选中信息的店数据，用于接口的参数
				// 
				console.log(this.userInfo)
				console.log(this.officeSeal) //公章图片临时地址
				console.log(this.invoiceSeal)
				console.log(this.legalPersonSeal)
				
				
				// 接着就是上传图片到服务器了
// 				uni.chooseImage({
// 					count: 1, //默认9
// 					sizeType: ['compressed'], //可以指定是原图还是压缩图，默认二者都有
// 					success: function(res) {
// 						console.log(JSON.stringify(res));
// 						// 上传中禁止其他操作  
// 						_self.viewDisable = true;
// 						uni.showLoading({
// 							title: '照片上传中'
// 						});
// 						console.log('上传的res', res);
// 						const tempFilePaths = res.tempFilePaths;
// 						console.log('图片路径', tempFilePaths[0]);
// 						if (type == 1) {
// 							_self.imgfrontsrc = tempFilePaths[0];
// 						} else if (type == 2) {
// 							_self.imgbacksrc = tempFilePaths[0];
// 						}
// 						const uploadTask = uni.uploadFile({
//							// https://zhu.zhushang.net/
// 							url: global.host + '/Zhu/upload',
// 							filePath: tempFilePaths[0],
// 							name: 'file',
// 							formData: {
// 								'user': 'test'
// 							},
// 							success: function(uploadFileRes) {
// 								console.log('上传反馈', uploadFileRes);
// 								console.log('上传反馈的数据', JSON.parse(uploadFileRes.data));
// 								_self.viewDisable = false;
// 								uni.hideLoading();
// 								let uploadFileRes1 = JSON.parse(uploadFileRes.data);
// 								let imgurl = uploadFileRes1.msg;
// 								// 将正面的base64存到本地
// 								try {
// 									if (type == 1) {
// 										uni.setStorageSync('base64front', uploadFileRes1.base64);
// 										uni.setStorageSync('imgfront', imgurl);
// 									} else if (type == 2) {
// 										uni.setStorageSync('base64back', uploadFileRes1.base64);
// 										uni.setStorageSync('imgback', imgurl);
// 									}
// 								} catch (e) {
// 									// error
// 									console.log('error-base64front');
// 								}
// 
// 							}
// 						});
// 						uploadTask.onProgressUpdate(function(res) {
// 							_self.percent = res.progress;
// 							console.log('上传进度' + res.progress);
// 							console.log('已经上传的数据长度' + res.totalBytesSent);
// 							console.log('预期需要上传的数据总长度' + res.totalBytesExpectedToSend);
// 						});
// 					}
// 				});

			}
		},
		components: {
			showTips,
			photo,
			btn
		},
	}
</script>

<style scoped>
	.page {
		width: 100vw;
		height: 100%;
	}

	.page>text {
		margin-top: 40upx;
		line-height: 48upx;
		font-size: 34upx;
		font-family: "PingFangSC-Light";
		color: #333333;
	}

	.page>text+text {
		margin-top: 20upx;
		margin-bottom: 20upx;
		line-height: 40upx;
		font-size: 28upx;
		font-family: PingFangSC-Light;
		color: #0E8EFF;
	}
</style>
