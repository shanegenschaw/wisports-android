sag.packers = {
	
	get: function () {
		var data = {
			title: "Packers",
			styleClass: "packers",
			games: [
				new sag.Game(new Date(2013, 08, 08, 15, 35), 0, "49ers", "FOX"),
				new sag.Game(new Date(2013, 08, 15, 12, 00), 1, "Redskins", "FOX"),
				new sag.Game(new Date(2013, 08, 22, 12, 00), 0, "Bengals", "FOX"),
				new sag.Game(new Date(2013, 08, 29, 12, 00), 0, "BYE"),
			    new sag.Game(new Date(2013, 09, 06, 12, 00), 1, "Lions", "FOX"),
			    new sag.Game(new Date(2013, 09, 13, 12, 00), 0, "Ravens", "FOX"),
			    new sag.Game(new Date(2013, 09, 20, 15, 25), 1, "Browns", "CBS"),
			    new sag.Game(new Date(2013, 09, 27, 19, 30), 0, "Vikings", "NBC"),
			    new sag.Game(new Date(2013, 10, 04, 19, 40), 1, "Bears", "ESPN"),
			    new sag.Game(new Date(2013, 10, 10, 12, 00), 1, "Eagles", "FOX"),
			    new sag.Game(new Date(2013, 10, 17, 19, 30), 0, "Giants", "NBC"),
			    new sag.Game(new Date(2013, 10, 24, 12, 00), 1, "Vikings", "FOX"),
			    new sag.Game(new Date(2013, 10, 28, 11, 30), 0, "Lions", "FOX"),
			    new sag.Game(new Date(2013, 11, 08, 19, 30), 1, "Falcons", "NBC"),
			    new sag.Game(new Date(2013, 11, 15, 15, 25), 0, "Cowboys", "FOX"),
			    new sag.Game(new Date(2013, 11, 22, 15, 25), 1, "Steelers", "CBS"),
			    new sag.Game(new Date(2013, 11, 29, 12, 00), 0, "Bears", "FOX")
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
	
};
