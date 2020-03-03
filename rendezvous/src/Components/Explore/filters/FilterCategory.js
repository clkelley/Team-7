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
      timeFilters: [false, true, false],
      costFilters: [true, true, false, false],
      anchor: null,
      popup_open: false,
      curFil: null,
      
    };
    
    this.openPopup = event => this.openPopup2(event);
    this.closePopup = event => this.closePopup2(event);
    
    this.updateFilters = this.updateFilters.bind(this);
    
    this.getSearchArray = this.getSearchArray.bind(this);

  }
  
  getSearchArray() {
  	let events = db.event_data;
  	
  	
  	return events;
  }
  
  updateFilters (dataFromChild, filterToUpdate) {
  	if(filterToUpdate === "time") this.setState({timeFilters: dataFromChild, }, () => console.log('after:' + this.state.timeFilters));
  	else if (filterToUpdate === "cost") this.setState({costFilters: dataFromChild, }, () => console.log('after:' + this.state.costFilters));
  	else if (filterToUpdate === "cat") this.setState({catFilters: dataFromChild, }, () => console.log('after:' + this.state.catFilters));
  	else if (filterToUpdate === "date") this.setState({dateFilters: dataFromChild, }, () => console.log('after:' + this.state.dateFilters));
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
