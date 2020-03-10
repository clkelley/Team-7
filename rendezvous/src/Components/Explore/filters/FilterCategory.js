import React from 'react';
import './FilterCategory.css';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Grid from '@material-ui/core/Grid';
import {Chip, Popover, List, ListItem, Checkbox, ListItemIcon, ListItemText} from '@material-ui/core';
import FilterPopoverContent from './FilterPopoverContent';
import Firebase from 'firebase';
import { db } from '../../../firebase';

class FilterCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateFilters: [],
      catFilters: [false, false, false, false, false, false, false],
      locFilters: "Palo Alto, Ca",
      timeFilters: [false, false, false],
      costFilters: [false, false, false, false],
      timeOptions: ["morning", "afternoon", "evening"],
	  costOptions : ["free", "under $20", "$20-$50", "$50+"],
	  catOptions : ["exercise", "music", "entertainment", "sports", "food", "drinks", "leisure"],
      anchor: null,
      popup_open: false,
      curFil: null,
    };
    
    this.openPopup = event => this.openPopup2(event);
    this.closePopup = event => this.closePopup2(event);
    
    this.updateFilters = this.updateFilters.bind(this);
    this.getSearchArray = this.getSearchArray.bind(this);

  }
  
  getSearchArray(str) {
  	let events = db.collection("event_data");
  	let returnArr = [];
  	
  	for(let i=0;i<this.props.eventArray.length;i++) returnArr.push(this.props.eventArray[i]);
  	
  	let timeEvents = [];
  	let costEvents = [];
  	let catEvents = [];
  	let dateEvents = [];
  	
  	//if the date filter has been set, filter the collection down
  	if((this.state.timeFilters.indexOf(true) != -1) & (this.state.timeFilters.indexOf(false) !== -1)) {
  		for (let i = 0; i < this.state.timeOptions.length; i++) {
  			if(this.state.timeFilters[i] === true) {
  				events.where("time", "==", this.state.timeOptions[i]).get().then( snapshot => {
  					if(!snapshot.empty) snapshot.forEach (doc => {
  						let eid = doc.data().eventId;
  						timeEvents.push(eid);
  					});
  				});
  			}
  		}
  		returnArr = timeEvents;
  	}
  	
  	if((this.state.catFilters.indexOf(true) != -1) & (this.state.catFilters.indexOf(false) !== -1)) {
  		for (let i = 0; i < this.state.catOptions.length; i++) {
  			if(this.state.catFilters[i] === true) {
  				events.where("category", "==", this.state.catOptions[i]).get().then( snapshot => {
  					if(!snapshot.empty) snapshot.forEach (doc => {
  						let eid = doc.data().eventId;
  						catEvents.push(eid);
  					});
  				});
  			}
  		}
  		returnArr = catEvents;
  	}
  	

  	if((this.state.costFilters.indexOf(true) != -1) & (this.state.costFilters.indexOf(false) !== -1)) {
  		for (let i = 0; i < this.state.costOptions.length; i++) {
  			if(this.state.costFilters[i] === true) {
  				events.where("cost", "==", this.state.costOptions[i]).get().then( snapshot => {
  					if(!snapshot.empty) snapshot.forEach (doc => {
  						let eid = doc.data().eventId;
  						costEvents.push(eid);
  					});
  				});
  			}
  		}
  		returnArr = costEvents;
  	}
  	
  	if(this.state.dateFilters.length > 0) {
		this.state.dateFilters.forEach(date => {
			events.where("date", "==", date).get().then( snapshot => {
  				if(!snapshot.empty) snapshot.forEach (doc => {
  					let eid = doc.data().eventId;
  					dateEvents.push(eid);
  				});
  			});
		});
		returnArr = dateEvents;
  	}
  	
  	this.props.callback(returnArr);
  }
  
  updateFilters (dataFromChild, filterToUpdate) {
  	if(filterToUpdate === "time") this.setState({timeFilters: dataFromChild, }, () => this.getSearchArray("time"));
  	else if (filterToUpdate === "cost") this.setState({costFilters: dataFromChild, }, () => this.getSearchArray("cost"));
  	else if (filterToUpdate === "cat") this.setState({catFilters: dataFromChild, }, () => this.getSearchArray("cat"));
  	else if (filterToUpdate === "date") this.setState({dateFilters: dataFromChild, }, () => this.getSearchArray("date"));
  	else console.log("error: need to pass a filter to be updated");
  }
  
  openPopup2(event) {
  	this.setState({anchor : event.currentTarget, popup_open:true, curFil:event.currentTarget.id});
  }
  
  closePopup2 (event) {
  	this.setState({anchor: null, popup_open: false});
  }

  render() {

  	const handleDelete = () => {
    	console.info('You clicked the delete icon.');
  	};
  	
	let dateItems = <div /> ;
	if(this.state.dateFilters.length > 0) dateItems = this.state.dateFilters.map(function(date,index) {

  		return (
  			<Chip variant="outlined" label={date} className="filter" onDelete={handleDelete} />
  		);
  	}.bind(this));
  	
  	let timeItems = <div /> ;
	if(this.state.timeFilters.length > 0) timeItems = this.state.timeFilters.map(function(time,index) {
  		if(time===true)return (
  			<Chip variant="outlined" label={this.state.timeOptions[index]} className="filter" onDelete={handleDelete} />
  		);
  		else return;
  	}.bind(this));
  	
  	let costItems = <div /> ;
	if(this.state.costFilters.length > 0) costItems = this.state.costFilters.map(function(cost,index) {
  		if(cost===true)return (
  			<Chip variant="outlined" label={this.state.costOptions[index]} className="filter" onDelete={handleDelete} />
  		);
  		else return;
  	}.bind(this));
  	
  	let catItems = <div /> ;
	if(this.state.catFilters.length > 0) catItems = this.state.catFilters.map(function(cat,index) {
  		if(cat===true)return (
  			<Chip variant="outlined" label={this.state.catOptions[index]} className="filter" onDelete={handleDelete} />
  		);
  		else return;
  	}.bind(this));

    return (

      <Grid container spacing={1} direction="column">
      <Grid container item xs={12} spacing={2} className="filterCategories">
        <Chip variant="outlined" label="Dates" className="dateChip" onClick={this.openPopup} id="dateChip"></Chip>
        <Chip variant="outlined" label="Location" className="dateChip" onClick={this.openPopup} id="locChip"></Chip>
        <Chip variant="outlined" label="Time" className="dateChip" onClick={this.openPopup} id="timeChip"></Chip>
        <Chip variant="outlined" label="Category" className="dateChip" onClick={this.openPopup} id="catChip"></Chip>
        <Chip variant="outlined" label="Cost" className="dateChip" onClick={this.openPopup} id="costChip"></Chip>
      </Grid>
      <Popover anchorEl={this.state.anchor} onClose={this.closePopup} open={this.state.popup_open} anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }} width="100px">
        <div id="popoverContent">
        	<FilterPopoverContent elem={this.state.curFil} updateFilters={this.updateFilters} filterArr={this.state}/>
        </div>
      </ Popover>
      <Grid container item xs={12} spacing={2} className="filterCategories2">
        {dateItems}
        {timeItems}
        {catItems}
        {costItems}
      </Grid>
      </Grid>
    );
  }
}

export default FilterCategory;
