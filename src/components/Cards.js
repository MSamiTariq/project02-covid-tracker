import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CountUpText from './Countup';
import {GlobalContext} from '../context/Context';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minWidth: '80px',
  },
  paper: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '120px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'

  },
}));

const useStylesTypography = makeStyles({
    root: {
        width: '100%',
        height: '100px',
        marginTop: 40,
        textAlign: 'center'
    },
});

export default function Cards() {
  const classes = useStyles();
  const classesTypography = useStylesTypography();
  const {cardData} = useContext(GlobalContext);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
        <Paper elevation={3} className={classes.paper}>
                    <div className={classesTypography.root}>
                        <Typography variant="h4" gutterBottom style={{ color: 'black', margintop: '20px'}}>
                            <CountUpText number={cardData[0].totalCount} fontSize="h4" />
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom style={{ color: 'black', fontWeight: 'bold', textAlign: 'center' }}>
                            Confirmed Cases as of today
                        </Typography>
                    </div>
                </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
        <Paper elevation={3} className={classes.paper}>
                    <div className={classesTypography.root}>
                        <Typography variant="h4" gutterBottom style={{ color: 'orange' }}>
                            <CountUpText number={cardData[1].totalCount} fontSize="h4" />
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom style={{ color: 'orange', fontWeight: 'bold' }}>
                            Active cases as of today
                        </Typography>
                    </div>
                </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
        <Paper elevation={3} className={classes.paper}>
                    <div className={classesTypography.root}>
                        <Typography variant="h4" gutterBottom style={{ color: 'blue' }}>
                            <CountUpText number={cardData[2].totalCount} fontSize="h4" />
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom style={{ color: 'blue', fontWeight: 'bold' }}>
                            Recoveries as of today
                        </Typography>
                    </div>
                </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
        <Paper elevation={3} className={classes.paper}>
                    <div className={classesTypography.root}>
                        <Typography variant="h4" gutterBottom style={{ color: 'red' }}>
                            <CountUpText number={cardData[3].totalCount} fontSize="h4" />

                        </Typography>
                        <Typography variant="subtitle2" gutterBottom style={{ color: 'red', fontWeight: 'bold' }}>
                            Fatalities as of today
                        </Typography>
                    </div>
                </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
