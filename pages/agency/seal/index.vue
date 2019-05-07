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
			
				<swiper-item>
					<scroll-view scroll-y style="height: 1100upx;">
						<view class="boxf-t20">
							<block v-for="(item,i) in waitList" :key="i">
								<swiper-box :box="item" @navi="naviWait"></swiper-box>
							</block>
						</view>
					</scroll-view>
				</swiper-item>
				
				<swiper-item>
					<scroll-view scroll-y style="height: 1100upx;">
						<view class="boxf-t20">
							<block v-for="(item,i) in okList" :key="i">
								<swiper-box :box="item" @navi="naviOk"></swiper-box>
							</block>
						</view>
					</scroll-view>
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
				btnWidth: 2, // 控制 顶部 bar > button 的宽度
				scrollLeft: 0,
				isClickChange: false,
				currentTab: 0,
				menuTabs: [
					{name: '待刻'}, 
					{name: '已刻'}
				],
				swiperDateList: [[],[]],
				waitList:[
					{
						time:"已等待 1 小时 30 分",
						tel:"18361272556",
						shop:"景宁泽宇食品店",
						name:"张姗"
					}
				],
				okList:[
					{
						time:"已完成 1 小时 30 分",
						tel:"18361272556",
						shop:"景宁泽宇食品店",
						name:"张姗"
					}
				]
				
				
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
					case 2:
						return "btn-w2"
						break;
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
			naviOk(n){
				let c = "./ok/ok";
				let f = `?tel=${n.tel}&name=${n.name}&shop=${n.shop}`;
				c = c+f;
				common.navigateTo(c)
			}
			

		}
	}
</script>
<style>
	.btn-w2{ width: 50vw; /*三等分tab宽度*/ }
	.btn-w3{ width: 33.3vw; /*三等分tab宽度*/ }
	.btn-w4{ width: 25vw; /*4等分tab宽度*/ }
	.btn-w5{ width: 20vw; /*5等分tab宽度*/ }
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
		width: 100vw;
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
</style>
