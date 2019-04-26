<template>
	<view class="page flex-cnsc">
		<view class="boxf-t200 fm-pfl flx56x40 col-0">请选择您的行业</view>
		<view class="boxf-t10 fm-pfl flx38x26 col-0">（已选{{chooseNum}}/5：服装、箱包、鞋帽）</view>
		<ul class="flex-cnsc boxf-t70">
			<li>
				<view class="boxf-b30"
					id="btn1"
					:class="[baseClass,choose[0]?'bgc-0e8eff col-f':'col-0e8eff']"
					@click="clickBtn">服装</view>
			</li>
			<li>
				<view class="boxf-b30"
					id="btn2"
					:class="[baseClass,choose[1]?'bgc-0e8eff col-f':'col-0e8eff']"
					@click="clickBtn">箱包</view>
			</li>
			<li>
				<view class="boxf-b30"
					id="btn3"
					:class="[baseClass,choose[2]?'bgc-0e8eff col-f':'col-0e8eff']"
					@click="clickBtn">鞋帽</view>
			</li>
			<li>
				<view class="boxf-b30"
					id="btn4"
					:class="[baseClass,choose[3]?'bgc-0e8eff col-f':'col-0e8eff']"
					@click="clickBtn">母婴百货</view>
			</li>
			<li>
				<view
					id="btn5"
					:class="[baseClass,choose[4]?'bgc-0e8eff col-f':'col-0e8eff']"
					@click="clickBtn">美妆个护</view>
			</li>
		</ul>
		<view class="next boxf-t140 flex-cncc" @click="goNext">
			<image class="imgx40" src="../../static/img/icon/next.png" mode=""></image>
			<view class="fm-pfl flx40x28 col-3 boxf-t20 txt-shadow">下一步</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				choose:[false,false,false,false,false],
				chooseNum: 0,
				baseClass:"ul-btn border-1px-0e8eff fm-pfl flx70x30 txt-c cir-10"
			}
		},
		methods:{
			clickBtn:function(e){
				let n = e.target.id
				switch (n){
					case "btn1":
						this.choose[0] = !this.choose[0];
						this.choose[0] ? ++this.chooseNum : --this.chooseNum;
						break;
					case "btn2":
						this.choose[1] = !this.choose[1];
						this.choose[1] ? ++this.chooseNum : --this.chooseNum;
						break;
					case "btn3":
						this.choose[2] = !this.choose[2];
						this.choose[2] ? ++this.chooseNum : --this.chooseNum;
						break;
					case "btn4":
						this.choose[3] = !this.choose[3];
						this.choose[3] ? ++this.chooseNum : --this.chooseNum;
						break;
					case "btn5":
						this.choose[4] = !this.choose[4];
						this.choose[4] ? ++this.chooseNum : --this.chooseNum;
						break;
					default:
						break;
				}
				
			},
			goNext: function(){
				let arr = ["服装","箱包","鞋帽","母婴百货","美妆个护"];
				let param ="";
				for(let i=0;i<arr.length;i++){
					if(this.choose[i]==false){
						delete arr[i]
					}
				}
				param = arr.join('')
				// console.log(param)
				// global.gFn.go("./auditName",param)
				uni.navigateTo({
					url:"./auditName?param="+param
				})
			}
		}
	}
</script>

<style scoped>
	.page{
		width: 100vw;
		height: 100vh;
	}
	.ul-btn{
		width: 200upx;
		height: 70upx;
	}
	.next{
		width: 100upx;
		height: 100upx;
	}
</style>
