module.exports = Ractive.extends({
	template: require('../../tpl/home'),
	components: {
		navigation : require('../views/Navigation'),
		appfooter: require('../views/Footer')
	},
	onrender: function() {
		console.log('Home page rendered');
	}
});