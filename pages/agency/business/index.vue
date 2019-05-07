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
							<block v-for="(item,i) in noList" :key="i">
								<swiper-box :box="item" @navi="naviNo"></swiper-box>
							</block>
						</view>
					</scroll-view>
				</swiper-item>				
				
				<swiper-item>
					<scroll-view scroll-y style="height: 1100upx;">
						<view class="boxf-t20">
							<block v-for="(item,i) in okList" :key="i">
								<swiper-box :box="item" @navi="naviOk">
									<slot>
										<view class="border-top-1px-d-e5">
											<btn :num="i" @navi="putState"></btn>
										</view>
									</slot>
								</swiper-box>
							</block>
						</view>
					</scroll-view>
				</swiper-item>				
				
				<swiper-item>
					<scroll-view scroll-y style="height: 1100upx;">
						<view class="boxf-t20">
							<block v-for="(item,i) in endList" :key="i">
								<swiper-box :box="item" @navi="naviEnd"></swiper-box>
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
				naviState: '审核已通过', // 控制 end页面 title 的显示内容，由swiperBtn组件进行处理后，修改此处
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
					}
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
					{
						time:"已办结 1 小时 30 分",
						tel:"18361272556",
						shop:"景宁百分百食品店",
						name:"王京"
					},
					{
						time:"已办结 1 小时 30 分",
						tel:"18361272556",
						shop:"景宁百分百食品店",
						name:"王京"
					},
					{
						time:"已办结 1 小时 30 分",
						tel:"18361272556",
						shop:"景宁百分百食品店",
						name:"王京"
					},
					{
						time:"已办结 1 小时 30 分",
						tel:"18361272556",
						shop:"景宁百分百食品店",
						name:"王京"
					},
					{
						time:"已办结 1 小时 30 分",
						tel:"18361272556",
						shop:"景宁百分百食品店",
						name:"王京"
					},
					{
						time:"已办结 1 小时 30 分",
						tel:"18361272556",
						shop:"景宁百分百食品店",
						name:"王京"
					},
					{
						time:"已办结 1 小时 30 分",
						tel:"18361272556",
						shop:"景宁百分百食品店",
						name:"王京"
					},
					{
						time:"已办结 1 小时 30 分",
						tel:"18361272556",
						shop:"景宁百分百食品店",
						name:"王京"
					}
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
			},
			getOkListHeight(){
				let n = this.okList.length;
				let k = 400;
				k = n*k;
				let g = `height:${k}upx;`
				return this.okList.length
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
			},
			naviOk(n){
				let c = "./ok/ok";
				let f = `?tel=${n.tel}&name=${n.name}&shop=${n.shop}&state=${this.naviState}`;
				c = c+f;
				common.navigateTo(c)
			},
			putState(n){
				// 到时候要用接口 把这个返回值存到数据库里，状态特别多，还是单一对象存储，我认为应该使用nosql，先暂时用sql试试
				this.naviState = n;
			},
			naviEnd(n){
				let c = "./end/end";
				let f = `?tel=${n.tel}&name=${n.name}&shop=${n.shop}`;
				c = c+f;
				common.navigateTo(c)
			},
			getSkipAsk(n){ // 用于接收判断，来选择是否切换switch页面至“待审核”
				if(n){
					let index = 0;
					this.setScrollLeft(index);
					this.currentTab = index;
				}
			}
			

		}
	}
</script>
<style>
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