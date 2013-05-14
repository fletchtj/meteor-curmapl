//always get organizations
Meteor.subscribe("organizations");
//always get sites
Meteor.subscribe("sites", Session.get("orgId"));
//always get courses
Meteor.subscribe("courses", Session.get("orgId"));

Meteor.startup(function() {
	Session.set("orgId", Organizations.findOne({name:"Demo Organization"})["_id"]);
});

Template.home.helpers({
	clickCount: function() {
		return Session.get('clickCount');
	}
	
	, myMaps: function() {
		var maps = [];
		for(var i = 0; i < 20; i++){
			maps.push({ name: i+" English 101", owner: "Mr. Harvey", lastMod: "Aug 1, 2012" });
			maps.push({ name: i+" Physical Education", owner: "Mrs. Shoe", lastMod: "Aug 15, 2012" });
			maps.push({ name: i+" Chemistry II", owner: "Mrs. Catz", lastMod: "Aug 4, 2012" });
		}
		return maps;
	}
	, orgCourses: function() {
		return Courses.find({}).fetch();
	}
	, orgName: function() {
		var org = Organizations.findOne({_id: Session.get("orgId")});
		if (org && org.name.length > 0)
			return org.name;
			else
			return "Unknown";
	}
});

Template.home.rendered = function() {
	$('#example').dataTable({
	    "sDom": "<'row-fluid'<'span5'l><'span7'f>r>t<'row-fluid'<'span6'i><'span6'p>>"
	    , "sPaginationType": "bootstrap"
	    , "oLanguage": {
	        "sLengthMenu": "_MENU_ items per page"
	    }
	});
}


Template.map.helpers({
	mapNumber: function(){
		return Session.get('currentMap');
	}
});

