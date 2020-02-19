import React from 'react';
import './FilterCategory.css';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Grid from '@material-ui/core/Grid';
import {Chip} from '@material-ui/core';


class FilterCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dates: false,
      location: false,
      time: false,
      category: false,
      cost: false
    };
  }

  render() {
  	
    return (
      <Grid >
      <Grid container spacing={2} className="filterCategories" xs={12} >
        <Chip variant="outlined" label="Dates" className="dateChip"></Chip>
        <Chip variant="outlined" label="Location" className="dateChip"></Chip>
        <Chip variant="outlined" label="Time" className="dateChip"></Chip>
        <Chip variant="outlined" label="Category" className="dateChip"></Chip>
        <Chip variant="outlined" label="Cost" className="dateChip"></Chip>
      </Grid>
      <Grid container spacing={2} className="filterCategories2" xs={12} >
        <Chip variant="outlined" label="2/22" className="filter"></Chip>
        <Chip variant="outlined" label="Palo Alto, Ca" className="filter"></Chip>
      </Grid>
      </Grid>
    );
  }
}

export default FilterCategory;
