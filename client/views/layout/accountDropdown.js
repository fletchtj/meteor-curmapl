Template.accountDropdown.helpers({
	loggedInUser : function() {
		var user = Meteor.user();
		if(user && user.emails) {
			return user.emails[0].address;
		} else {
			return "somebody...";
		}
	},
	loggedInUserDescription : function() {
		var user = Meteor.user();
		if(user && user.profile) {
			return user.profile.description;
		} else {
			return 'Always up for an adventure...';
		}
	}
});

Template.accountDropdown.events({
	"click #btnLogout": function(e, tmpl) {
		Meteor.logout(function(err){
			if(err) {
				console.log(err);
			} else {
				console.log("you've been logged out...");
			}
		})
	}
});