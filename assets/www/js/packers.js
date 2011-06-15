sag.packers = {
	
	get: function () {
		var data = {
			title: "Packers",
			styleClass: "packers",
			games: [
				new sag.Game(new Date(2011, 08, 08, 19, 30), 1, "New Orleans Saints"),
				new sag.Game(new Date(2011, 08, 18, 12, 00), 0, "Carolina Panthers"),
				new sag.Game(new Date(2011, 08, 25, 15, 15), 0, "Chicago Bears"),
				new sag.Game(new Date(2011, 09, 02, 15, 15), 1, "Denver Broncos"),
			    new sag.Game(new Date(2011, 09, 09, 19, 20), 0, "Atlanta Falcons"),
			    new sag.Game(new Date(2011, 09, 16, 12, 00), 1, "St. Louis Rams"),
			    new sag.Game(new Date(2011, 09, 23, 15, 15), 0, "Minnesota Vikings"),
			    new sag.Game(new Date(2011, 09, 30, 12, 00), 0, "Bye"),
			    new sag.Game(new Date(2011, 10, 06, 15, 15), 0, "San Diego Chargers"),
			    new sag.Game(new Date(2011, 10, 14, 19, 30), 1, "Minnesota Vikings"),
			    new sag.Game(new Date(2011, 10, 20, 12, 00), 1, "Tampa Bay Buccaneers"),
			    new sag.Game(new Date(2011, 10, 24, 11, 30), 0, "Detroit Lions"),
			    new sag.Game(new Date(2011, 11, 04, 15, 15), 0, "New York Giants"),
			    new sag.Game(new Date(2011, 11, 11, 12, 00), 1, "Oakland Raiders"),
			    new sag.Game(new Date(2011, 11, 18, 12, 00), 0, "Kansas City Chiefs"),
			    new sag.Game(new Date(2011, 11, 25, 19, 20), 1, "Chicago Bears"),
			    new sag.Game(new Date(2012, 00, 01, 12, 00), 1, "Detroit Lions")
			]
		};
		return data;
	},
	
	initialize: function () {
		
		jQuery("#packersLink").click(function () {
			sag.processData(sag.packers.get());
			return true;
		});
		
	}
	
}
