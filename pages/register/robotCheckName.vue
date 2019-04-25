<template>
	<!-- 核名 -->
	<view class="page bgc-f">
		
		
		<view class="boxf-t100 boxf-w750 flex-cnsc"
			v-if="!pastName">
			<view class=" imgx120 boxf-b30">
				<image class="imgx120 an" src="../../static/img/icon/wait.png" mode=""></image>
			</view>
			<view class="fm-pfl flx56x40 col-3">正在查询名称是否可用</view>
			<view class="fm-pfl flx38x26 col-8 boxf-t10 boxf-b20">大约还需 {{seconds}} 秒，请不要关闭此页面</view>
		</view>
		
		<!-- 名称可用 情况下 显示 -->
		<block v-if="canTake">
			<view class="boxf-t100 boxf-w750 flex-cnsc border-bot-1px-s-e5"
				v-if="pastName">
				<view class=" imgx120 boxf-b30">
					<image class="imgx120" src="../../static/img/icon/ok.png" mode=""></image>
				</view>
				<view class="fm-pfl flx56x40 col-3">名称可用</view>
				<view class="fm-pfl flx38x26 col-8 boxf-t10 boxf-b20"> </view>
			</view>
			
			
			
			<view class="boxf-t20 boxf-w750 flex-cnsc"
				v-if="pastName">
				<view class="fm-pfl flx40x28 col-3 boxf-b20">温馨提示</view>
				<view class="boxf-w690 cir-10 bgc-f5 flex-cncs">
					<view class="fm-pfl flx40x28 col-3 boxf-t20 boxf-l60">1、名称还需人工审核，请以最后结果为准</view>
					<view class="fm-pfl flx40x28 col-3 boxf-t20 boxf-b20 boxf-l60">2、请在24小时内完成注册登记</view>
				</view>
			</view>
		</block>
		
		
		<!-- 名称不可用 情况下 显示 -->
		<block v-if="!canTake">
			<view class="boxf-t100 boxf-w750 flex-cnsc border-bot-1px-s-e5"
				v-if="pastName">
				<view class="imgx120 boxf-b30">
					<image class="imgx120" src="../../static/img/icon/oh.png" mode=""></image>
				</view>
				<view class="fm-pfl flx56x40 col-3">名称不可用</view>
				<view class="fm-pfl flx38x26 col-8 boxf-t10 boxf-b20">以下原因导致该名称不可用，请重新选取名称</view>
			</view>
			
			
			<view class="boxf-t20 boxf-w750 flex-cnsc"
				v-if="pastName">
				<view v-if="banReason" class="fm-pfl flx40x28 col-3 boxf-b20">含有禁用名称</view>
				<view v-if="banFont" class="fm-pfl flx40x28 col-3 boxf-b20">含有相同字号</view>
				<view v-if="banLike" class="fm-pfl flx40x28 col-3 boxf-b20">存在近似争议</view>
				<view v-if="banProtectFont" class="fm-pfl flx40x28 col-3 boxf-b20">含有保护字号</view>

				<ul class="flex-cnss" v-if="banReason">
					<block v-for="(item,index) in banList" :key="index">
						<li class="flex-rnss boxf-b20">
							<p class="fm-pfl flx38x26 col-3 boxf-w40">{{item.num}}</p>
							<p class="fm-pfl flx38x26 col-3 boxf-l10 boxf-w620">{{item.info}}</p>
						</li>
					</block>
				</ul>
				
				<ul class="flex-cnss" v-if="banFont">
					<li class="flex-rnss boxf-b20">
						<p class="fm-pfl flx38x26 col-3 boxf-w40">1、</p>
						<p class="fm-pfl flx38x26 col-3 boxf-l10 boxf-w620">与<span> {{backInfo.info}} </span>含有相同字号</p>
					</li>
				</ul>
				
				<ul class="flex-cnss" v-if="banLike">
					<li class="flex-rnss boxf-b20">
						<p class="fm-pfl flx38x26 col-3 boxf-w40">1、</p>
						<p class="fm-pfl flx38x26 col-3 boxf-l10 boxf-w620">您所申请的企业名称可能存在企业名称近似争议的风险，建议重新选择</p>
					</li>
				</ul>
				
				<ul class="flex-cnss" v-if="banProtectFont">
					<li class="flex-rnss boxf-b20">
						<p class="fm-pfl flx38x26 col-3 boxf-w40">1、</p>
						<p class="fm-pfl flx38x26 col-3 boxf-l10 boxf-w620"><span> {{backInfo.info}} </span>为保护字号</p>
					</li>
				</ul>
			</view>
			
		</block>
		
		
		
		<!-- 下方 按钮区 ！！常态隐藏 触发后替换上方 按钮区 -->
		<block v-if="canTake">
			<bot-btn class="bot" v-if="pastName" :botBtn="botBtn" @toClick="getBtnBack"></bot-btn>
		</block>
		
		<block v-if="!canTake">
			<bot-btn class="bot" v-if="pastName" :botBtn="botBtn2" @toClick="getBtnBack"></bot-btn>
		</block>
		
		
		
	</view>
</template>

<script>
	import botBtn from "../../components/botButton.vue"
	export default {
		data() {
			return {
				seconds : 1,
				banReason: false, // 控制 结果展示区 的 开关
				banFont: false,
				banLike: false,
				banProtectFont: false,
				pastName : false, // 用于控制 倒计时结束后 展示结果组件 的 显示 / 隐藏
				canTake: true ,// 用于控制 名称可用 / 名称不可用 时 展示不同的组件
				backInfo:{ //用于查询接口后，返回 并 控制 结果展示区 的数据
					switch:4, // switch 有4种控制类型 分别对应 ban？？ 的开关
					info:"哇哈哈"
				},
				botBtn: {
					res: true, // 显示上方按钮
					rej: true, // 显示下方按钮
					light:true, // 按钮高亮或者灰暗
					rejLight: false,
					resBtn: "开始注册登记",
					rejBtn: "重新核名"
				},
				botBtn2: {
					res: false, // 显示上方按钮
					rej: true, // 显示下方按钮
					rejLight:true, // 按钮高亮或者灰暗
					rejBtn: "重新核名"
				},
				banList:[
					{
						num:'1、',
						info:"损害国家利益、社会公共利益的；含有迷信、淫秽、暴力或者不符民族、宗教习俗等内容的；"
					},
					{
						num:'2、',
						info:"外国国家(地区)名称、国际组织名称；"
					},
					{
						num:'3、',
						info:"政党名称、党政军机关名称、群众组织名称、社会团体名称及部队番号；"
					},
					{
						num:'4、',
						info:"党和国家领导人姓名等；"
					},
					{
						num:'5、',
						info:"可能对公众造成欺骗，可能使公众产生误认、误解的；"
					},
					{
						num:'6、',
						info:"汉语拼音字母、阿拉伯数字；"
					},
					{
						num:'7、',
						info:"特定含义的数字汉字；"
					},
					{
						num:'8、',
						info:"明示或暗示有超越其经营范围的业务务；"
					},
				]
			}
		},
		components:{
			botBtn
		},
		onLoad() {
			this.countDown();
		},
		onReady(){
			this.banSwitch();
		},
		methods: {
			countDown(){
				let clock = setInterval(() => {
				  this.seconds--;
				  if(this.seconds == 0){
						clearInterval(clock);
						this.pastName = true;
					}
				},1000)
				
			},
			getBtnBack(n){
				if(n == false){
					uni.showModal({
						title:global.setCompName,
						content: "核名已通过，重新核名将删除该名称，每天有两次核名机会，是否继续？",
						success: (res) => {
							if(res.confirm){
								uni.navigateBack({
									 delta: 1
								})
							}
						}
					})
					
				}else if(n==true){
					uni.navigateTo({
						url:'./bindPhone'
					})
				}
			},
			banSwitch(){
				switch (this.backInfo.switch){
					case 1:
						this.banReason = true;
						break;
					case 2:
						this.banFont = true;
						break;
					case 3:
						this.banLike = true;
						break;
					case 4:
						this.banProtectFont = true;
						break;
					default:
						break;
				}
			}
		}
	}
</script>

<style scoped>
	.page{
		width: 100vw;
		height: 100%;
	}
	.bot{
		position: fixed;
		bottom: 0;
	}
	p>span{
		font-weight: 700;
		margin-left: 10upx;
		margin-right: 10upx;
	}
</style>
