<template>
	<view class="page flex-cnsc">
		<p class="fm-pfl flx42x30 col-3 boxf-t40 boxf-b30">信息核对</p>
		<ul class="boxf-l40 boxf-r40 border-1px-e5 flex-cnss">
			<block v-for="(item,index) in list" :key="index">
				<li class="flex-rnss border-bot-1px-s-e5">
					<p class="fm-pfr flx40x28 col-3 boxf-w140">{{item.title}}</p>
					<p class="fm-pfr flx40x28 col-8 boxf-w400">{{item.info}}</p>
				</li>
			</block>
		</ul>
		<view class="boxf-w750 flex-rncc boxf-t20">
			<image v-if="!cirControl" class="imgx35" :src="cir" mode="" @click="controlBotBtn"></image>
			<image v-if="cirControl" class="imgx35" :src="cirOk" mode="" @click="controlBotBtn"></image>
			<span class="fm-pfl flx40x28 col-3 boxf-l20">同意<span @click="watchAgreement">《浙江景宁筑商信息科技有限公司》的代办协议</span></span>
			
		</view>
		<bot-btn :botBtn="botBtn" @toClick="submit"></bot-btn>
	</view>
</template>

<script>
	import botBtn from "../../components/botButton.vue"
	export default{
		data(){
			return{
				cir:"../../static/img/icon/cir.png",
				cirOk:"../../static/img/icon/cir-ok.png",
				cirControl:false,
				botBtn:{
					res:true,
					resBtn:"确认",
					light:false
				},
				list:[
					{
						title:"姓名",
						info:"田昊"
					},
					{
						title:"身份证号",
						info:"188888199506088888"
					},
					{
						title:"联系方式",
						info:"18361272556"
					},
					{
						title:"申请名称",
						info:"景宁甄好服装网店"
					},
					{
						title:"登记地址",
						info:"浙江省丽水市景宁畲族自治县红星街道108号"
					},
					{
						title:"登记机关",
						info:"景宁畲族自治县市场监督管理局"
					},
					{
						title:"管辖单位",
						info:"景宁畲族自治县市场监督管理局"
					},
					{
						title:"经营范围",
						info:"网上销售：服装；鞋帽配饰；箱包；母婴用品及日用百货；化妆品及卫生用品（依法须经批准的项目，经相关部门批准后方可开展经营活动）"
					},
					{
						title:"主营业务",
						info:"服装零售"
					},
				]
			}
		},
		components:{
			botBtn
		},
		methods:{
			watchAgreement(){
				uni.navigateTo({
					url:'./agreement'
				})
			},
			controlBotBtn(){
				this.cirControl = !this.cirControl;
				this.botBtn.light = !this.botBtn.light;
			},
			submit(){
				
			}
		}
	}
</script>

<style scoped>
	.page{
		width: 100vw;
	}
	li{
		padding: 20upx 30upx 20upx 30upx;
	}
	span > span{
		color: #0E8EFF;
	}
</style>
