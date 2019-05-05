
const showModal = async function(title,content){
	return await new Promise((resolve,reject) => {
		uni.showModal({
			title: title,
			content: content,
			success: function (res) {
				if (res.confirm) {
					resolve(true)
				} else if (res.cancel) {
					resolve(false)
				}
			}
		})
	})
};

const navigateTo = async function(url){
	return await new Promise((resolve,reject) => {
		uni.navigateTo({
			url: url
		});
	})
};

const showToast = async function(title,url){
	return await new Promise((resolve,reject) => {
		uni.showToast({
			title: title,
			image: url,
			duration: 1500,
			success: function () {
				resolve(true)
			}
		});
	})
}

export default {
	showModal,
	showToast,
	navigateTo
}