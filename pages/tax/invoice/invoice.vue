<template>
	<view class="page">
		<choose-goodsname @blur="getGoods"></choose-goodsname>
		<invoice-suggest :suggest="suggest"></invoice-suggest>
		<invoice-table :invlist="invList"></invoice-table>
		<base-element :list="addressList"></base-element>
		<money-detail :outlay="outlay"></money-detail>
		<base-line :line="gui"></base-line>
		<base-line :line="ji"></base-line>
		<invoice-btn 
			:btn="btnObj" 
			@confirm="getBtnState()"
			@cancel="getBtnState()">
		</invoice-btn>
	</view>
</template>

<script>
	import { mapState, mapMutations } from 'vuex';
	import common from '../../../common/common.js'
	
	import chooseGoodsname from "../../../components/byInvoice/chooseGoodsname.vue"
	import invoiceSuggest from "../../../components/byInvoice/invoiceSuggest.vue"
	import invoiceTable from "../../../components/byInvoice/invoiceTable.vue";
	import moneyDetail from "../../../components/byInvoice/moneyDetail.vue";
	import baseElement from "../../../components/byInvoice/baseElement.vue";
	import baseLine from "../../../components/byInvoice/baseLine.vue"
	import invoiceBtn from "../../../components/byInvoice/invoiceBtn.vue";
	
	export default {
		data() {
			return {
				goodsname:"",
				invList:[
					{
						title:'开票状态',
						text:'已开票'
					},
					{
						title:'购方名称',
						text:'上海爱用宝科技股份有限公司'
					},
					{
						title:'税  号',
						text:'913100005930871127'
					},
					{
						title:'发票代码',
						text:'011001800411'
					},
					{
						title:'发票号码',
						text:'18001923'
					},
					{
						title:'企业地址',
						text:'上海市虹口区欧阳路196号10号楼6层25室'
					},
					{
						title:'企业电话',
						text:'02160443546'
					},
					{
						title:'开户银行',
						text:'中国农业银行股份有限公司上海复旦支行'
					},
					{
						title:'银行账户',
						text:'03485500040013444'
					},
					{
						title:'发票明细',
						list:[
							{
								title:'名称*数量',
								money:'金额'
							},
							{
								title:'服装 * 10',
								money:'￥670.00'
							}
							
						]
					},
					{
						title:'开票金额',
						text:'￥670.00'
					},
					{
						title:'提交时间',
						text:'2019-03-28'
					},
					{
						title:'开票时间',
						text:'2019-03-29'
					},
				],
				outlay:{
					title:'费用明细',
					list:[
						{
							title:'税费（3%税率）',
							money:'￥20.10'
						},
						{
							title:'快递及服务费',
							money:'￥10.0'
						},
						{
							title:'总计',
							money:'￥30.10'
						},
					]
				},
				addressList:[
					{
						title:'寄送地址',
						text:'田昊，18361272556，上海市宝山区新二路55号裙楼3楼爱用宝（进门问门卫）'
					},
					{
						title:'快递单号',
						text:'圆通快递（12345678901234）'
					}
				],
				btnObj:{
					confirm:'去支付',
					cancel:'暂不支付'
				},
				gui:{
						title:"规格型号",
						text:"165/S"
					},
				ji:{
						title:"计量单位",
						text:"件"
					},
				suggest:{
					image: '../../static/img/icon/ok.png',
					title:'提交成功',
					text:'可在发票管理中查看开票进度'
				}
			}
		},
		computed:{
			...mapState(['nickname'])
		},
		components:{
			invoiceTable,
			moneyDetail,
			baseElement,
			invoiceBtn,
			invoiceSuggest,
			chooseGoodsname,
			baseLine
		},
		methods: {
			async getBtnState(n){
				if (n == 'confirm'){
					let c = await common.showModal("提示","你可以在发票管理-待提交中查看该条发票记录");
					if(c == true){
						await common.navigateTo('../../main_index/main_index');
					}
				}else if(n == 'cancel'){
					let c = await common.showToast("取消支付",'../../../static/img/icon/no.png')
				}
			},
			getGoods(n){
				this.goodsname = n;
				console.log(this.goodsname)
			}
		}
	}
</script>

<style scoped>
	.page{ background-color: #F5F5F5; }
</style>
