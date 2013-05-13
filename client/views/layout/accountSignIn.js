Template.accountSignIn.events({
	"click .dropdown-user-account input, .dropdown-user-account label": function(e, tmpl) {
		e.stopImmediatePropagation();
	},
	
	"keypress .dropdown-user-account": function(e, tmpl) {
		var user = trimInput(tmpl.find("#userName").value)
		, pass = tmpl.find("#userPass").value;
		if (e.keyCode == 13 && isNotEmpty(user) && isNotEmpty(pass)) {
			Meteor.loginWithPassword(user, pass, loginHandler);
		}
	},
	
	"click #btnLogin": function(e, tmpl) {
		e.stopImmediatePropagation();
		var user = trimInput(tmpl.find("#userName").value)
		, pass = tmpl.find("#userPass").value;
		if (isNotEmpty(user) && isNotEmpty(pass)) {
			Meteor.loginWithPassword(user, pass, loginHandler);
		} else {
			$("#errMessage").html("Please enter a valid username and password.").fadeIn();
			tmpl.find("#userName").focus();
		}
	}
})

var loginHandler = function(err) {
	if(err){
		$("#errMessage").html(err.reason).fadeIn();
	} else {
		return true;
	}
}

var trimInput = function(val) {
	return val.replace(/^\s*|\s*$/g, "");
}

var isNotEmpty = function(val) {
	return val.length > 0;
}

var isValidPassword = function(val) {
	return val.length >= 5;
}