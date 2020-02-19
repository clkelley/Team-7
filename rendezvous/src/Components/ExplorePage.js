import React from 'react';
import { MenuIcon, SearchIcon } from '@material-ui/icons/Menu';
import {Chip} from '@material-ui/core';
import Firebase from 'firebase'
import { db } from '../firebase';
import SearchBar from './SearchBar'
import EventCard from './EventCard'

class ExplorePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      matches: {}
    };

    this.handleInput = event => this.handleSearch(event);
    this.searchEvents = event => this.search(event);
    this.handleNewSearch = this.handleNewSearch.bind(this);
  }

  handleSearch(event) {
  	this.setState({ searchTerm: event.target.value });
 }


 handleNewSearch(dataFromChild) {
    this.setState({matches: dataFromChild});
 }

render() {
    const events = [];
    for(let i =0; i < this.state.matches.length; i++){
      events.push(<EventCard category = {this.state.matches[i]['category']} location = {this.state.matches[i]['location']}/>)
    }

    return (
      <div>
        <div> <SearchBar callback = {this.handleNewSearch}/> </div>
        {events}
      </div>
    );
  }
}

export default ExplorePage;
