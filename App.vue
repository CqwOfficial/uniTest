<script>
	import gFn from "./static/js/gFn.js"
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
	global.time = 0;
	global.isLogin = false;
	// global.gFn = gFn;
	global.setCompName = "";
</script>

<style>
	/*每个页面公共css */
</style>
<style>
	@import url("./static/style/flex-config.css");
	@import url("./static/style/zhushang.css");
</style>