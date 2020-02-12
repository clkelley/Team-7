import React from 'react';
import './FilterCategory.css';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Grid from '@material-ui/core/Grid';

class FilterCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  render() {
  	
    return (
      <Grid container spacing={1}>
        <Grid item className="filter"> Dates </Grid>
        <Grid item className="filter"> Time </Grid>
        <Grid item className="filter"> Location </Grid>
        <Grid item className="filter"> Category </Grid>
        <Grid item className="filter"> Cost </Grid>
      </Grid>
    );
  }
}

export default FilterCategory;
