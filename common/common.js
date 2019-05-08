
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

const showActionSheet = async function(itemList){
	return await new Promise((resolve,reject) => {
		uni.showActionSheet({
			itemList: itemList,
			success: function (res) {
				resolve(res.tapIndex)
			}
		});
	})
}

// 拍照，并保存到本地
const photograph = async function(){
	return await new Promise((resolve,reject) => {
		uni.chooseImage({
			count: 1,
			sourceType: ['camera'],
			success: function (res) {
				resolve(res.tempFilePaths[0])
			}
		});
	})
}

const openAlbum = async function(){
	return await new Promise((resolve,reject) => {
		uni.chooseImage({
			count: 1,
			sourceType: ['album'],
			success: function (res) {
				resolve(res.tempFilePaths[0])
			}
		});
	})
}



export default {
	showModal,
	showToast,
	navigateTo,
	showActionSheet,
	photograph,
	openAlbum
}