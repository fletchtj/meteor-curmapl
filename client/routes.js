(function() {
	Meteor.Router.add(/maps\/(\d+)/, function(id){
			Session.set('currentMap', id);
			return 'map';
	});

	Meteor.Router.add({
		'/' : function(){
			return 'home';
		}
		
		, '/*' : function(){
			return 'redMap';
		}
	});

	Meteor.Router.filters({
		requireLogin: function(page){
			if (Meteor.loggingIn()){
				return 'loading';
			} else if (Meteor.user()) {
				return page;
			} else {
				return 'signin'
			}
		}
	});

	Meteor.Router.filter('requireLogin', {only: 'map'});
	
})();
