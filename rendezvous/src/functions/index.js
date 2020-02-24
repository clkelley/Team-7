// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');



// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp();





// Listen for changes in all documents in the 'users' collection and all subcollections
exports.kMeans = functions.firestore
.document('event_data/{eventNum}/num_sold/{ticketsSold}')
.onUpdate((change, context) => {
		// If we set `/users/marie/incoming_messages/134` to {body: "Hello"} then
		// context.params.userId == "marie";
		// context.params.messageCollectionId == "incoming_messages";
		// context.params.messageId == "134";
		// ... and ...
		// change.after.data() == {body: "Hello"}

		const data = change.after.data();
		const prevData = change.before.data();

		const sold = data.num_sold;
		const prevSold = prevData.num_sold;

		//Check if the number of tickets sold is the change
		//And we have reached our limit
		if(sold !== prevSold && sold === 15){


		// do something with the response
		response= runPyScript('data to process');
		console.log(response);

		}
});
#runs our python script using kmeans
function runPyScript(input){
	var jqXHR = $.ajax({
		type: "POST",
		url: "../../kmeans.py",
		async: false,
		data: { param: input }
	});
	return jqXHR.responseText;
}
