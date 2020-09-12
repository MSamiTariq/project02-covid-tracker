import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/Context';
import { Doughnut } from 'react-chartjs-2';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Box from "@material-ui/core/Box";
import Typography from '@material-ui/core/Typography'
import { CircularProgress } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: '50.5vh'
    },
    loadingBox: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: '50vh',
    }
}));

const DoughnutChart = ({ dataSet }) => {
    const classes = useStyles();
    const { isLoading, setDoughnutChartData } = useContext(GlobalContext);
    const fetchData = () => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("https://api.covid19api.com/summary", requestOptions)
            .then(response => response.json())
            .then(result => {
                let countries = result.Countries;
                countries.sort((a, b) => b.TotalConfirmed - a.TotalConfirmed)
                setDoughnutChartData(countries.slice(0, 10));
            })
            .catch(error => console.error('error', error));
    }
    useEffect(fetchData, []);

    return (
        

        <Paper className={classes.paper} elevation={3}>
            <Typography variant="h6" component="h6" align="left" color="textPrimary">Most Affected Countries</Typography>
            {
                isLoading ?
                    <Box
                        className={classes.loadingBox}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <CircularProgress color="secondary" />
                    </Box>
                    :
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Doughnut data={dataSet} />
                    </Box>
            }
        </Paper>
    )
}

export default DoughnutChart
