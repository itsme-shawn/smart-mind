module.exports = {
	publicPath: '',
	devServer: {
		disableHostCheck: true // 외부 가상머신으로 vue를 돌릴 때 필요한 옵션
	},
	transpileDependencies: [
		'vuetify'
	],
	lintOnSave: false
}
