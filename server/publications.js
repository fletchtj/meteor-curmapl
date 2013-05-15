Meteor.publish("organizations", function() {
	return Organizations.find({});
});
Meteor.publish("sites", function(orgId) {
	return Sites.find({ orgid: orgId });
});
Meteor.publish("courses", function(orgId) {
	return Courses.find({ orgid: orgId });
});
Meteor.publish("maps", function(skip, limit) {
	return Maps.find({}, {
		skip: skip || 0
		, limit: limit || 10
		, sort: {lastMod: -1, name: 1}
	});
});