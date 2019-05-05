<template>
	<view class="invoice">
		<ul class="flex-cnsc">
			<!-- <block v-for="(item, i) in list" :key="i"> -->
				<li class="flex-rnbs">
					<text space="emsp">商品名称</text>
					<ul>
						<block v-for="(item,i) in arr" :key="i">
							<li>
								<button :id="item.id" v-if="item.click" @click="clickBtn" type="primary" hover-class="hov">{{item.title}}</button>
								<button :id="item.nid" v-if="!item.click" @click="clickBtn" type="primary" hover-class="hov2" class="button" >{{item.title}}</button>
							</li>
						</block>
						
						
					</ul>
				</li>
			<!-- </block> -->
		</ul>
	</view>
	
</template>

<script>
	export default{
		data(){
			return{
				arr:[
					{
						click: true,
						title: '服装',
						id:'1x1',
						nid:'1x2'
					},
					{
						click: true,
						title: '箱包',
						id:'2x1',
						nid:'2x2'
					},
					{
						click: true,
						title: '鞋帽',
						id:'3x1',
						nid:'3x2'
					},
					{
						click: true,
						title: '母婴百货',
						id:'4x1',
						nid:'4x2'
					},
					{
						click: true,
						title: '美妆个护',
						id:'5x1',
						nid:'5x2'
					},
					{
						click: true,
						title: '食品',
						id:'6x1',
						nid:'6x2'
					},
				]
			}
		},
		// props:["list"]
		methods:{
			clickBtn(e){
				const n = e.target.id;
				let c = "";
				for (let item of this.arr){
					item.click = true;
					if(item.id == n){
						item.click = false;
					};
					if(item.click == false){
						c = item.title;
					};
				};
				this.$emit("blur",c);
			}
			
		}
	}
</script>

<style scoped>
	.invoice{
		padding-top: 30upx;
		width: 100vw;
		height: 100%;
		background-color: #FFFFFF;
	}
	.invoice > ul{
		width: 690upx;
		margin-left: 40upx;
		margin-right: 20upx;
	}
	.invoice > ul > li{
		margin-bottom: 30upx;
		width: 690upx;
	}
	.invoice > ul > li > text{
		width: 140upx;
		height: 50upx;
		line-height: 48upx;
		font-size: 34upx;
		font-family: "PingFangSC-Light";
		text-align: justify;
		color: #333333;
	}

	text + ul{
		width: 510upx;
		display: flex;
		flex-flow: row wrap;
		justify-content: center;
		align-content: center;
	}
	text + ul > li{
		flex: auto;
	}
	button{
		margin-bottom: 20upx;
		width: 160upx;
		height: 60upx;
		line-height: 55upx;
		font-size: 26upx;
		color: #888888;
		background-color: #FFFFFF;
		border: 1px solid #888888;
		border-radius: 30upx;
	}
	.button{
		margin-bottom: 20upx;
		width: 160upx;
		height: 60upx;
		line-height: 55upx;
		font-size: 26upx;
		color: #FFFFFF;
		background-color: #0E8EFF;
		border: 1px solid #0E8EFF;
		border-radius: 30upx;
	}
	.hov{
		color: #FFFFFF;
		background-color: #0E8EFF;
		border: 1px solid #0E8EFF;
	}
	.hov2{
		color: #888888;
		background-color: #FFFFFF;
		border: 1px solid #888888;
	}
</style>
