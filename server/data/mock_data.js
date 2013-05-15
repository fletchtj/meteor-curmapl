////////////////////
/**/(function(){/**/
////////////////////

Meteor.startup(function(){
	
	if (Meteor.users.find().count() === 0) {
		Accounts.createUser({email: "user@ties.k12.mn.us", password: "password"});
	}	
	
    if (Organizations.find().count() === 0) {
        var org1 = Organizations.insert({name: "Demo Organization"});
		var org2 = Organizations.insert({name: "Test Organization"});
    }

    if (Sites.find().count() === 0) {
        var site1 = Sites.insert({ orgid: org1, name: "Site 1"});
		var site2 = Sites.insert({ orgid: org1, name: "Site 2"});
		var site3 = Sites.insert({ orgid: org1, name: "Site 3"});
		var site4 = Sites.insert({ orgid: org2, name: "Site 4"})
		var site5 = Sites.insert({ orgid: org2, name: "Site 5"})
    }

    if (Courses.find().count() === 0) {
        var c1 = Courses.insert({orgid: org1 , siteid: site1, name: "English 101"});
		var c2 = Courses.insert({orgid: org1 , siteid: site2, name: "English 101"});
		var c3 = Courses.insert({orgid: org1 , siteid: site1, name: "Chemistry 101"});
		Courses.insert({orgid: org1 , siteid: site2, name: "World Languages"});
		Courses.insert({orgid: org1 , siteid: site1, name: "Physical Education"});
		var c4 = Courses.insert({orgid: org1 , siteid: site3, name: "Physical Education"});
		Courses.insert({orgid: org1 , siteid: site3, name: "English 101"});
		var c5 = Courses.insert({orgid: org2 , siteid: site4, name: "Basketweaving"});
		Courses.insert({orgid: org2 , siteid: site4, name: "Finger Painting"});
		Courses.insert({orgid: org2 , siteid: site5, name: "Lollygagging"});  
    }
	
	if (Maps.find().count() == 0) {
		for (var i = 0; i < 10; i++) {
			Maps.insert({orgid: org1, courseid: c1, name: "English 101 - Site 1 - Map "+(i+1), owner: "Mr. Harvey", lastMod: "Aug 1, 2012"});
			Maps.insert({orgid: org1, courseid: c2, name: "English 101 - Site 2 - Map "+(i+1), owner: "Mrs. Shoe", lastMod: "Aug 21, 2012"});
			Maps.insert({orgid: org1, courseid: c3, name: "Chemistry 101 - Site 1 - Map "+(i+1), owner: "Ms. Katz", lastMod: "Aug 14, 2012"});
			Maps.insert({orgid: org1, courseid: c1, name: "English 101 - Site 1 - Map "+(i+2), owner: "Mr. Harvey", lastMod: "Aug 10, 2012"});
			Maps.insert({orgid: org1, courseid: c4, name: "PhyEd - Site 3 - Map "+(i+1), owner: "Mrs. Platz", lastMod: "Aug 15, 2012"});
			Maps.insert({orgid: org1, courseid: c5, name: "Basketweaving - Site 4 - Map "+(i+1), owner: "Mr. Kidz", lastMod: "Aug 7, 2012"});
		}
	}
	
});

////////////////////
/*********/})();/**/
////////////////////
