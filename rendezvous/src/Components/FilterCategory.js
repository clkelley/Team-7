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
      active: false
    };
  }

  render() {
  	
    return (
      <Grid container spacing={2} className="filterCategories">
        <Chip variant="outlined" label="Dates"></Chip>
        <Chip variant="outlined" label="Location"></Chip>
        <Chip variant="outlined" label="Time"></Chip>
        <Chip variant="outlined" label="Category"></Chip>
        <Chip variant="outlined" label="Cost"></Chip>
      </Grid>
    );
  }
}

export default FilterCategory;
