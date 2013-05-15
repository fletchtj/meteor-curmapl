/* Organizations
	name:
*/
Organizations = new Meteor.Collection("organizations");

/* Sites
	orgid: ID
	name:
*/
Sites = new Meteor.Collection("sites");

/* Courses
	orgid: ID
	siteid: ID
	name:
	subjects: []
	gradeLevels: []
*/
Courses = new Meteor.Collection("courses");

/* MapTemplates
	orgid: ID
	name:
	type: 
	fields: [{
		name:
		type:
		description:
		tooltip:
	}]
	subjects: []
	gradeLevels: []
*/
MapTemplates = new Meteor.Collection("mapTemplates");

/* Maps
	orgid: ID
	name:
	courseid: ID
	unitMapTemplate: ID (mapTemplate id)
	units: [] of IDs
*/
Maps = new Meteor.Collection("maps");

/* Units
	orgid: ID
	mapid: ID
	name: 
	fields: [{
		name:
		type:
		value:
	}]
*/
Units = new Meteor.Collection("units");