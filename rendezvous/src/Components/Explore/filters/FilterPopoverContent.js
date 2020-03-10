import React from 'react';
import './FilterPopoverContent.css';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Grid from '@material-ui/core/Grid';
import {Chip, Popover, List, ListItem, Checkbox, ListItemIcon, ListItemText, TextField} from '@material-ui/core';

import CostPopup from './CostFilter';
import TimePopup from './TimeFilter';
import CatPopup from './CategoryFilter';
import DatePopup from './DateFilter';

function LocationPopup() {
	return<TextField variant="outlined" defaultValue="Palo Alto, Ca"> </TextField>;
}

class FilterPopoverContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	active: this.props.elem,
    	timeFils: this.props.filterArr.timeFilters,
    	costFils: this.props.filterArr.costFilters,
    	catFils: this.props.filterArr.catFilters,
    	dateFils: this.props.filterArr.dateFilters,
    	
    };
    
    this.changeTime = this.changeTime.bind(this);
    this.changeCost = this.changeCost.bind(this);
    this.changeCat = this.changeCat.bind(this);
    this.changeDate = this.changeDate.bind(this);

  }
  
  changeTime(dataFromChild) {
  	this.setState({timeFils: dataFromChild}, this.props.updateFilters(this.state.timeFils, "time"));
  }
  
  changeCost(dataFromChild) {
  	this.setState({costFils: dataFromChild}, this.props.updateFilters(this.state.costFils, "cost"));
  }
  
  changeCat(dataFromChild) {
  	this.setState({catFils: dataFromChild}, this.props.updateFilters(this.state.catFils, "cat"));
  }
  
  changeDate(dataFromChild) {
  	this.setState({dateFils: dataFromChild}, this.props.updateFilters(this.state.dateFils, "date"));
  }
  
  render() {
  	
  	if(this.state.active === "catChip")return<CatPopup curFils={this.state.catFils} changeCat={this.changeCat}/>;
  	else if(this.state.active === "timeChip")return<TimePopup curFils={this.state.timeFils} changeTime={this.changeTime}/>;
  	else if(this.state.active === "costChip")return<CostPopup curFils={this.state.costFils} changeCost={this.changeCost}/>;
  	else if(this.state.active === "locChip")return<LocationPopup />;
  	else if(this.state.active === "dateChip")return<DatePopup curFils={this.state.dateFils} changeDate={this.changeDate}/>;
  	else return <div> no filter selected </ div>;
  
  
  }

};

export default FilterPopoverContent;
