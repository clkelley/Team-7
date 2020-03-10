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
      anchor: null,
      popup_open: false,
      curFil: null,
      filtersOn : false,
      
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
  	
  	let times = ["morning", "afternoon", "evening"];
  	let timeEvents = [];
  	let costs = ["free", "under $20", "$20-$50", "$50+"];
  	let costEvents = [];
  	let cats = ["exercise", "music", "entertainment", "sports", "food", "drinks", "leisure"];
  	let catEvents = [];
  	let dateEvents = [];
  	
  	//if the date filter has been set, filter the collection down
  	if((this.state.timeFilters.indexOf(true) != -1) & (this.state.timeFilters.indexOf(false) !== -1)) {
  		for (let i = 0; i < times.length; i++) {
  			if(this.state.timeFilters[i] === true) {
  				events.where("time", "==", times[i]).get().then( snapshot => {
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
  		for (let i = 0; i < cats.length; i++) {
  			if(this.state.catFilters[i] === true) {
  				events.where("category", "==", cats[i]).get().then( snapshot => {
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
  		for (let i = 0; i < costs.length; i++) {
  			if(this.state.costFilters[i] === true) {
  				events.where("cost", "==", costs[i]).get().then( snapshot => {
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
        <Chip variant="outlined" label="2/22" className="filter" onDelete={handleDelete}></Chip>
        <Chip variant="outlined" label="2/23" className="filter" onDelete={handleDelete}></Chip>
        <Chip variant="outlined" label="Palo Alto, Ca" className="filter" onDelete={handleDelete}></Chip>
      </Grid>
      </Grid>
    );
  }
}

export default FilterCategory;
