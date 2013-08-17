sag.uwfb = {
	
	get: function () {
		var data = {
			title: "UW Football",
			styleClass: "badgers",
			games: [
				new sag.Game(new Date(2013, 07, 31, 11, 00), 1, "UMass", "BTN"),
				new sag.Game(new Date(2013, 08, 07, 11, 00), 1, "Tennessee Tech"),
				new sag.Game(new Date(2013, 08, 14, 21, 30), 0, "Arizona State"),
				new sag.Game(new Date(2013, 08, 21, 00, 00), 1, "Purdue"),
				new sag.Game(new Date(2013, 08, 28, 19, 00), 0, "Ohio State"),
				new sag.Game(new Date(2013, 09, 12, 14, 30), 1, "Northwestern"),
				new sag.Game(new Date(2013, 09, 19, 19, 00), 0, "Illinois"),
				new sag.Game(new Date(2013, 10, 02, 00, 00), 0, "Iowa"),
				new sag.Game(new Date(2013, 10, 09, 00, 00), 1, "BYU"),
				new sag.Game(new Date(2013, 10, 16, 00, 00), 1, "Indiana"),
				new sag.Game(new Date(2013, 10, 23, 00, 00), 0, "Minnesota"),
				new sag.Game(new Date(2013, 10, 30, 00, 00), 1, "Penn State")
			]
		};
		return data;
	},
	
	initialize: function () {
		
		jQuery("#uwfbLink").click(function () {
			sag.processData(sag.uwfb.get());
			return true;
		});
		
	}
	
};
