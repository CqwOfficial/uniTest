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
		
		<ul class="boxf-t20">
			<li class="border">
				<baseLine :line="taxInfo"></baseLine>
			</li>
			<li class="border">
				<baseLine :line="companyAddress"></baseLine>
			</li>
			<li class="border">
				<baseLine :line="companyTel"></baseLine>
			</li>
			<li class="border">
				<baseLine :line="bankInfo"></baseLine>
			</li>
			<li class="border">
				<baseLine :line="bankAccount"></baseLine>
			</li>
		</ul>
		
		<view class="boxf-t20">
			<btn :btn="btn" @confirm="goUploadPage"></btn>
		</view>
	</view>
</template>

<script>
	import common from "../../../../common/common.js"
	
	import invTable from "../../../../components/byInvoice/invoiceTable.vue"
	import invoiceSuggest from "../../../../components/byInvoice/invoiceSuggest.vue"
	import baseLine from "../../../../components/byInvoice/baseLine.vue"
	import pluralLine from "../../../../components/byInvoice/pluralLine.vue"
	import btn from "../../../../components/byAgency/btnTemplate.vue"
	export default {
		data() {
			return {
				suggest:{
					image:'../../static/img/other/wait-time.png',
					title:'发票待领取',
					text:'请携带以下材料到税务大厅进行办理'
				},
				materialInfo:{
					title:'所需材料',
					text:[
						{
							line:'1、发票章'
						},
						{
							line:'2、金税盘'
						},
						{
							line:'3、代理人身份证原件'
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
				taxInfo:{
					title:'税  号',
					text:'913100005930871127'
				},
				companyAddress:{
					title:'企业地址',
					text:'上海市虹口区欧阳路196号10号楼6层25室'
				},
				companyTel:{
					title:'企业电话',
					text:'02160443546'
				},
				bankInfo:{
					title:'开户银行',
					text:'中国农业银行股份有限公司上海复旦支行'
				},
				bankAccount:{
					title:'银行账户',
					text:'03485500040013444'
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
			btn,
			invTable
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
	}
	.border{
		border-bottom: 1px solid #E5E5E5;
	}
	.slot{
		float: right;
		color: #0E8EFF;
	}
</style>