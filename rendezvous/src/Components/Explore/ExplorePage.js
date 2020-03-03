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
   
    this.state = {
		searchTerm: "",
		filteredEvents: [],
		matches: []
    };


    this.searchEvents = this.searchEvents.bind(this);
    this.setFilters = this.setFilters.bind(this);
  }
  
  setFilters(dataFromChild) {
  
  }
 
 searchEvents(searchStr) {
	console.log(searchStr);
 }


render() {
    const events = [1,2,3];

    return (
      <Grid container spacing={4}>
        <Grid item xs={12}> <SearchBar callback={this.searchEvents} /> </Grid>
        <Grid item xs={12}><FilterCategory callback={this.setFilters}/></Grid>
        <Grid item xs={12}><DisplayEvents eventIds={events} /> </Grid>
      </Grid>
    );
  }
}

export default ExplorePage;
