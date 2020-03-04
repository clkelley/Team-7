/*
 * This holds all of the firebase functions:
 * kMeans:
 *		Our kMeans cloud function is triggered whenever the number of Tickets
 *    sold changes, it checks if we reached our limit of tickets, then
 *    matches all event goers into their groups and populates the Database
 *    with those groupings
 */


//Imports firebase functions
const functions = require('firebase-functions');
//Allows access to database
const admin = require('firebase-admin');
//Machine Learning library for k means
const kmeans = require('ml-kmeans');
//Math functions
const math = require('mathjs');


admin.initializeApp();
// Listen for changes in number of tickets sold for any event
exports.kMeans = functions.firestore
.document('event_data/{num_sold}')
.onUpdate(async (change, context) => {
    //Saves old values before change, and new values post change
		const data = change.after.data();
		const prevData = change.before.data();
		const sold = data.num_sold;
		const prevSold = prevData.num_sold;
    const event_id = prevData.eventId;
    const max_capacity = data.max_capacity;

    let ans = "default";

		//Keeps track of everyone going ot an event
    var list_of_attendees = []

		//Object that maps attendant to a boolean true
    var map_attendees;

		//Check if the number of tickets sold is the change
		//And we have reached our limit
		if(sold !== prevSold && sold >= max_capacity){
				// Keeps track of our database, firestore
        var db = admin.firestore();

        //asynchronously pulls down each user and populates list_of_attendees
        await db.collection('event_visitors').doc(event_id.toString()).get().then(
          function(doc){
          if(doc.exists){
            console.log(doc.data());
            map_attendees = doc.data();
						//Goes through every attendant and adds their name to list_of_attendees
            for (let [key, value] of Object.entries(map_attendees)) {
                //Here key is the user_id, value is just a True
                list_of_attendees.push(key);
                console.log("---------------")
                console.log(key);
            }
          }
          return "success";
        }).catch(function(error){
          throw new Error("profile doesnt exist.");
      })

			//Associates every user with a list of their answers
      var list_of_list = [];

			//Below: Bypasses error of pulling docs in a loop
			/* eslint-disable no-await-in-loop */

			//Loops through every attendee and puts their list of anwers into their
			//corresponding slot in list_of_list
      for (const i in list_of_attendees){
						//id of attendee
          	user_id = list_of_attendees[i];

            console.log("we are currently searching for answers by: ")
            console.log(user_id)

						//Temporary variable of this attendee's list of answers
            var list_of_answers = [];

						//asyncrhonously pulls down each of the answers and populates list_of_answers
            await db.collection('user_questionaire').doc(user_id).get().then(
            function(doc){
            	if(doc.exists){
								//Temporary variable of the map of question:answer for each attende
                map_attendees = doc.data();

								//Sorts the questions so there is 1 standard order
                var sorted_keys = Object.keys(map_attendees).sort();

								//Goes through each answer and adds to the list
                for (var j in sorted_keys) {
                    key = sorted_keys[j];
                    var answer_as_int = parseInt(map_attendees[key]);
                    list_of_answers.push(answer_as_int);
                }
								//Adds the list of answers for every user to the overall list_of_list
                list_of_list.push(list_of_answers);
            }
            return "success";
            }).catch(function(error){
              console.log(error);
              throw new Error("Questionaire for user doesn't exist.");
          })

      }
      /* eslint-disable no-await-in-loop */

      let data = list_of_list;

      //Creates randomly generated cluster centers
      var centers = [];
      var num_clusters =  sold/3;
      for (var i = 0; i < num_clusters;i++){
         centers.push(Array.from({length: 4}, () => math.floor(math.random() * 5 + 1)));
      }

			//Runs kmeans on our data
      ans = kmeans(data, num_clusters, { initialization: centers });

			//List of every group after k means
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

      //Ensures every group has at least 1 member:
      //if there is only 1, we set them to the nearest other group
     for (var curr_group_id = 0; curr_group_id < num_clusters; curr_group_id++){
			 				//Checks that each group has a member and if there's only 1,
							// adds to the closest group
             var curr_group_members = map_of_groups[curr_group_id];

             //if group is empty skip it
             if(curr_group_members === undefined){
                 //do nothing
             }
             else if(curr_group_members.length === 1){
                  //Individual's data
                  curr_group_data = ans.centroids[curr_group_id].centroid;
                  //finds the minimum length between itself and other clustesr
                  var min_group_id = 0;
                  var user_data;
                  var min =  Infinity;

									//Goes through each cluster
                  for (var curr_centroid_id = 0; curr_centroid_id <
                          ans.centroids.length; curr_centroid_id++){

                      curr_centroid = ans.centroids[curr_centroid_id].centroid;

                      //L2 norm between each centroid and current user
                      var dist_to_cluster = curr_group_data.map(function(item,index){
                        return item - curr_centroid[index];
                      })
                      dist_to_cluster = math.norm(dist_to_cluster)

											//Checks if it's a new min
                      if(dist_to_cluster !==0 && dist_to_cluster < min){
                         min = dist_to_cluster;
                         min_group_id = curr_centroid_id;
                      }

											//If distance is 0, we know it is our old cluster that only
											//had the one member so we delete the cluster
                      else if (dist_to_cluster === 0) {
												//Saves the user data so we can add to group later
                        user_data = curr_group_members[0];
                        delete map_of_groups[curr_group_id];
                      }
                  }
                  //Add individual to new new group
                  map_of_groups[min_group_id].push(user_data);
             }

        }
			//Populates our database with list of groups
      db.collection('event_matches').doc(event_id.toString()).set(map_of_groups);
    }
});
