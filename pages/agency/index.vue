<template>
	<view class="page">
		<tip :tip="tip"></tip>
		<ul>
			<li><index-block :block="index[0]" @navi="navigo"></index-block></li>
			<li><index-block :block="index[1]" @navi="navigo"></index-block></li>
			<li><index-block :block="index[2]" @navi="navigo"></index-block></li>
			<li><index-block :block="index[3]" @navi="navigo"></index-block></li>
		</ul>
		<floor></floor>
	</view>
</template>

<script>
	import common from "../../common/common.js"
	
	import floor from "../../components/byMainIndex/floor.vue"
	import tip from "../../components/byMainIndex/tip.vue"
	import indexBlock from "../../components/byAgency/indexBlock.vue"
	export default{
		data(){
			return{
				tip:{
					image:"../../static/img/icon/head.png",
					name:"田昊"
				},
				index:[
					{
						image:'../../static/img/index/business.png',
						text:'工商'
					},
					{
						image:'../../static/img/index/seal.png',
						text:'刻章'
					},
					{
						image:'../../static/img/index/tax.png',
						text:'税务'
					},
					{
						image:'../../static/img/index/invoice.png',
						text:'开发票'
					}
				]
			}
		},
		components:{
			floor,
			tip,
			indexBlock
		},
		methods:{
			navigo(n){
				switch (n){
					case "工商":
						common.navigateTo('./business/index')
						break;
					case "刻章":
						common.navigateTo('./seal/index')
						break;
					case "税务":
						common.navigateTo('./tax/index')
						break;
					case "开发票":
						common.navigateTo('./inv/index')
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
		position: relative;
		top: 0;
		width: 100vw;
		height: 100%;
		background-color: #F5F5F5;
		z-index: 1;
	}
	ul>li{
		margin-bottom: 20upx;
	}
</style>
