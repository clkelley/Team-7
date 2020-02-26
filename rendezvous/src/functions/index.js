//npm install jQuery
//<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>


//const axios = require('axios');
//nScriptPath = '../../kmeans.py';

// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');



// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');


const kmeans = require('ml-kmeans');


admin.initializeApp();




/*function get_attendees(event){
  // Get a database reference to our posts
  var db = admin.database();
  //const citiesRef = db.ref('event_visitors/0');
  //const citiesRef1 = db.ref('event_visitors/0/tj5r4VEk9QSp6G58aDm953Ifm6L2');
  //var ref = db.ref("event_visitors");

/*  ref.on("child_added", function(snapshot, prevChildKey) {
  var newPost = snapshot.val();
  console.log("Author: " + newPost.author);
  console.log("Title: " + newPost.title);
  console.log("Previous Post ID: " + prevChildKey);
});*/
  /*var doc_ref = db.collection("event_visitors").doc(event);
  doc_ref.get().then(function(doc){
    if(doc.exists){
      console.log(doc.data());
    }
    return "success";
  }).catch(function(error){
    throw new Error("profile doesnt exisr")
});}*/


// Listen for changes in all documents in the 'users' collection and all subcollections
exports.kMeans = functions.firestore
.document('event_data/{num_sold}')
.onUpdate((change, context) => {

		  console.log('I am a log entry!');


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

    const event_id = prevData.event_id;
    let ans = "default";

		//Check if the number of tickets sold is the change
		//And we have reached our limit
		if(sold !== prevSold && sold === '15'){


		// do something with the response
		    //response= runPyScript('data to process');

        let data = [[1, 1, 1], [1, 2, 1], [-1, -1, -1], [-1, -1, -1.5]];
        let centers = [[1, 2, 1], [-1, -1, -1]];

        ans = kmeans(data, 2, { initialization: centers });
        var db = admin.firestore();


        db.collection('event_visitors').doc('0').get().then(
        function(doc){
          if(doc.exists){
            console.log(doc.data());
          }
          return "success";
        }).catch(function(error){
          throw new Error("profile doesnt exisr");
      })



        console.log(ans);
        console.log("-----------------");
        console.log(db.doc('event_visitors/0'))

        console.log("-----------------");
		}
		console.log("also got here");
    return ans
});


//runs our python script using kmeans
/*function runPyScript(input){




  var pythonPath = "/kmeans.py";


    axios.post(pythonPath, {
        input_array: "hello",
      })
      .then((response) => {

	console.log(response.data);
	return response.data;
}).catch(function (error) {
    console.log(error);
  });





*/


//	var $ = require("jquery")
//	var jqXHR = $.ajax({
//		type: "POST",
//		url: "../../kmeans.py",
//		async: false,
//		data: { param: input }
//	});
//	return jqXHR.responseText;
