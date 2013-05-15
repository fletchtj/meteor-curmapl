Meteor.methods({
	totalCount: function() {
		return Maps.find().count();
	}
});