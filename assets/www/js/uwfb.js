sag.uwfb = {
	
	get: function () {
		var data = {
			title: "UW Football",
			games: [
				new sag.Game(new Date(2011, 08, 01, 00, 00), 1, "Las Vegas"),
				new sag.Game(new Date(2011, 08, 10, 00, 00), 1, "Oregon State"),
				new sag.Game(new Date(2011, 08, 17, 00, 00), 0, "Northern Illinois"),
				new sag.Game(new Date(2011, 08, 24, 00, 00), 1, "South Dakota"),
				new sag.Game(new Date(2011, 09, 01, 00, 00), 1, "Nebraska"),
				new sag.Game(new Date(2011, 09, 15, 00, 00), 1, "Indiana"),
				new sag.Game(new Date(2011, 09, 22, 00, 00), 0, "Michigan State"),
				new sag.Game(new Date(2011, 09, 29, 00, 00), 0, "Ohio State"),
				new sag.Game(new Date(2011, 10, 05, 00, 00), 1, "Purdue"),
				new sag.Game(new Date(2011, 10, 12, 00, 00), 0, "Minnesota"),
				new sag.Game(new Date(2011, 10, 19, 00, 00), 0, "Illinois State"),
				new sag.Game(new Date(2011, 10, 26, 00, 00), 1, "Penn State")
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
	
}
