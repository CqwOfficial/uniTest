<template>
	<aside>
		<div></div>
	</aside>
</template>

<script>
</script>

<style scoped>
	aside{
		position: absolute;
		top: 0;
		width: 750upx;
		margin: auto;
		overflow: hidden;
		z-index: -1;
	}
	aside>div{
		position: relative;
		width: 100%;
		height: 100px;
		text-align: center;
		line-height: 50px;
		z-index: -1;
	}
	aside:after{
		position: absolute;
		width: 110%;
		height: 80px;
		top: 0;
		left: -5%;
		content: '';
		border-radius: 0 0 50% 50%;
		background-color: #0E8EFF;
		z-index: -1;
	}
</style>
