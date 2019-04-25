<template>
	<view class="page flex-cnsc">
		<view class="fm-pfr flx56x40 col-3 boxf-t80">绑定手机号</view>
		<view class="boxf-t40 boxf-w670 boxf-h120 border-bot-1px-s-e5 flex-rnbc">
			<input class="boxf-t10 boxf-l30 fm-pfl flx40x28" 
					@input="inputing"
					type="text"
					value=""
					maxlength="11"
					v-model="telNum"
					placeholder="请输入手机号"
					placeholder-class= "fm-pfl flx40x28 col-8"/>
			<image @click="cleanTelNum" class="imgx40 boxf-r30" src="../../static/img/icon/del-tel.png" mode=""></image>
		</view>
		<view class=" boxf-w670 boxf-h120 border-bot-1px-s-e5 flex-rnbc">
			<input class="boxf-t10 boxf-l30 fm-pfl flx40x28"
					@input="checkName"
					type="text"
					maxlength="4"
					value=""
					v-model="verifCode"
					placeholder="请输入验证码"
					placeholder-class= "fm-pfl flx40x28 col-8"/>
			<view v-if="verifStyle" class="fm-pfl flx40x28 boxf-r30 hand" :class="verifCol" @click="getVerifCode">{{verifWords}}</view>
			<view v-if="!verifStyle" class="fm-pfl flx40x28 boxf-r30 col-8">获取验证码</view>
		</view>
		
		<bot-btn :botBtn="botBtn" @toClick="backThings"></bot-btn>
	</view>
</template>

<script>
	import botBtn from "../../components/botButton.vue"
	export default{
		data(){
			return{
				botBtn:{
					res:true,
					light:false,
					resBtn:"确定"
				},
				telNum:"", // 用户输入的手机号
				verifStyle:false, // 如果用户输入手机号有误，则不允许用户开启获得验证码的功能
				verifCode:"", // 用户输入的验证码
				backVerifCode:"", // 获取接口返回的验证码，用于和用户输入的进行比较
				verifWords:"获取验证码", // 根据状态不同，修改获取字体 内容
				verifCol:"col-0e8eff", // 根据状态的不同，修改 获取字体颜色
				verLock:false, // 禁止用户在倒计时期间点击获取验证码
				overdue:false, // 判断验证码是否过期 
				startTime:"", //判断过期用的时间戳
				endTime:"" //判断过期用的时间戳
			}
		},
		components:{
			botBtn
		},
		methods:{
			cleanTelNum(){
				console.log('1')
				this.telNum = "";
			},
			inputing(){
				if(this.telNum.length>=11){
					this.verifStyle = true;
				}else{
					this.verifStyle = false;
					this.botBtn.light = false;
				}
			},
			checkName(){
				// 如果接口返回的验证码和用户输入的一致，则点亮下方按钮
				
				
			},
			getVerifCode(){
				// 获取接口得到的验证码数据
				let i=61;
				this.backVerifCode = "1234";
				this.botBtn.light = true;
				
				if(this.verLock == false){
					this.verifCol = "col-8";
					this.verLock = true;
					this.startTime = Date.parse( new Date());
					var sec = setInterval(()=>{
						--i
						this.verifWords = `${i}秒后重新获取`;
						if(i<=0){
							clearInterval(sec)
							this.verifWords = "重新获取";
							this.verifCol = "col-0e8eff";
							this.verLock = false;
						}
					},1000)
				}else if(this.verLock == true){
					return
				}
				
				
			},
			backThings(){
				this.endTime = Date.parse( new Date());
				let t = (this.endTime-this.startTime)/1000;
				if(t>600){
					uni.showToast({
						title:"验证码过期",
						image:"../../static/img/icon/no.png"
					})
					return
				}
				
				if(this.verifCode == this.backVerifCode){
					uni.showToast({
						title:"绑定成功",
						image:"../../static/img/icon/ok.png",
						success: () => {
							uni.navigateTo({
								url:"./getIdCard"
							})
						}
					})
				}else{
					uni.showToast({
						title:"验证码错误",
						image:"../../static/img/icon/no.png"
					})
				}
				
			}
		}
	}
</script>

<style scoped>
	.page{width: 100vw; height: 100vh;}
</style>
