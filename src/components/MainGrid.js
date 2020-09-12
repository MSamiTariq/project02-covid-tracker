import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import GlobalData from './GlobalData';
import GridTable from './Table';
import {GlobalContext} from '../context/Context';
import LineChart from './LineChart';
import Header from './Header';
import DoughnutChart from './DoughnutChart';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function MainGrid() {
  const {gridTableData, doughnutChartData, selectedCountry, pieChartData} = useContext(GlobalContext);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header gridTableData = {gridTableData} />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <GlobalData />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          
          <Paper className={classes.paper}>{
            selectedCountry ? <LineChart countryName = {selectedCountry} />: <DoughnutChart dataSet={doughnutChartData} />
          }
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <GridTable gridTableData = {gridTableData}/>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
