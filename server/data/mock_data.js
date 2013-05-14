////////////////////
/**/(function(){/**/
////////////////////

Meteor.startup(function(){

    if (Organizations.find().count() === 0) {
        var org1 = Organizations.insert({name: "Demo Organization"});
		var org2 = Organizations.insert({name: "Test Organization"});
    }

    if (Sites.find().count() === 0) {
        var site1 = Sites.insert({ orgid: org1, name: "Site 1"});
		var site2 = Sites.insert({ orgid: org1, name: "Site 2"});
		var site3 = Sites.insert({ orgid: org1, name: "Site 3"});
		var site3 = Sites.insert({ orgid: org2, name: "Site 4"})
    }

    if (Courses.find().count() === 0) {
        Courses.insert({orgid: org1 , siteid: site1, name: "English 101"});
		Courses.insert({orgid: org1 , siteid: site2, name: "English 101"});
		Courses.insert({orgid: org1 , siteid: site1, name: "Chemistry 101"});
		Courses.insert({orgid: org1 , siteid: site2, name: "World Languages"});
		Courses.insert({orgid: org1 , siteid: site1, name: "Physical Education"});
		Courses.insert({orgid: org1 , siteid: site3, name: "Physical Education"});
		Courses.insert({orgid: org1 , siteid: site3, name: "English 101"});
    }
	
});

////////////////////
/*********/})();/**/
////////////////////
