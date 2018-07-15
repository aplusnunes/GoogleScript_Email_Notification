function myFunction() {
	var formResponses = FormApp.getActiveForm().getResponses();
	Logger.log(formResponses.length);
	var formResponse = formResponses[formResponses.length-1];
	var itemResponses = formResponse.getItemResponses();
	for (var j = 0; j < itemResponses.length; j++) {
		var itemResponse = itemResponses[j];
		Logger.log('Last response to the question "%s" was "%s"',
		itemResponse.getItem().getTitle(),
		itemResponse.getResponse());
	}
}