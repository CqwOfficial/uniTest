<template>
	<view class="body-view">
		<!-- bar -->
		<scroll-view class="top-menu-view" scroll-x="true" :scroll-left="scrollLeft">
			<block v-for="(menuTab,index) in menuTabs" :key="index">
				<view :class="barBtnW" class="menu-one-view " :id="'tabNum'+index" @click="swichMenu(index)">
					<view :class="[currentTab==index ? 'menu-one-act' : 'menu-one']">
						<view class="menu-one-txt box-el-bar-type-s">{{menuTab.name}}</view>
						<view class="menu-one-bottom">
							<view class="menu-one-bottom-color"></view>
						</view>
					</view>
				</view>
			</block>
		</scroll-view>
		<!-- main -->
		<swiper 
			class="swiper-box-list" duration="300"
			:current="currentTab" 
			@change="swiperChange"
			 >
			<block>
				
				<!-- 待审核 界面 -->
				<swiper-item>
					<view class="boxf-t20">
						<block v-for="(item,i) in waitList" :key="i">
							<swiper-box :box="item" @navi="naviWait"></swiper-box>
						</block>
					</view>
					
				</swiper-item>
				
				<!-- 被驳回 界面 -->
				<swiper-item>
					<view class="boxf-t20">
						<block v-for="(item,i) in noList" :key="i">
							<swiper-box :box="item" @navi="naviNo"></swiper-box>
						</block>
					</view>
				</swiper-item>				
				
				<!-- 已通过 界面 -->
				<swiper-item>
					<view class="boxf-t20">
						<block v-for="(item,i) in okList" :key="i">
							<swiper-box :box="item" @navi="naviOk">
								<slot>
									<view class="border-top-1px-d-e5">
										<btn :btn="btn"></btn>
									</view>
								</slot>
							</swiper-box>
						</block>
					</view>
				</swiper-item>				
				
				<!-- 已办结 界面 -->
				<swiper-item>
					<view class="boxf-t20">
						<block v-for="(item,i) in endList" :key="i">
							<swiper-box :box="item" @navi="naviEnd"></swiper-box>
						</block>
					</view>
				</swiper-item>				
				
			</block>
		</swiper>
	</view>
</template>


<script>
	import common from "../../../common/common.js"
	
	import swiperBox from "../../../components/byAgency/swiperBox.vue"
	import btn from "../../../components/byAgency/swiperBtn.vue"
	export default {
		
		data() {
			return {
				btnWidth: 4, // 控制 顶部 bar > button 的宽度
				scrollLeft: 0,
				isClickChange: false,
				currentTab: 0,
				menuTabs: [
					{name: '待审核'}, 
					{name: '被驳回'}, 
					{name: '已通过'},
					{name: '已办结'}
				],
				swiperDateList: [[],[],[],[]],
				waitList:[
					{
						time:"待审核已持续 1 小时 30 分",
						tel:"18361272556",
						shop:"景宁泽宇食品店",
						name:"张姗"
					},
					{
						time:"待审核已持续 1 小时 30 分",
						tel:"18361272556",
						shop:"景宁新氧美学食品店",
						name:"王海东"
					},
					{
						time:"待审核已持续 1 小时 30 分",
						tel:"18361272556",
						shop:"景宁百分百食品店",
						name:"王京"
					},
				],
				endList:[
					{
						time:"已办结 1 小时 30 分",
						tel:"18361272556",
						shop:"景宁泽宇食品店",
						name:"张姗"
					},
					{
						time:"已办结 1 小时 30 分",
						tel:"18361272556",
						shop:"景宁百分百食品店",
						name:"王京"
					},
				],
				noList:[
					{
						time:"被驳回 1 小时 30 分",
						tel:"18361272556",
						shop:"景宁泽宇食品店",
						name:"张姗"
					},
					{
						time:"被驳回 1 小时 30 分",
						tel:"18361272556",
						shop:"景宁新氧美学食品店",
						name:"王海东"
					},
					{
						time:"被驳回 1 小时 30 分",
						tel:"18361272556",
						shop:"景宁百分百食品店",
						name:"王京"
					}
				],
				okList:[
					{
						time:"已通过 1 小时 30 分",
						tel:"18361272556",
						shop:"景宁泽宇食品店",
						name:"张姗"
					},
					{
						time:"已通过 1 小时 30 分",
						tel:"18361272556",
						shop:"景宁新氧美学食品店",
						name:"王海东"
					},
					{
						time:"已通过 1 小时 30 分",
						tel:"18361272556",
						shop:"景宁百分百食品店",
						name:"王京"
					}
				],
				btn:{
					confirm:'打印材料'
				}
				
			}
		},
		components:{
			swiperBox,
			btn
		},
		onLoad: function() {
			//初始化数据
			
		},
		computed: {
			barBtnW(){ // 控制 上方 bar 的每一个按钮宽度， 默认为：屏幕宽度的33.3%
				switch (this.btnWidth){
					case 3:
						return "btn-w3"
						break;
					case 4:
						return "btn-w4"
						break;
					case 5:
						return "btn-w5"
						break;
					default:
						return "btn-w3"
						break;
				}
			}
			
		},
		methods: {
			swichMenu: async function(current) { //点击其中一个 menu
				if (this.currentTab == current) {
					return false;
				} else {
					this.currentTab = current;
					this.setScrollLeft(current);
				}
			},
			swiperChange: async function(e) {
				let index = e.target.current;
				this.setScrollLeft(index);
				this.currentTab = index;
			},
			setScrollLeft: async function(tabIndex) {
				let leftWidthSum = 0;
				for (var i = 0; i <= tabIndex; i++) {
					let nowElement = await this.getWidth('tabNum' + i);
					leftWidthSum = leftWidthSum + nowElement.width;
				}
				let winWidth = uni.getSystemInfoSync().windowWidth;
				this.scrollLeft = leftWidthSum > winWidth ? (leftWidthSum - winWidth) : 0
			},
			getWidth: function(id) { //得到元素的宽高
				return new Promise((res, rej) => {
					uni.createSelectorQuery().select("#" + id).fields({
						size: true,
						scrollOffset: true
					}, (data) => {
						res(data);
					}).exec();
				})
			},
			naviWait(n){
				let c = "./wait/wait";
				let f = `?tel=${n.tel}&name=${n.name}&shop=${n.shop}`;
				c = c+f;
				common.navigateTo(c)
			},
			naviNo(n){
				let c = "./no/no";
				let f = `?tel=${n.tel}&name=${n.name}&shop=${n.shop}`;
				c = c+f;
				common.navigateTo(c)
			}
			

		}
	}
</script>
<style>
	.btn-w3{ width: 33.3%; /*三等分tab宽度*/ }
	.btn-w4{ width: 25%; /*4等分tab宽度*/ }
	.btn-w5{ width: 20%; /*5等分tab宽度*/ }
	.box-el-bar-type-s{ line-height: 48upx!important; font-size: 34upx!important;} /* 控制上方 拽动选择器 字体大小 */
	
	page {
		width: 100%;
		height: 100%;
		display: flex;
		flex-wrap: wrap;
		align-items: flex-start;
		justify-content: center;
		background: rgba(249, 249, 249, 1);
	}

	.body-view {
		display: flex;
		flex: 1;
		flex-direction: column;
		overflow: hidden;
		height: 100%;
		width: 100%;
		align-items: flex-start;
		justify-content: center;
	}

	.top-menu-view {
		display: flex;
		white-space: nowrap;
		width: 100%;
		background-color: #FFFFFF;
		height: 112upx;
		/* 在这里设置导航条高度 */
	}

	.top-menu-view .menu-one-view {
		display: inline-block;
		white-space: nowrap;
		height: 100%;
	}

	.top-menu-view .menu-one-view .menu-one {
		/* 在这里写 单个按钮样式 */
		margin-left: 25upx;
		margin-right: 25upx;
		position: relative;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.top-menu-view .menu-one-view .menu-one .menu-one-txt {
		height: 40upx;
		font-size: 28upx;
		font-weight: 400;
		color: rgba(154, 154, 154, 1);
		line-height: 40upx;
	}

	.top-menu-view .menu-one-view .menu-one .menu-one-bottom {
		position: absolute;
		bottom: 0;
		width: 100%;
	}

	.top-menu-view .menu-one-view .menu-one .menu-one-bottom .menu-one-bottom-color {
		width: 60%;
		height: 4upx;
	}

	.top-menu-view .menu-one-view .menu-one-act {
		/* 在这里写 单个按钮样式 */
		margin-left: 25upx;
		margin-right: 25upx;
		
		position: relative;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.top-menu-view .menu-one-view .menu-one-act .menu-one-txt {
		height: 40upx;
		font-size: 28upx;
		font-weight: 400;
		color: rgba(0, 170, 255, 1);
		line-height: 40upx;
	}

	.top-menu-view .menu-one-view .menu-one-act .menu-one-bottom {
		position: absolute;
		bottom: 0;
		width: 100%;
		display: flex;
		justify-content: center;
	}

	.top-menu-view .menu-one-view .menu-one-act .menu-one-bottom .menu-one-bottom-color {
		width: 60%;
		height: 4upx;
		background: rgba(0, 170, 255, 1);
	}

	.swiper-box-list {
		flex: 1;
		width: 100%;
		height: auto;
		background-color: #F5F5F5;
	}
	
	/* swiper 主展示页面 样式 */
	
	.box-t {margin-top: 20upx;}
	.box-tt { margin-top: 10upx;}
	
	/* 为不同的 box-block设置独立高度 宽度 */
	.block-h1{ height: 80upx;}
	.block-h2{ height: 112upx;}
	.block-h3{ height: 134upx;}
	.block-h4{ height: 73upx;}
	.block-h5{ height: 68upx;}
	.block-h6{ height: 54upx;}
	
	.block-w1{ width: 718upx;} /* 全贴合 */
	.block-w2{ width: 658upx;} /* 左右间隔 30upx */
	
	.line-l{ margin-left: 30upx;}
	.line-r{ margin-right: 30upx;}
	
	.el-l{ margin-left: 12upx;}
	.el-r{ margin-right: 12upx;}
	
	.font-1{ font-family: "PingFangSC-Light"; color: #333333; }
	.font-2{ font-family: "PingFangSC-Regular"; color: #333333; }
	.font-3{ font-family: "PingFangSC-Semibold"; color: #FFFFFF;}
	
	.img-s{ width: 35upx; height: 35upx;}
	.img-ss{ width: 50upx; height: 50upx;}
	
	.btn-type-1{ border-radius: 10upx; background-color: #0E8EFF; text-align: center;}
	.btn-type-2{ border-radius: 10upx; background-color: #FFFFFF; border: 1px solid #333333; text-align: center;}
	
	.border-1px-0E8EFF{ border: 1px solid #0E8EFF;}
	.border-bottom-1px-d{ border-bottom: 1px dashed #E5E5E5; }
	.border-top-1px-d{ border-top: 1px dashed #E5E5E5; }
	
	/* 在需要设置 发票装饰 时, 在 box 同级 class 下 添加 box-inv-type (盒-发票-装饰) */
	.box-inv-type{ position: relative; }
	.box-inv-type:before {
		position: absolute;
		content: "";
		top: 120upx; left: -1px;
		height: 20upx; width: 10upx;
		border-radius: 0upx 10upx 10upx 0upx;
		background: #F5F5F5;
		border-left: 1px solid #F5F5F5;
		border-right: 1px solid #75BEFF;
		border-top: 1px solid #75BEFF;
		border-bottom: 1px solid #75BEFF;
	}
	.box-inv-type:after {
		position: absolute;
		content: "";
		top: 120upx; left: 706upx;
		height: 20upx; width: 10upx;
		border-radius: 10upx 0upx 0upx 10upx;
		background: #F5F5F5;
		border-right: 1px solid #F5F5F5;
		border-left: 1px solid #75BEFF;
		border-top: 1px solid #75BEFF;
		border-bottom: 1px solid #75BEFF;
	}
	
	
	/* swiper 固定模块 样式 */
	.main{
		margin-top: 20upx;
		margin-left: 16upx;
		margin-right: 16upx;
		display: flex;
		flex-flow: column nowrap;
		justify-content: flex-start;
		align-items: center;
	}
	.box{
		width: 718upx; /* 每个 盒模块 的 固定宽度 */
		display: flex;
		flex-flow: column nowrap;
		justify-content: flex-start;
		align-items: center;
		background-color: #FFFFFF;
	}
	.box-block{ /* 每个 block 行模块 */
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between; /* 行模块 固定为 两端对齐布局 */
		align-items: center;
	}
	.box-btn-block{ /*  btn-block 独立设置 行模块 */
		display: flex;
		flex-flow: row nowrap;
		justify-content: center; /* 行模块 固定为 两端对齐布局 */
		align-items: center;
	}
	
	.box-line-l{ /* 每个 行内 line 模块 l=flex-start r=flex-end */
		display: flex;
		flex-flow: row nowrap;
		justify-content: flex-start;
		align-items: center;
	}
	.box-line-r{ /* 每个 行内 line 模块 l=left r=right */
		display: flex;
		flex-flow: row nowrap;
		justify-content: flex-end;
		align-items: center;
	}
	
	.box-line-c{ /* 每个 行内 line 模块 c=center */
		display: flex;
		flex-flow: row nowrap;
		justify-content: center;
		align-items: center;
		width: 670upx; /* btn-line 独立设置 块 宽高 !! 在双按钮同一行的情况下，会强制均分按钮宽度，并且两端对齐 */
		height: 94upx; 
	}
	
	
	.box-el-s{ line-height: 34upx; font-size: 24upx; }
	.box-el-ss{ line-height: 54upx; font-size: 38upx; }
	.box-el-sss{ line-height: 94upx;}
	.box-el-ssss { line-height: 94upx; width: 315upx;}
	.box-el-s-inv { line-height: 48upx; font-size: 34upx;}
	
	
	.box-img-el-s {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 35upx;
		height: 35upx;
	}
	.box-img-el-ss {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 50upx;
		height: 50upx;
	}
</style>