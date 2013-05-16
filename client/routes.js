/** Routes **/
Meteor.Router.add({
	'/' : 'home'
	, '/maps' : 'mapList'
	, '/maps/:id' : {as: 'showMap', to: 'map', and: function(id){ Session.set('currentMap', id); }}
});

// Default handler for anything that doesn't match above routes
Meteor.Router.add(/\/*/, function(){ return 'notFound'; });

/** Filters **/
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

Meteor.Router.filter('requireLogin', {only: ['map']});