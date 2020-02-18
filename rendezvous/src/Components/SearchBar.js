import React from 'react';
import './SearchBar.css';
import FilterCategory from './FilterCategory';
import Grid from '@material-ui/core/Grid';
import { MenuIcon, SearchIcon } from '@material-ui/icons/Menu';
import {Chip} from '@material-ui/core';
import Firebase from 'firebase'
import { db } from '../firebase';

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
    this.search(event)
  	this.setState({ searchTerm: event.target.value });
 }

 search(event) {
   db.collection("event_search")
   .where("category", "==", "u" )
   .get()
   .then(querySnapshot => {
     const data = querySnapshot.docs.map(doc => doc.data());
     this.setState({matches: querySnapshot.docs}, this.props.callback(querySnapshot.docs))
   })
 }

  render() {
    return (
    	<Grid container spacing={1}>
      		<Grid item xs={5}><input className="inputBar" onChange={this.handleInput} placeholder="Explore Events"></input></Grid>
      		<Grid item ><button onclick={this.searchEvents} className="searchButton">Search</button></Grid>
      		<Grid item xs={12}><FilterCategory className="filterCategory" /></Grid>

    	</Grid>
    );
  }
}

export default SearchBar;
