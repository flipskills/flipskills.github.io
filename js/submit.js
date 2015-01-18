function submit(){
	console.log("Hello");

	this.submit(); this.reset(); return false;
	// $.ajax({
	//   dataType: 'jsonp',
	//   url: "http://getsimpleform.com/messages/ajax?form_api_token=4c8d34126c52221ab241246ba0712e3e",
	//   data: {
	//     name: "John",
	//     message: "Boston",
	//   }
	// }).done(function() {
	//   //callback which can be used to show a thank you message
	//   //and reset the form
	//   alert("Thank you, for contacting us");
	// });
}