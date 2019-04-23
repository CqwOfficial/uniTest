<template>
	<view class="boxf-w750 bgc-f5">
		
		
		<view class="boxf-b20">
			<index-decalre></index-decalre>
		</view>
		
		<view class="flex-cnsc bgc-f5">
			<index-card :things="things" :title="title" class="boxf-b20"></index-card>
			<index-card :things="things2" :title="title2" class="boxf-b20"></index-card>
			<index-card :things="things3" :title="title3" class="boxf-b20"></index-card>
		</view>
	</view>
</template>

<script>
	import indexIcon from "../../components/indexIcon.vue"
	import indexCard from "../../components/indexCard.vue"
	import indexDecalre from "../../components/indexDeclare.vue"
	export default {
		data() {
			return {
				title:'工商服务',
				title2:'财税服务',
				title3:'更多',
				things:[
					{
						src:"../static/img/index/business.png",
						bg:"bgc-f90",
						info:"营业执照"
					},
					{
						src:"../static/img/index/annual.png",
						bg:"bgc-1ee",
						poi:'3',
						info:"工商年报"
					},
					{
						src:"../static/img/index/cancel.png",
						bg:"bgc-f30",
						poi:'5',
						info:"注销/变更"
					}
				],
				things2:[
					{
						src:"../static/img/index/invoice.png",
						bg:"bgc-f80",
						poi:'73',
						info:"开发票"
					},
					{
						src:"../static/img/index/manage.png",
						bg:"bgc-4b8",
						poi:'34',
						info:"发票管理"
					},
					{
						src:"../static/img/index/declare.png",
						bg:"bgc-bf8",
						poi:'54',
						info:"纳税申报"
					}
				],
				things3:[
					{
						src:"../static/img/index/bank.png",
						bg:"bgc-0997f7",
						poi:'73',
						info:"银行开户"
					},
					{
						src:"../static/img/index/seal.png",
						bg:"bgc-f80",
						poi:'94',
						info:"公章管理"
					},
					{
						src:"../static/img/index/attendant.png",
						bg:"bgc-0997f7",
						poi:'54',
						info:"联系客服"
					}
				]
			}
		},
		methods: {

		},
		components:{
			indexIcon,
			indexCard,
			indexDecalre
		}
	}
</script>

<style>

</style>
