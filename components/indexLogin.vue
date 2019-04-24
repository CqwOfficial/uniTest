<template>
	<view class="boxf-w710 boxf-h160 cir-10 bgc-f flex-rnbc">
		<view class="imgx100 boxf boxf-l20">
			<image class="imgx100 cir" src="../static/logo.png" mode=""></image>
		</view>
		<view class="boxf-mw480 boxf fm-pfr flx42x30 col-3">{{userName}}</view>
		<view class="imgx60 boxf boxf-r20 flex-cncc" >
			<!-- <image class="imgx40" :class="up?'rotate-180':''" src="../static/img/icon/arrow.png" mode=""></image> -->
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				up:false
			}
		},
		props:['userName'],
		methods:{
			getDetail:function(){
				this.up = !this.up;
			}
		}
	}
</script>

<style>
</style>
