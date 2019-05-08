<template>
	<view class="box flex-cnsc">
		<view v-if="!ok" class="photo photo-b" @click.prevent.stop="addPhoto"></view>
		<view v-if="ok" class="photo flex-cncc">
			<view class="cancel" @click.prevent.stop="cancelPhoto"></view>
			<image :src="pho" mode=""></image>
		</view>
	</view>
</template>

<script>
	import common from '../../common/common.js'
	export default{
		data(){
			return{
				ok: false,
				actionList :['相机','相册'],
				pho:''
			}
		},
		methods:{
			async addPhoto(){
				let _this = await this;
				let g = await common.showActionSheet(_this.actionList);
				
				if(g == 0){
					let photo = await common.photograph();
					if(photo == ''){
						return
					}else{
						_this.ok = !_this.ok;
						_this.pho = photo;
					}
					
				}else if(g == 1){
					let amil = await common.openAlbum();
					if(amil == ''){
						return
					}else{
						_this.ok = !_this.ok;
						_this.pho = amil;
					}
					
				}
				_this.$emit("photo",_this.pho);
			},
			cancelPhoto(){
				this.pho = "";
				this.ok = !this.ok;
			}
		}
	}
</script>

<style scoped>
	.box{
		padding-top: 30upx;
		padding-bottom: 20upx;
		width: 100vw;
	}
	.photo{
		position: relative;
		height: 310upx;
		width: 490upx;
		background-color: #989A9C;
		border-radius: 20upx;
	}
	.photo-b::before{
		position: absolute;
		content: "";
		top: 115upx;
		left: 205upx;
		height: 80upx;
		width: 80upx;
		border-radius: 50%;
		background: url(../../static/img/icon/add-2.png) no-repeat;
		background-clip: border-box;
		background-size: 80upx 80upx;
	}
	.photo > .cancel{
		position: absolute;
		top: -25upx;
		right: -25upx;
		width: 50upx;
		height: 50upx;
		border-radius: 50%;
		background: url(../../static/img/icon/x.png) no-repeat;
		background-size: 50upx 50upx;
	}
	image{
		height: 250upx;
		width: 250upx;
	}
</style>
