<template>
	<view class="boxf-w750 boxf-h200 flex-cncc bgrad-light" @click="backThings">
		<view class="fm-pfl flx56x40 col-3 txt-shadow">点击申请营业执照</view>
	</view>
</template>

<script>
	export default{
		methods:{
			backThings:function(){
				console.log('tess')
				this.$emit('applys','../register/inputCdk')
			}
		}
	}
</script>

<style>
</style>
