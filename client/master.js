//always get organizations
Meteor.subscribe("organizations", function(){
	Session.set("orgId", Organizations.findOne({name:"Demo Organization"})._id);
});

Deps.autorun(function() {
	//always get sites
	Meteor.subscribe("sites", Session.get("orgId"));
	//always get courses
	Meteor.subscribe("courses", Session.get("orgId"));

	Meteor.subHandle = Meteor.subscribe("maps", Session.get("pagingSkip"), Session.get("pagingLimit"));
	
});


Template.home.helpers({
	orgName: function() {
		var org = Organizations.findOne({_id: Session.get("orgId")});
		return org && org.name || "Unknown";
	}
});

Template.sitesTable.helpers({
	orgSites: function() {
		return Sites.find({}, {sort: {name: 1}}).fetch();
	}
	, siteSelected: function() {
		return Session.equals("selectedSite", this._id) ? "selected" : '';
	}
});
Template.sitesTable.events({
	"click .site": function(e) {
		e.preventDefault();
		Session.set('selectedSite', this._id);
		Session.set('selectedCourse','');
	}
});

Template.coursesTable.helpers({
	siteName: function() {
		var site = Sites.findOne({_id: Session.get("selectedSite")});
		return site && site.name || "Unknown";
	}
	, orgCourses: function() {
		var courses = Courses.find({ siteid: Session.get('selectedSite') }, { sort: {name: 1} }).fetch();
		return courses;
	}
	, courseSelected: function() {
		return Session.equals("selectedCourse", this._id) ? "selected" : '';
	}
});
Template.coursesTable.events({
	"click .course": function(e) {
		e.preventDefault();
		Session.set('selectedCourse', this._id);
	}
});

Template.exampleTable.myMaps = function() {
	return Maps.find();
};

Template.home.created = function() {
	var _pager = new Meteor.Paginator({
		templates: {
			content: "exampleTable"
		}
		, pagination: {
			resultsPerPage: 6 //default limit
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
				Session.set("pagingLimit", 6);
			}
		}
	});
};

Template.home.destroyed = function() {
	delete _pager;
}