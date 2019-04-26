<template>
	<view class="cdk-page flex-cnsc">
		<view class="cdk-title fm-pfl flx56x40 col-3">输入邀请码</view>
		<ul class="cdk-keyboard flex-rnbc" >
			<li class="cdk-key imgx100 cir-10 border-1px-0e8eff fm-pfl flx70x56 col-3 txt-c boxf boxf-pt10"
				>{{one}}</li>
			<li class="cdk-key imgx100 cir-10 border-1px-0e8eff fm-pfl flx70x56 col-3 txt-c boxf boxf-pt10"
				>{{two}}</li>
			<li class="cdk-key imgx100 cir-10 border-1px-0e8eff fm-pfl flx70x56 col-3 txt-c boxf boxf-pt10"
				>{{three}}</li>
			<li class="cdk-key imgx100 cir-10 border-1px-0e8eff fm-pfl flx70x56 col-3 txt-c boxf boxf-pt10"
				>{{four}}</li>
			<li class="cdk-key imgx100 cir-10 border-1px-0e8eff fm-pfl flx70x56 col-3 txt-c boxf boxf-pt10"
				>{{five}}</li>
			<li class="cdk-key imgx100 cir-10 border-1px-0e8eff fm-pfl flx70x56 col-3 txt-c boxf boxf-pt10"
				>{{six}}</li>
		</ul>
		<view class="bot-tips flex-cnec">
			<span class="fm-pfl flx48x34 col-3 boxf-b20">当前为内测阶段</span>
			<span class="fm-pfl flx48x34 col-3 boxf-b20">请添加工作人员微信获取邀请码</span>
			<span class="fm-pfl flx48x34 col-3 boxf-b40">微信号：sunk333</span>
		</view>
		<view>
			<input class="input" @input="inputing" type="number" maxlength="6" value="" />
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				one:'',
				two:'',
				three:'',
				four:'',
				five:'',
				six:''
			}
		},
		computed:{
			
		},
		methods: {
			inputing(e){
				let n = e.target.value;
				if(n.length==6){
					if(n==724724){
						uni.showToast({
							title:"验证通过",
							image:"../../static/img/icon/ok.png",
							success: () => {
								uni.navigateTo({
									url:"./chooseTrade"
								})
							}
						})
					}else{
						uni.showToast({
							title:"邀请码无效",
							image:"../../static/img/icon/no.png"
							
						})
					}
				}
				this.one = n.substr(0,1);
				this.two = n.substr(1,1);
				this.three = n.substr(2,1);
				this.four = n.substr(3,1);
				this.five = n.substr(4,1);
				this.six = n.substr(5,1);
			}
		}
	}
</script>

<style scoped>
	.cdk-page{
		height: 100vh;
		width: 100vw;
	}
	.cdk-title{
		margin-top: 200upx;
		margin-bottom: 200upx;
		height: 56upx;
		width: 200upx;
	}
	.cdk-keyboard{
		width: 700upx;
	}
	.cdk-key{
		flex: 0 1 auto;
	}
	.bot-tips{
		position: fixed;
		bottom: 0;
	}
	.input{
		position: absolute;
		left: -750upx;
		top: 0;
		width: 1500upx;
		background-color: rgba(255,255,255,0);
		color: #FFFFFF;
		height: 700upx;
	}
</style>
