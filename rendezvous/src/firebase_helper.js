/*
* Populate the database with random values for a particular collection
*
* collection -- string with collection name
* id_array -- array of ids (strings) to use
* values -- array of value names
* possible_values -- dictionary of values mapped to array of possible_values

* EXAMPLE:
* var collection = "event_search";
* var values = ["category", "cost", "date", "location", "time"];
* var possible_values = {"category" : ["u", "v", "w", "x", "y"], "cost" : ["f", "g", "h", "i"], "date" : ["j", "k", "l", "m"], "location" : ["n", "o", "p", "q"], "time": ["r", "s", "t"]};
*/
export function set_random_database_values(collection, id_array, values, possible_values){
  var i;
  for (i in id_array){
    var vals = {};
    var v;
    for (v in values){
      var pos_val = possible_values[values[v]];
      var index = Math.floor(Math.random() * pos_val.length);
      vals[values[v]] =  pos_val[index];
    }
    db.collection(collection).doc(id_array[i].set(vals)
  }
}

/*
* Set a Database Collection to a Dictionary of values
*
* collection -- string with collection name
* document_id  -- string with id name (either EID, UID)
* values -- dictionary of keys mapped to their values
*/

export function set_database_values(collection, document_id, values){
  db.collection(collection).doc(document_id.toString()).set(values)
}
