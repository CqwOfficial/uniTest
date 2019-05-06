<template>
	<view class="bgc-e5">
		<invoice-suggest :suggest="suggest"></invoice-suggest>
		<baseLine :line="reasonList"></baseLine>
		<ul class="boxf-t20">
			<li class="border">
				<baseLine :line="shopInfo">
					<slot>
						<image 
							@click="examine"
							class="rewrite" 
							src="../../../../static/img/other/write.png">
						</image>
					</slot>
				</baseLine>
			</li>
			<li>
				<baseLine :line="nameInfo">
					<slot>
						<image 
							@click="examinePhoto"
							class="rewrite" 
							src="../../../../static/img/other/write.png">
						</image>
					</slot>
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
			<li class="border"><baseLine :line="fileList[0]"></baseLine></li>
			<li class="border"><baseLine :line="fileList[1]"></baseLine></li>
			<li><baseLine :line="fileList[2]"></baseLine></li>
		</ul>
		<li class="boxf-t20">
			<btn :btn="btn"></btn>
		</li>
		
	</view>
</template>

<script>
	import { mapState, mapMutations } from 'vuex';
	import common from "../../../../common/common.js"
	
	import invoiceSuggest from "../../../../components/byInvoice/invoiceSuggest.vue"
	import baseLine from "../../../../components/byInvoice/baseLine.vue"
	import btn from "../../../../components/byAgency/btnTemplate.vue"
	
	export default {
		data() {
			return {
				userInfo:{},
				btn:{
					confirm:"重新提交"
				},
				suggest:{
					image:'../../static/img/icon/no.png',
					title:'被驳回',
					text:'请联系用户修改相应的信息后重新提交审核'
				},
				reasonList:{
					title:'驳回原因',
					text:'曾在2018年11月营业执照被吊销，已被列入工商黑名单'
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
				fileList:[
					{
						title:'通知文号',
						text:'(景工商)个体名预核字[2019]第004368号'
					},
					{
						title:'经营场所',
						text:'浙江省丽水市景宁畲族自治县红星街道惠民路82号五楼501-4'
					},
					{
						title:'经营范围',
						text:'网上销售：服装，鞋帽配饰，箱包，母婴用品及日用百货，化妆品及卫生用品（依法须经批准的项目，经相关部门批准后方可开展经营活动）'
					}
				]
			}
		},
		components:{
			invoiceSuggest,
			baseLine,
			btn
		},
		computed:{
			...mapState(['busUserInfo'])
		},
		onLoad:function(e){
			this.userInfo = e;
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
			examine(){
				console.log(this.busUserInfo)
				common.navigateTo("../../examine/examine")
				this.$store.commit('pushUserInfo',this.userInfo);
				console.log(this.busUserInfo)
			},
			examinePhoto(){
				common.navigateTo("../../examine/getIdCard")
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
			}
		}
	}
</script>

<style scoped>
	.border{
		border-bottom: 1px solid #E5E5E5;
	}
	.slot{
		float: right;
		color: #0E8EFF;
	}
	.rewrite{
		vertical-align: middle;
		margin-left: 20upx;
		width: 30upx;
		height: 30upx;
	}
</style>
