var sag = sag || {};

(function (jQuery, sag) {
	
	var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	
	var Game = function (datetime, home, opponent) {
		this.datetime = datetime;
		this.home = home;
		this.opponent = opponent;
		return this;
	}
	
	Game.prototype.formatGameTime = function () {
		var year = this.datetime.getFullYear();
		var month = monthNames[this.datetime.getMonth()];
		var date = this.datetime.getDate();
		var day = dayNames[this.datetime.getDay()];
		var hours = this.datetime.getHours();
		if (hours > 12) {
			hours = hours - 12;
		}
		var mins = this.datetime.getMinutes();
		if (mins < 10) {
			mins = "0" + mins;
		}
		var ampm = "am";
		if (this.datetime.getHours() > 11) {
			ampm = "pm";
		}
		var formatted = day + " " + month + " " + date + ", " + year;
		if (this.datetime.getHours() > 0) {
			formatted = formatted + " @ " + hours + ":" + mins + " " + ampm;
		}
		return formatted;
	};
	
	Game.prototype.isPast = function () {
		var now = new Date();
		// make it midnight
		now = new Date(now.getFullYear(), now.getMonth(), now.getDate());
		return now.getTime() > this.datetime.getTime();
	};
	
	Game.prototype.isPrimetime = function () {
		
	};
	
	var processData = function (data) {
		jQuery("#schedule h1").html(data.title);
		var upcoming = jQuery("#scheduleListUpcoming");
		var past = jQuery("#scheduleListPast");
		upcoming.html("");
		past.html("");
		jQuery(data.games).each(function(index, game) {
			var li = jQuery("<li>", {
				"class": data.styleClass
			});
			jQuery("<h3>", { "class": "gametime" }).html(game.formatGameTime()).appendTo(li);
			var p = jQuery("<p>", {
				"class": game.home ? "home" : "away"
			});
			if (game.home) {
				p.html("vs " + game.opponent);
			} else {
				p.html("at " + game.opponent);
			}
			p.appendTo(li);
			if (game.isPast()) {
				li.prependTo(past);
			} else {
				li.appendTo(upcoming);
			}
		});
		try {
			upcoming.listview("refresh");
			past.listview("refresh");
		} catch (e) {
			//window.alert("error: " + e);
		}
	};
	
	sag.Game = Game;
	sag.processData = processData;
	
}(jQuery, sag));
