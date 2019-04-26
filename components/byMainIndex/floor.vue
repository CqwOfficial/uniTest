<template>
	<aside>
		<div></div>
	</aside>
</template>

<script>
</script>

<style scoped>
	aside{
		position: relative;
		width: 100vh;
		height: 100vw;
		top: 0;
		left: 0;
		z-index: -50;
	}
	aside>div{
		
	}
	aside:before{
		position: absolute;
		top: 0;
		left: 0;
		content: " ";
		width: 60%;
		height: 100upx;
		border-radius: 0 0 200upx 200upx;
		background-color: #0E8EFF;
		z-index: -1;
	}
</style>
