Meteor.publish("organizations", function() {
	return Organizations.find({});
});
Meteor.publish("sites", function(orgId) {
	return Sites.find({ orgid: orgId });
});
Meteor.publish("courses", function(orgId) {
	return Courses.find({ orgid: orgId });
});