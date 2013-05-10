/*
	name:
*/
Organizations = new Meteor.Collection("organizations");

/*
	orgid: ID
	name:
*/
Sites = new Meteor.Collection("sites");

/*
	orgid: ID
	siteid: ID
	name:
	subjects: []
	gradeLevels: []
*/
Courses = new Meteor.Collection("courses");

/*
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

/*
	orgid: ID
	name:
	courseid: ID
	unitMapTemplate: ID (mapTemplate id)
	units: [] of IDs
*/
Maps = new Meteor.Collection("maps");

/*
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