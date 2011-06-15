sag.mariners = {
	
	get: function () {
		var data = {
			title: "KLL Mariners",
			styleClass: "mariners",
			games: [
				new sag.Game(new Date(2011, 3, 30, 11, 30), 0, "Team 4"),
			    new sag.Game(new Date(2011, 4, 03, 17, 15), 1, "Team 5"),
				new sag.Game(new Date(2011, 4, 07, 14, 30), 1, "Team 3"),
				new sag.Game(new Date(2011, 4, 20, 17, 15), 0, "Team 3 (makeup 5/11)"),
				new sag.Game(new Date(2011, 4, 14, 13, 00), 1, "Team 9"),
				new sag.Game(new Date(2011, 4, 17, 17, 15), 0, "Team 6"),
				new sag.Game(new Date(2011, 4, 21, 13, 00), 1, "Team 10"),
				new sag.Game(new Date(2011, 4, 24, 18, 45), 0, "Team 1"),
			    new sag.Game(new Date(2011, 4, 31, 17, 15), 1, "Team 7"),
			    new sag.Game(new Date(2011, 5, 04, 17, 30), 1, "Team 4"),
				new sag.Game(new Date(2011, 5, 08, 17, 15), 0, "Team 5"),
				new sag.Game(new Date(2011, 5, 11, 14, 30), 0, "Team 3"),
			    new sag.Game(new Date(2011, 5, 14, 17, 15), 1, "Team 8"),
			    new sag.Game(new Date(2011, 5, 18, 16, 00), 0, "Team 9"),
			    new sag.Game(new Date(2011, 5, 25, 14, 30), 1, "Team 6"),
			    new sag.Game(new Date(2011, 5, 28, 17, 15), 0, "Team 10"),
				new sag.Game(new Date(2011, 6, 07, 18, 45), 1, "Team 1"),
			    new sag.Game(new Date(2011, 6, 09, 17, 30), 0, "Team 7")
			]
		};
		return data;
	},
	
	initialize: function () {
		
		jQuery("#marinersLink").click(function () {
			sag.processData(sag.mariners.get());
			return true;
		});
		
	}
	
};
