<template>
	<view class="bgc-e5 page">
		<invoice-suggest :suggest="suggest"></invoice-suggest>
		<ul class="boxf-t20">
			<li class="border"><pluralLine :line="materialInfo"></pluralLine></li>
		</ul>
		
		<ul class="boxf-t20">
			<li class="border">
				<baseLine :line="invTypeInfo"></baseLine>
			</li>
			<li class="border">
				<baseLine :line="invNumInfo"></baseLine>
			</li>
		</ul>
		
		<ul class="boxf-t20">
			<li class="border">
				<baseLine :line="shopInfo">
					<slot><text @click="showPhoto" class="slot">查看营业执照</text></slot>
				</baseLine>
			</li>
			<li>
				<baseLine :line="nameInfo">
					<slot><text @click="showPhoto" class="slot">查看身份证</text></slot>
				</baseLine>
			</li>
			<li>
				<baseLine :line="telInfo">
					<slot>
						<image @click="goTel" class="imgx35 slot" src="../../../../static/img/icon/tel2.png"></image>
					</slot>
				</baseLine>
			</li>
		</ul>
		
		<btn :btn="btn" @confirm="goUploadPage"></btn>
		
		
		
	</view>
</template>

<script>
	import common from "../../../../common/common.js"
	
	import invoiceSuggest from "../../../../components/byInvoice/invoiceSuggest.vue"
	import baseLine from "../../../../components/byInvoice/baseLine.vue"
	import pluralLine from "../../../../components/byInvoice/pluralLine.vue"
	import btn from "../../../../components/byAgency/btnTemplate.vue"
	export default {
		data() {
			return {
				suggest:{
					image:'../../static/img/other/wait-time.png',
					title:'税盘待领取',
					text:'请携带以下材料到税务大厅进行办理'
				},
				materialInfo:{
					title:'所需材料',
					text:[
						{
							line:'1、发票章'
						},
						{
							line:'2、代理人身份证原件'
						}
					]
				},
				invTypeInfo:{
					title:'发票类型',
					text:'增值税电子普通发票'
				},
				invNumInfo:{
					title:'领取数量',
					text:'25张 (单张额度： 10万元)'
				},
				shopInfo:{
					title:'名  称',
					text:''
				},
				nameInfo:{
					title:'姓  名',
					text:''
				},
				telInfo:{
					title:'联系方式',
					text:''
				},
				btn:{
					confirm:"确认领取"
				}
			}
		},
		components:{
			invoiceSuggest,
			baseLine,
			pluralLine,
			btn
		},
		onLoad:function(e){
			this.shopInfo.text = e.shop;
			this.nameInfo.text = e.name;
			this.telInfo.text = e.tel;
		},
		methods: {
			goTel(){
				console.log(this.telInfo.text);
				uni.makePhoneCall({
					phoneNumber: '114'
				});
			},
			showPhoto(){
				console.log('1')
				// 这里 要考虑一下是oss传过来图片，还是直接引用本地图片
				// uni.previewImage({
				// 	urls: '',
				// 	longPressActions: {
				// 	itemList: ['', ''],
				// 		success: function (res) {
				// 		}   
				// 	}
				// });
				uni.chooseImage({
					count: 2,
					sizeType: ['original', 'compressed'],
					sourceType: ['album'],
					success: function (res) {
						// 预览图片
						uni.previewImage({
							urls: res.tempFilePaths,
							longPressActions: {
							itemList: ['发送给朋友', '收藏'],
								success: function (res) {
									console.log('选中了第' + (res.tapIndex + 1) + '个按钮');
								},
								fail: function (res) {
									console.log(res.errMsg);
								}    
							}
						});
					}
				});
			},
			goUploadPage(){
				// 这里的逻辑应该是调接口 发送确认领取 的信息 然后返回上一页（销毁当前页）
				uni.redirectTo({
					url: '../index'
				});
			}
		}
	}
</script>

<style scoped>
	.page{
		height: 100vh;
	}
	.border{
		border-bottom: 1px solid #E5E5E5;
	}
	.slot{
		float: right;
		color: #0E8EFF;
	}
</style>