import React from 'react';
import './SearchBar.css';
import FilterCategory from './FilterCategory';
import { Grid, Button } from '@material-ui/core';
import { MenuIcon, SearchIcon } from '@material-ui/icons/Menu';
import {Chip} from '@material-ui/core';
import Firebase from 'firebase'
import { db } from '../firebase';
import logo from '../media/icon_transparent.png';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      matches: {}
    };

    this.handleInput = event => this.handleSearch(event);
    this.searchEvents = event => this.search(event);
  }

  handleSearch(event) {
  	this.setState({ searchTerm: event.target.value });
 }

  search(event) {
   db.collection("event_search")
   .where("category", "==", "u" )
   .get()
   .then(querySnapshot => {
     const data = querySnapshot.docs.map(doc => doc.data());
     this.setState({matches: data}, this.props.callback(data))
     console.log(data)
     console.log(this.state.matches)
     console.log(data[0]['category'])
   })
 }

  render() {
      //className="filterCategory"
    return (
    	<Grid container spacing={1} direction="column">
          <Grid container item xs={12} spacing={2} className="searchGrid" direction="row">
    		    <Grid item xs={1}><img className="logo" src={logo}></img></Grid>
      		  <Grid item xs={8}><input className="inputBar" onChange={this.handleInput} placeholder="Explore Events"></input></Grid>
      		  <Grid item xs={3}><Button onClick={this.searchEvents} color="primary" variant="contained" className="searchButton">Search</Button></Grid>
          </Grid>
          <Grid item xs={12}><FilterCategory  /></Grid>
    	</Grid>

    );
  }
}

export default SearchBar;
