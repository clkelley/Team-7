import React from 'react';
import { MenuIcon, SearchIcon } from '@material-ui/icons/Menu';
import {Chip} from '@material-ui/core';
import Firebase from 'firebase'
import { db } from '../../firebase';
import SearchBar from './SearchBar'
import FilterCategory from './filters/FilterCategory'
import EventCard from '../EventCard'
import DisplayEvents from '../DisplayEvents'
import { Grid } from '@material-ui/core';

class ExplorePage extends React.Component {
  constructor(props) {
    super(props);
    
    let initialArr = [];
    let totalNumEvents = 10;
    for (let i =0; i<totalNumEvents; i++) initialArr.push(i);

    this.state = {
		searchTerm: "",
		allEvents: initialArr,
		filteredEvents: [0,1, 2, 3, 4, 5, 6, 7, 8, 9,10],
		matches: initialArr
    };

    this.searchEvents = this.searchEvents.bind(this);
    this.setSearchKey = this.setSearchKey.bind(this);
    this.setFilters = this.setFilters.bind(this);
  }
  
  setFilters(dataFromChild) {
  	this.setState({filteredEvents: dataFromChild});
  }
  
  setSearchKey(str) {
  	this.setState({searchTerm: str});
  }
  
  searchEvents() {
	let m = [];
	this.state.filteredEvents.forEach(eventIdNum => m.push(eventIdNum));
	for (let i = 0; i < this.state.filteredEvents.length; i++) {
		let name = "";
		let event = db.collection("event_data").doc(i.toString()).get().then (ev => {
			if (ev.exists) {
				name = ev.data().event_name;
				if(!name.includes(this.state.searchTerm)) delete m[m.indexOf(ev.data().eventId)];
				this.setState({matches: m});
			}	
		});
	}
  }


render() {

    return (
      <Grid container spacing={4}>
        <Grid item xs={12}> <SearchBar callback={this.searchEvents} callback2={this.setSearchKey} /> </Grid>
        <Grid item xs={12}><FilterCategory callback={this.setFilters} eventArray={this.state.allEvents}/></Grid>
        <Grid item xs={12}><DisplayEvents eventIds={this.state.matches} /> </Grid>
      </Grid>
    );
  }
}

export default ExplorePage;
