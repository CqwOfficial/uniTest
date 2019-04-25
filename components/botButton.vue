<template>
	<view class=" flex-rncc boxf-l40 boxf-r40 boxf-t30 boxf-b30">
		<view class="bot-box flex-cncc">
			<button 
				v-if="botBtn.res" 
				@click="backRes"
				type="primary" 
				class="bot-btn"
				:class="botBtn.light?'bg-col-0E8EFF':'bg-col-F col-C'"
				>{{botBtn.resBtn}}</button>
			<button 
				@touchstart="hovDown"
				@touchend="hovUp"
				@click="backRej"
				v-if="botBtn.rej" 
				type="primary"
				class="bot-btn boxf-t20 border-1px" 
				:style="botBtn.rejLight?'background-color:#0e8eff; color:#fff;':'background-color:#FFF;color:#0e8eff;'"
				style="color: #0E8EFF;" 
				plain=true>{{botBtn.rejBtn}}</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				hov: false,
// 				botBtn: {:class="botBtn.light?'col-0E8EFF bg-col-F':'bg-col-0E8EFF'"
// 					res: true, // 显示上方按钮
// 					rej: true, // 显示下方按钮
// 					resBtn: "去支付",
// 					rejBtn: "暂不支付"
// 				}
			};
		},
		props: ['botBtn'],
		methods:{
			hovDown(){
				this.hov = true;
			},
			hovUp(){
				this.hov = false;
			},
			backRes(){
				this.$emit('toClick',true) // 点击返还父组件 选中的目标按钮 true是上方按钮，false是下方按钮
			},
			backRej(){
				this.$emit('toClick',false)
			}
		}
	}
</script>

<style>
	@import url("../static/style/flex-config.css");
	@import url("../static/style/col_bg_font.css");
</style>

<style scoped>
	.bot-btn{
		width: 670upx;
	}
	/* 权重问题，单独页面内加颜色 */
	.col-0E8EFF{ color: #0E8EFF; }
	.col-FFF{ color: #FFFFFF;}
	.col-C{color: #CCCCCC;}
	.bg-col-0E8EFF{ background-color: #0E8EFF;}
	.bg-col-F{background-color: #FFFFFF;}
	
	.border-1px{
		border: 1px solid #0E8EFF!important;
	}
</style>
