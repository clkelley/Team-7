//npm install jQuery
//<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>


//const axios = require('axios');
//nScriptPath = '../../kmeans.py';

// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');



// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');


const kmeans = require('ml-kmeans');

const math = require('mathjs');


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
.onUpdate(async (change, context) => {

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

    const event_id = prevData.eventId;

    const max_capacity = data.max_capacity;


    let ans = "default";

    var list_of_attendees = []
    var map_attendees;

		//Check if the number of tickets sold is the change
		//And we have reached our limit
		if(sold !== prevSold && sold >= max_capacity){
        console.log("We evaluated if as true");


        var db = admin.firestore();

        //This execute after we have finished the code
        await db.collection('event_visitors').doc(event_id.toString()).get().then(
          function(doc){
          if(doc.exists){
            console.log(doc.data());
            map_attendees = doc.data();
            for (let [key, value] of Object.entries(map_attendees)) {
                //console.log(`${key}: ${value}`);
                //Here key is the user_id, value is just a True
                list_of_attendees.push(key);
                console.log("---------------")
                console.log(key);
                //Pull each users survey

            }
          }
          return "success";
        }).catch(function(error){
          throw new Error("profile doesnt exist.");
      })

      //Weight
      //var w = [1,1,1,1];
      //(async () =>{
      console.log(list_of_attendees);
      var list_of_list = [];
      // list_of_attendees.forEach (user_id => {
      /* eslint-disable no-await-in-loop */
      for (const i in list_of_attendees){
          user_id = list_of_attendees[i];

      //for (const [index, val] of Object.values(list_of_attendees).entries()) {
            //var user_id = index;
            console.log("we are currently searching for answers by: ")
            console.log(user_id)
            var list_of_answers = [];

            //Force this chunk to be async

            await db.collection('user_questionaire').doc(user_id).get().then(
            function(doc){
            console.log("doc exists:");
            console.log(doc);
            if(doc.exists){


                //console.log(doc.data());
                map_attendees = doc.data();
                console.log("answer data below:");
                console.log(map_attendees);
                //Loops through every one of this user's answers and creates list of responses
                //var i = 0;
                var sorted_keys = Object.keys(map_attendees).sort();
                for (var j in sorted_keys) {
                    key = sorted_keys[j];
                    //Adds each answer for this specific user
                    var answer_as_int = parseInt(map_attendees[key]);
                    list_of_answers.push(answer_as_int);
                }
                console.log("below is the list of answers");
                console.log(list_of_answers);
                list_of_list.push(list_of_answers);
            }
            console.log("We got here whether or not it exists");
            return "success";

            }).catch(function(error){
              console.log(error);
              throw new Error("Questionaire for user doesn't exist.");
          })
    //for each loop
      // });
      }
      /* eslint-disable no-await-in-loop */
      //await Promise.all(list_of_list);
      console.log(list_of_list);
      let data = list_of_list;
      //let centers = [[3,4,5,6], [100, 100,100,100], [5,6,7,8], [7,8,9,10]];


      //Creates randomly generated cluster centers
      var centers = [];


      //Switch 3 with sold /3
      var num_clusters =  sold/3;
      for (var i = 0; i < num_clusters;i++){
         centers.push(Array.from({length: 4}, () => math.floor(math.random() * 5 + 1)));
      }

      console.log("original centers are:");
      console.log(centers);
      ans = kmeans(data, num_clusters, { initialization: centers });
      console.log(ans);

      var map_of_groups = {};


      //Populates map_of_grups with each member of their group
      for (var j in list_of_attendees) {
          var next_user_id = list_of_attendees[j];
          if (ans.clusters[j] in map_of_groups){
              map_of_groups[ans.clusters[j]].push(next_user_id);
          }
          else{
                map_of_groups[ans.clusters[j]] = [next_user_id];
          }
      }

      //Ensures every group has at least 1:
      // if there is only 1, we set them to the nearest other group



      //sample: ans.centroids[0].centroid

     //var number_of_groups = Object.keys(map_of_groups).length;
     // console.log("Below is length of map_of_groups");
     // console.log(number_of_groups);
     for (var curr_group_id = 0; curr_group_id < num_clusters; curr_group_id++){
           //List of members of each group
            console.log("---------------------");
            console.log("We are looking for loners: ");
            console.log(curr_group_id);

            console.log("Overall matches looks like: ")
            console.log(map_of_groups);
             var curr_group_members = map_of_groups[curr_group_id];

             //if group is empty skip it
             if(curr_group_members === undefined){
                 //do nothing
             }
             else if(curr_group_members.length === 1){

                  //Individual's data
                  curr_group_data = ans.centroids[curr_group_id].centroid;
                  console.log("Found one!");
                  //Min is minimum length between individual and other centroids
                  var min_group_id = 0;
                  var user_data;
                  console.log("Our current group is: ");
                  console.log(curr_group_data);


                  console.log(ans.centroids[0].centroid);
                  var min =  Infinity;

                  //math.norm(ans.centroids[0].centroid - curr_group);
                  // console.log("Min is:");
                  // console.log(min);
                  // console.log("length of ans.centroids");
                  // console.log( ans.centroids.length);
                  for (var curr_centroid_id = 0; curr_centroid_id <
                          ans.centroids.length; curr_centroid_id++){
                      console.log("searching for nearest cluster!");

                      console.log("currently looking at the following centroid:");
                      console.log(curr_centroid_id);
                      curr_centroid = ans.centroids[curr_centroid_id].centroid;
                      console.log("contents of which was: ");
                      console.log(curr_centroid);
                      //L2 norm between each centroid and current user

                      //var dist_to_cluster = math.norm(curr_centroid-curr_group)

                      var dist_to_cluster = curr_group_data.map(function(item,index){
                        return item - curr_centroid[index];
                      })

                      dist_to_cluster = math.norm(dist_to_cluster)
                      if(dist_to_cluster !==0 && dist_to_cluster < min){
                         console.log("we found a new min distance: ")

                         min = dist_to_cluster;
                         min_group_id = curr_centroid_id;
                         console.log(min);
                      }
                      else if (dist_to_cluster === 0) {
                         console.log("We removed one");
                         //remove from list
                        user_data = curr_group_members[0];
                        console.log("removed has the following data");
                        console.log(user_data);
                        delete map_of_groups[curr_group_id];
                         //decrement counter
                        //curr_group_id--;
                      }

                  }
                  //Add individual to new new group
                  map_of_groups[min_group_id].push(user_data);
             }

        }
      console.log("Below is centroid info");
      console.log(map_of_groups);
      console.log(event_id);


      db.collection('event_matches').doc(event_id.toString()).set(map_of_groups);
  //end of if
    }
  //end of function
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
