Template.map.helpers({
	mapNumber: function(){
		return Session.get('currentMap');
	}
});

Template.mapList.created = function() {
	var _pager = new Meteor.Paginator({
		templates: {
			content: "exampleTable"
		}
		, pagination: {
			resultsPerPage: 15 //default limit
		}
		, callbacks: {
			onPagingCompleted: function(skip, limit) {
				Session.set('pagingSkip', skip);
				Session.set('pagingLimit', limit);
			}
			, getDependentSubscriptionsHandles: function() {
				return [Meteor.subHandle];
			}
			, getTotalRecords: function(cb) {
				Meteor.call("totalCount", function(err, result) {
					cb(result);
				});
			}
			, onTemplateCreated: function() {
				Session.set("pagingSkip", 0);
				Session.set("pagingLimit", 15);
			}
		}
	});
};

Template.mapList.destroyed = function() {
	delete _pager;
}