totalClicks = Session.get('clickCount') || 0;

Session.set('clickCount',totalClicks);

Template.home.helpers({
	greeting: function(){
		return "Welcome to myCurMapl."
	},
	
	clickCount: function(){
		return Session.get('clickCount');
	}
});

Template.home.events({
  'click input' : function (e) {
  	totalClicks = totalClicks + 1;
  	Session.set('clickCount', totalClicks);
  }
});

Template.map.helpers({
	mapNumber: function(){
		return Session.get('currentMap');
	}
})