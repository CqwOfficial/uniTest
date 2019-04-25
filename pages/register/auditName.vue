<template>
	<view class="page flex-cnsc">
		<image class="imgx120 boxf-t100" src="../../static/img/icon/comp.png" mode=""></image>
		
		<view class="boxf-t30 flex-rnbc">
			<span class="fm-pfr flx46x32 col-3">景宁</span>
			<span class="fm-pfr flx46x32 col-3 boxf-l10">(字号)</span>
			<span class="fm-pfr flx46x32 col-3 boxf-l20">(店铺后缀)</span>
		</view>
	

		
		<view class="boxf-w720 boxf-h100 boxf-t70 boxf-l30 border-bot-1px-s-e5 border-top-1px-s-e5 flex-rnsc">
			<view class="boxf-w140 boxf-h80 txt-jus fm-pfl flx80x34 col-3">行政区划<span class="jus"></span></view>
			<view class="boxf-w520 boxf-l30 boxf-h40 fm-pfl flx40x28 col-3">景宁</view>
		</view>
		
		<view class="boxf-w720 boxf-h100 boxf-l30 border-bot-1px-s-e5 flex-rnsc">
			<view class="boxf-w140 boxf-h80 txt-jus fm-pfl flx80x34 col-3">字号<span class="jus"></span></view>
			<view class="boxf-w520 boxf-l30 boxf-h40 fm-pfl flx40x28 col-3">
				
				<input class="boxf-t5-n" 
					@input="inputing"
					@blur="checkName"
					type="text"
					value="" 
					placeholder="店铺名称，2~4个简体汉字"
					placeholder-class= "fm-pfl flx40x28 col-8"/>
			</view>
		</view>
		
		<view class="boxf-w720 boxf-h100 boxf-l30 border-bot-1px-s-e5 border-bot-1px-s-e5 flex-rnsc">
			<view class="boxf-w140 boxf-h80 txt-jus fm-pfl flx80x34 col-3">店铺后缀<span class="jus"></span></view>
			<view class="boxf-w520 boxf-l30 flex-rnsc boxf-h80">
				
					<picker class="fm-pfl flx40x28 col-3"
						mode="multiSelector"
						@click="picking"
						@columnchange="changePickData" 
						:value="arrIndex" 
						:range="arr">
						<view v-if="!pickerSwitch" @click="createPick" class="fm-pfl flx40x28 col-8">点击选择店铺后缀</view>
						<view
							v-if="pickerSwitch"
							class="fm-pfl flx40x28 col-3">{{arr[0][arrIndex[0]]}}{{arr[1][arrIndex[1]]}}</view>
					</picker>
				
			</view>
		</view>
		
	
		
		<!-- 下方 按钮区 -->
		<view class="boxf-w750 boxf-t100"
			v-if="!iframeOK || !fontSwitch">
			<view class="cir-10 boxf-w690 boxf-h100 boxf-l30 bgc-f col-e5 border-1px-e5 flex-cncc">
				<view class="fm-pfs flx50x36 col-e5">开始核名</view>
			</view>
		</view>
		
		<view class="boxf-w750 boxf-t100"
			v-if="iframeOK && fontSwitch"
			@click="createCheckName">
			<view class="cir-10 boxf-w690 boxf-h100 boxf-l30 bgc-0e8eff col-f border-1px-0e8eff flex-cncc">
				<view class="fm-pfs flx50x36 col-f">开始核名</view>
			</view>
		</view>
		
		<view class="tips boxf-t100 flex-cnsc" v-if="showTips">
			<view class="tips-block flex-cnss cir-10 ">
				<span class="fm-pfl flx42x30 col-3 flex-c boxf-b20">名称不可用</span>
				<span class="fm-pfl flx40x28 col-3 boxf-b20">1、字号应为2~4个简体汉字</span>
				<span class="fm-pfl flx40x28 col-3 boxf-b20">1、字号应为2~4个简体汉字</span>
				<span class="fm-pfl flx40x28 col-3 boxf-b20">3、不能含有受保护的品牌词汇</span>
				<span class="fm-pfl flx40x28 col-3 boxf-b20">4、不能含有暴力、恐怖、色情词汇</span>
				<span class="fm-pfl flx40x28 col-3 boxf-b20">5、不能含有国家领导人、历史名人姓名</span>
				<span class="fm-pfl flx40x28 col-3 boxf-b20">6、不能含有国家、地区、国际组织名称</span>
			</view>
			<view class="tips-btn" >
				<image @click="closeTips" class="imgx60 boxf-t30" src="../../static/img/icon/no.png" mode=""></image>
			</view>
			
		</view>
		<view class="tips-bg" v-if="showTips"></view>
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				shopName: '', // 店铺字号
				shopTitle: '', // 店铺后缀
				showTips:false, // 检测到违规词后弹出
				beforeName: '食品', // changePickData 内 拼接店铺后缀 的 前半部分
				afterName: '店', // changePickData 内 拼接店铺后缀 的 后半部分
				pickerSwitch: false, // 控制 是否 开启 pick 选择器
				fontSwitch: false,
				iframeOK: false, // 需要先填完 上方表单信息，才能改变按钮样式
				btnLock1: false, // 控制 页面底部按钮区 变化 lock1+lock2都为true时，改变底部按钮
				btnLock2: false, // 控制 页面底部按钮区 变化
				arrIndex: [0, 0],
				arr: [
					['食品', '零售'],
					['店', '公司', '铺子', '屋']
				],
				time:0
			}
		},
		onReady() {
		},
		methods: {
			checkName(e){
				let _name = e.target.value;
				let reg = /^[\u4E00-\u9FA5]{2,4}$/;
				console.log(reg.test(_name),'fff')
				if(reg.test(_name) == false){
					uni.showToast({
						title: `店铺名称需为中文, 名称字数为2～4个`,
						icon: 'none',
						duration: 1000
					});
				}else{
					this.fontSwitch = true;
				}
			},
			inputing(e){
				let _name = e.target.value;
				_name.length >=2 ? this.btnLock1=true:this.btnLock1=false;
				
				if(_name){
					
					this.shopName = _name;
				}else{
					uni.showToast({
						title: '请输入店铺名称',
						icon: 'none',
						duration: 1000
					});
				}
				if(this.btnLock2 == true && this.btnLock1==true){
					this.iframeOK = true;
				}else{
					this.iframeOK = false;
				}
			},
			picking(){
				this.btnLock2 = true;
				this.shopTitle = "食品店"; // 如果 changePickData方法执行，那么该方法会将此处值替换
				if(this.btnLock1 == true){
					this.iframeOK = true;
				}
			},
			createPick(){
				this.pickerSwitch = !this.pickerSwitch;
				console.log(this.pickerSwitch)
			},
			createCheckName(){
				// console.log(this.shopName);
				// console.log(this.shopTitle)
				var _this = this;
				global.setCompName = this.shopName+this.shopTitle+"";
				var g = new Date().getDate();
				
				// 先判断有没有 time，如果有，则赋给本地 如果没有，则添加
				uni.getStorage({
					key: 'time',
					success: (res) => {
						_this.time = res.data;
					},
					fail: () => {
						uni.setStorage({
							key:'time',
							data: _this.time
						})
					}
				})
				
				uni.getStorage({
					key: 'date',
					success: (res) => {
						uni.getStorage({
							key:'time',
							success: (res1) => {
								if(res1.data<2){
									uni.showModal({
										title: '提示',
										content: '每天只有 2 次核名机会',
										success: (res2) => {
											if (res2.confirm) {
												++_this.time;
												uni.setStorage({
													key: 'time',
													data: _this.time
												});
												uni.setStorage({
													key: 'date',
													data:g
												});
												uni.showLoading({
													title: "字号检查中",
													success: ()=>{
														// 调个接口查违规词
														// uni.request({
														// 	success: (res3) => {
																// 接口没有，判断就注释掉了
																uni.hideLoading();
																// if(res3.data==false){
																	// _this.showTips = true; // 如果 违规词接口判断返回 false，则认为不通过，弹出提示
																// }else{
																	// 否则 通过并跳转到下一阶段
																	uni.navigateTo({
																		url: './robotCheckName'
																	})
																// }
																
														// 	}
														// })
													}
												})
											} else if (res2.cancel) {
												console.log('用户点击取消');
											}
										}
									})
								}else if(res1.data>=2){
									uni.showModal({
										title: '提示',
										content: '今天两次核名机会已用完',
										showCancel:false
									});
								}
							}
						})
					},
					fail: (res) => {
						// 如果没有 date，添加今日 date
						uni.setStorage({
							key: 'date',
							data: g,
							success: () => {
								uni.showModal({
									title: '提示',
									content: '每天只有 2 次核名机会',
									success: () => {
										if (res.confirm) {
											++_this.time;
											uni.setStorage({
												key: 'time',
												data: _this.time
											});
											uni.showLoading({
												title: "字号检查中",
												success: ()=>{
													// 调个接口查违规词
													// uni.request({
													// 	success: (res3) => {
															// 接口没有，判断就注释掉了
															uni.hideLoading();
															// if(res3.data==false){
																// _this.showTips = true; // 如果 违规词接口判断返回 false，则认为不通过，弹出提示
															// }else{
																// 否则 通过并跳转到下一阶段
																uni.navigateTo({
																	url: './robotCheckName'
																})
															// }
															
													// 	}
													// })
												}
											})
										} else if (res.cancel) {
											console.log('用户点击取消');
										}
									}
								})
							}
						})
					}
				})
			},
			changePickData: function(e) {
				// console.log('修改的列为：' + e.detail.column + '，值为：' + e.detail.value)
				let col = e.detail.column;
				let row = e.detail.value;
				
				this.arrIndex[e.detail.column] = e.detail.value;
				
				if(col==0){this.beforeName = `${this.arr[0][row]}`;};
				if(col==1){this.afterName = `${this.arr[1][row]}`;};
				this.shopTitle = this.beforeName + this.afterName;
				console.log(this.shopTitle)
				
				this.$forceUpdate(); // picker选择器店数据不会自动更新 必须使用强制刷新
			},
			closeTips:function(){
				this.showTips = false;
			}
		}
	}
</script>

<style scoped>
	.page{
		width: 100vw;
		height: 100%;
	}
	.tips{
		position: absolute;
		z-index: 1100;
		
	}
	.tips-block{
		position: relative;
		width: 510upx;
		height: 770upx;
		padding: 30upx 40upx 0 40upx;
		background-color: #FFFFFF;
		z-index: 1200;
	}
	.flex-c{align-self:center}
	.tips-btn{
		position: relative;
		z-index: 1200;
	}
	.tips-bg{
		position: absolute;
		height: 100vh;
		width: 100vw;
		background-color: rgba(0,0,0,0.5);
		z-index: 1000;
	}
</style>
