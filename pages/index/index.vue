<template>
	<view class="boxf-w750 bgc-f5">
		<button v-if="!isLogin" type="primary" class="get-user-info" open-type="getUserInfo" @click="getUserInfo">ss</button>
		<view class="boxf-b20 flex-cncc login-box">
			<index-login :userName="userName"></index-login>
		</view>
		
		<view class="boxf-b20">
			<index-decalre @applys="getThings"></index-decalre>
		</view>
		
		<view class="flex-cnsc bgc-f5" @click="linkToUrl">
			<index-card :things="things" :title="title" class="boxf-b20"></index-card>
			<index-card :things="things2" :title="title2" class="boxf-b20"></index-card>
			<index-card :things="things3" :title="title3" class="boxf-b20"></index-card>
		</view>
	</view>
</template>

<script>
	import indexLogin from "../../components/indexLogin.vue"
	import indexIcon from "../../components/indexIcon.vue"
	import indexCard from "../../components/indexCard.vue"
	import indexDecalre from "../../components/indexDeclare.vue"
	export default {
		data() {
			return {
				isLogin:false,
				userName: "登陆",
				title:'工商服务',
				title2:'财税服务',
				title3:'更多',
				things:[
					{
						src:"../static/img/index/business.png",
						bg:"bgc-f90",
						info:"营业执照"
					},
					{
						src:"../static/img/index/annual.png",
						bg:"bgc-1ee",
						info:"工商年报"
					},
					{
						src:"../static/img/index/cancel.png",
						bg:"bgc-f30",
						info:"注销/变更"
					}
				],
				things2:[
					{
						src:"../static/img/index/invoice.png",
						bg:"bgc-f80",
						info:"开发票"
					},
					{
						src:"../static/img/index/manage.png",
						bg:"bgc-4b8",
						info:"发票管理"
					},
					{
						src:"../static/img/index/declare.png",
						bg:"bgc-bf8",
						info:"纳税申报"
					}
				],
				things3:[
					{
						src:"../static/img/index/bank.png",
						bg:"bgc-0997f7",
						info:"银行开户"
					},
					{
						src:"../static/img/index/seal.png",
						bg:"bgc-f80",
						info:"公章管理"
					},
					{
						src:"../static/img/index/attendant.png",
						bg:"bgc-0997f7",
						info:"联系客服"
					}
				]
			}
		},
		methods: {
			getUserInfo:function(){
				// 这个方法里写登陆接口
				global.isLogin = true;
				this.isLogin = global.isLogin;
				console.log('get user info');
				this.userName = "田昊"
			},
			getThings(n){
				global.clickRegister = true;
				uni.setStorage({
					key:'indexClickRegister',
					data: true
				})
				
				uni.navigateTo({
					url: n
				});
			},
			linkToUrl(){
				if(global.clickRegister == false){
					uni.showModal({
						title:'提示',
						content:'您还未申请营业执照，点击确定开始申请',
						success: (res) => {
							if(res.confirm){
								uni.navigateTo({
									url: "../register/inputCdk"
								});
							}
						}
					})
				}else{
					return
				}
				
			}
			
		},
		components:{
			indexIcon,
			indexCard,
			indexDecalre,
			indexLogin
		}
	}
</script>

<style>
	.login-box{
		position: relative;
		width: 100vw;
		z-index: 100;
	}
	.login-box:before{
		position: absolute;
		top: 0;
		left: -7vw;
		content: " ";
		width: 114%;
		height: 100upx;
		border-radius: 0 0 100upx 100upx;
		background-color: #0E8EFF;
		z-index: -1;
	},
	.get-user-info{
		position: absolute;
		width: 100vw;
		height: 400upx;
		background-color: rgba(255,255,255,0)!important;
		z-index: 10000;
	}
</style>
