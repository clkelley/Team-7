import React from 'react';
import './FilterCategory.css';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Grid from '@material-ui/core/Grid';
import {Chip, Popover, List, ListItem, Checkbox, ListItemIcon, ListItemText} from '@material-ui/core';
import FilterPopoverContent from './FilterPopoverContent';


class FilterCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateFilters: [],
      catFilters: [],
      locFilters: [],
      timeFilters: [],
      costFilters: [],
      anchor: null,
      popup_open: false,
      curFil: null,
      
    };
    
    this.openPopup = event => this.openPopup2(event);
    this.closePopup = event => this.closePopup2(event);
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
        	<FilterPopoverContent elem={this.state.curFil} />
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
