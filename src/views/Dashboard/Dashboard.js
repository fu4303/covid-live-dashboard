import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import {
  Budget,
  TasksProgress,
  TotalProfit,
  LatestSales,
  UsersByDevice
} from './components';

import {fetchStats} from '../../api/api';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Dashboard = () => {
  const classes = useStyles();
  const [us, setusStats] = useState({})
  const [italy, setItaly] = useState({})
  const [spain, setSpain] = useState({})
  const [germany, setGermany] = useState({})
  const [india, setIndia] = useState({})
  const [china, setChina] = useState({})
  const [japan, setJapan] = useState({})
  const [france, setFrance] = useState({})


  const setData = (stateVariable, data, country) =>{
    let responseTransform = {
      ...data,
      country
    }
    stateVariable(responseTransform);
  }
  useEffect(()=>{
  fetchStats('US')
    .then((stats)=> setData(setusStats, stats.data, 'US'))
    fetchStats('ITALY')
      .then((stats)=> setData(setItaly, stats.data, 'ITALY'))
    fetchStats('SPAIN')
      .then((stats)=> setData(setSpain, stats.data, 'SPAIN'))
    fetchStats('GERMANY')
      .then((stats)=> setData(setGermany, stats.data, 'GERMANY'))
    fetchStats('INDIA')
      .then((stats)=> setData(setIndia, stats.data, 'INDIA'))
    fetchStats('CHINA')
      .then((stats)=> setData(setChina, stats.data, 'CHINA'))
    fetchStats('JAPAN')
      .then((stats)=> setData(setJapan, stats.data, 'JAPAN'))
    fetchStats('FRANCE')
      .then((stats)=> setData(setFrance, stats.data, 'FRANCE'))
  }, []);

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={4}
      >
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <Budget {...us}/>
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <Budget {...italy}/>
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <Budget {...spain}/>
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <Budget {...germany}/>
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <Budget {...india}/>
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <Budget {...china}/>
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <Budget {...japan}/>
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <Budget {...france}/>
        </Grid>
 {/*       <Grid
          item
          lg={4}
          md={6}
          xl={3}
          xs={12}
        >
          <UsersByDevice />
        </Grid>*/}


      </Grid>

    </div>
  );
};

export default Dashboard;
