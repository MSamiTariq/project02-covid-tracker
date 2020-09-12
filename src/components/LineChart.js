import React, { useEffect, useContext } from 'react'
import { Line } from 'react-chartjs-2'
import { GlobalContext } from '../context/Context';
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


const LineChart = ({ countryName }) => {
    const { isLoading, lineChartData, setLineChartData } = useContext(GlobalContext);
    const classes = useStyles();

    const fetchData = async () => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        const url = `https://api.covid19api.com/total/dayone/country/${countryName}`;

        const response = await fetch( url, requestOptions);
        const text = await (response.json());
        setLineChartData(text);
    }

    useEffect(() => { fetchData(); }, [countryName]);


    return (

        <div>
            <Paper className={classes.paper} elevation={3}>
                <Typography variant="h6" component="h6" align="left" color="textPrimary">Infection Trend</Typography>
                {
                    isLoading ?
                        <Box
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            className={classes.loadingBox}
                        >
                            <CircularProgress color="secondary" />
                        </Box>
                        :
                        <Box
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Line data={lineChartData} />
                        </Box>
                }
            </Paper>
        </div>
    )
}

export default LineChart
