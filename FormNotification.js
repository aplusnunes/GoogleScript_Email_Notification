function GetFormResponse() {
	var form = FormApp.getActiveForm();
	var formResponses = form.getResponses();
	var formResponse = formResponses[formResponses.length-1];
	var itemResponses = formResponse.getItemResponses();
    var requestoritemResponse = itemResponses[0];
	var itemResponse = itemResponses[1];
	var storageitemResponse = itemResponses[11];
	var cpuitemResponse = itemResponses[9];
	var ramitemResponse = itemResponses[10];
	var template = HtmlService.createTemplateFromFile('CreatorNotification');
	template.qusetion = itemResponse.getItem().getTitle();
	template.responses = itemResponse.getResponse();
	template.storageanswer = storageitemResponse.getResponse();
	template.cpuanswer = cpuitemResponse.getResponse();
	template.ramanswer = ramitemResponse.getResponse();
    template.requestorname = requestoritemResponse.getResponse();
	template.title = form.getTitle();
	template.formUrl = form.getEditUrl();
	var message = template.evaluate();
	MailApp.sendEmail( {
		to:'ashton.nunes@e-hps.com' ,
		subject: 'Server Build Request',
		htmlBody: message.getContent()
	});
}