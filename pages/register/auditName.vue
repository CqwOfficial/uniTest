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
					placeholder-class= "font-3 placeholder-s"/>
			</view>
		</view>
		
		<view class="boxf-w720 boxf-h100 boxf-l30 border-bot-1px-s-e5 border-bot-1px-s-e5 flex-rnsc">
			<view class="boxf-w140 boxf-h80 txt-jus fm-pfl flx80x34 col-3">店铺后缀<span class="jus"></span></view>
			<view class="boxf-w520 boxf-l30 flex-rnsc boxf-h80">
				
					<picker class="pick pick-repair "
						mode="multiSelector"
						@click="picking"
						@columnchange="changePickData" 
						:value="arrIndex" 
						:range="arr">
						<view v-if="!pickerSwitch" @click="createPick" class="font-1">点击选择店铺后缀</view>
						<view
							v-if="pickerSwitch"
							class="font-1 pick-view">{{arr[0][arrIndex[0]]}}{{arr[1][arrIndex[1]]}}</view>
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
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				shopName: '', // 店铺字号
				shopTitle: '', // 店铺后缀
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
				
				var g = new Date().getDate();
				uni.getStorage({
					key: 'date',
					success: (res) => {
						if(res.data != g){
							uni.showModal({
								title: '提示',
								content: '今天两次核名机会已用完',
								showCancel:false
							});
						}
					},
					fail:(res)=>{
						uni.setStorage({
							key: 'date',
							data: g
						});
					}
				})
				
				
				uni.getStorage({
					key: 'time',
					success: function (res) {
						_this.time = res.data;
						if(res.data>=2){
							uni.showModal({
								title: '提示',
								content: '今天两次核名机会已用完',
								showCancel:false
							});
						}else if(res.data<2){
							++_this.time;
							uni.showModal({
								title: '提示',
								content: '每天只有 2 次核名机会',
								success: function (res) {
									if (res.confirm) {
										uni.setStorage({
											key: 'time',
											data: _this.time
										});
										uni.showLoading({
											title: "字号检查中",
											success: ()=>{
												setTimeout(function () {
													uni.hideLoading();
												}, 2000);
											}
										})
									} else if (res.cancel) {
										console.log('用户点击取消');
									}
								}
							});
						}
					}
				});
				
				
				
				
				
				
				
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
		}
	}
</script>

<style scoped>
	.page{
		width: 100vw;
		height: 100%;
	}
	
	/* box与interval 的命名在后续会统一，
	* interval 针对最外层容器设置距离
	* box 针对内部容器调整距离 */
	.interval{ margin-top: 20upx; }  /* 每个下方的 info块 与 上方块 的 间距 */
	.interval-l { margin-left: 40upx;}
	.interval-r { margin-right: 40upx;}
	
	.box-r{ margin-right: 20upx;}
	.box-b-70{ margin-bottom: 70upx;}
	.box-tttt{ margin-top: 100upx;}
	
	.title-lock{ height: 48upx; } /* 用于 在 单行状态下 锁死 title 块高 */
	.border-1px{
		border: 1upx solid #000000;
	}
	
	.input-repair{ margin-top: -5upx;} /* 修复单行状态下 子元素为 input标签时 高度偏移的问题 */
	.pick-repair{ margin-top: 4upx;}
	.pick-nrepair{ margin-top: -8upx;}
	/* 单独颜色 */
	.col-0E8EFF{ color: #0E8EFF; }
	.col-FFF{ color: #FFFFFF;}
	.col-ccc{ color: #CCCCCC;}
	.bg-col-0E8EFF{ background-color: #0E8EFF;}
	.bg-col-FFF { background-color: #FFFFFF; border: 1px solid #cccccc;}
	
	
	/* input > placeholder 样式 */
	.placeholder-s{line-height: 40upx; font-size: 28upx;}
	
	/* 单独图片大小 */
	.img-s{ width: 35upx; height: 35upx; }
	
	.line {
		font-size: 0;
		height: 0upx;
		width: 30upx;
		border: 2upx solid #FFFFFF;
	}
	/*  font 用于设置字体样式 */
	.font-1{
		font-family: "PingFangSC-Light";
		color: #333;
	}
	.font-2{
		font-family: "PingFangSC-Light";
		color: #888;
	}
	.font-3{
		font-family: "PingFangSC-Light";
		color: #CCC;
	}
	.font-4{
		font-family: "PingFangSC-Light";
		color: #FFFFFF;
	}
	
	/*  both-end 用于行内文字两端对齐 */
	.justify-box{ text-align: justify; }
	.justify{ display: inline-block; width: 100%;}
	
	/* tips 信息提示 部分 */
	.tips {
		display: flex;
		flex-flow: column nowrap;
		justify-content: flex-start;
		align-items: center;
		width: 100vw;
		background-color: #FFFFFF;
	}
	.tips-image-box{
		display: flex;
		flex-flow: column nowrap;
		justify-content: flex-end;
		align-items: center;
		height: 220upx;
		width: 100%;
	}
	.tips-image{
		height: 120upx;
		width: 120upx;
	}
	.tips-info{
		margin-top: 32upx;
		line-height: 56upx;
		font-size: 40upx;
	}
	.tips-block{ /* 暂定 block 为 高度 45 && 拥有子元素 的 tips区内 的 元素 */
		margin-top: 36upx;
		line-height: 45upx;
		font-size: 32upx;
		display: flex;
		flex-flow: row nowrap; 
		justify-content: center;
		align-items: center;
	}
	.tips-suggest{
		margin-top: 10upx;
		margin-bottom: 40upx;
		line-height: 37upx;
		font-size: 26upx;
	}
	
	/* info 内容块 部分 */
	.info{
		display: flex;
		flex-flow: row nowrap;
		justify-content: center;
		align-items: center;
		width: 100vw;
		background-color: #FFFFFF;
	}
	.info1{
		display: flex;
		flex-flow: row nowrap;
		justify-content: center;
		align-items: center;
		height: 1upx;
		width: 90vw;
		background-color: #E5E5E5;
	}
	.info-container{
		display: flex;
		flex-flow: row nowrap;
		justify-content: flex-start;
		align-items: flex-start;
		margin-top: 30upx;
		margin-bottom: 30upx;
		width: 690upx;
	}
	.info-title-box{
		min-width: 136upx;
	}
	.info-title{
		font-size: 34upx;
		line-height: 48upx;
	}
	.info-main-box{
		margin-left: 30upx;
		line-height: 48upx;
		font-size: 34upx;
	}
	.info-line{
		margin-top: 4upx; /* 因为 title块 的高度 和 line 的高度不一致 所以 line块 要增加差值高度 */
		min-width: 524upx;
		font-size: 28upx;
		line-height: 40upx;
	}
	.info-line-between { /* 用于 info-line 内部为 2个 两端对齐元素时 的样式 */
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
		align-items: center;
		margin-top: 4upx; /* 因为 title块 的高度 和 line 的高度不一致 所以 line块 要增加差值高度 */
		min-width: 524upx;
	}
	.info-line-block {
		font-size: 28upx;
		line-height: 40upx;
	}
	
	/* bot 常驻下方 按钮 */
	.bot {
		position: fixed;
		bottom: 0;
		height: 154upx;
	}
	.bot-btn{
		display: flex;
		justify-content: center;
		align-items: center;
		height: 94upx;
		width: 670upx;
		border-radius: 10upx;
	}
	.bot-half-btn{
		display: flex;
		justify-content: center;
		align-items: center;
		height: 94upx;
		width: 315upx;
		border-radius: 10upx;
	}
	.bot-title{
		height: 50upx;
		line-height: 50upx;
		font-size: 36upx;
	}
	
	/* pick 独立样式 */
	.pick{
		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		align-items: flex-start;
		line-height: 40upx;
		font-size: 28upx;
		color: #333333;
	}
	.pick-view{
		width: 300upx;
	}
</style>
