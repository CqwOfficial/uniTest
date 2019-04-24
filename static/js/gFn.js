export default{
	toast(title,image){
		uni.showToast({
			title:title,
			image:image,
			duration: 1500
		})
	},
	// go(){
	// 	return new Promise(function(res,rej){
	// 		let back = "";
	// 		uni.navigateTo({
	// 			url:"/pages/more/bank/bank",
	// 			success: () => {
	// 				back = 1;
	// 			}
	// 		})
	// 		res(back);
	// 	})
	// }
	go(url,param){
		uni.navigateTo({
			url:url,
			success: () => {
			}
		})
	},
	// modal(title,content){
	// 	let back = false;
	// 	return new Promise(function(res,rej){
	// 		uni.showModal({
	// 			title: title,
	// 			content: content,
	// 			success: function (res) {
	// 				if (res.confirm) {
	// 					back = true;
	// 				} else if (res.cancel) {
	// 				}
	// 			}
	// 		});
	// 		res(back)
	// 	})
	// },
	modal(title,content,suc){
		uni.showModal({
			title: title,
			content: content,
			success: function (res) {
				if (res.confirm) {
					suc
				} else if (res.cancel) {
				}
			}
		})
		
	},
	loading(title){
		let back = false;
		return new Promise(function(res,rej){
			uni.showLoading({
				title: title,
				success: ()=>{
					setTimeout(function () {
						uni.hideLoading();
					}, 2000);
				}
			})
			res(back)
		})
	}
}