import React, { useState, useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import NumberFormat from 'react-number-format';
import { GlobalContext } from '../context/Context';
import Cards from './Cards';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
// import Skeleton from '@material-ui/lab/Skeleton';
import Variant from './Variant';
// import ChipComponent from './ChipComponent';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: '23%',
            height: '117px',
        },
    },
}));

const useStylesTypography = makeStyles({
    root: {
        width: '100%',
        maxWidth: 500,
        marginTop: 20,
    },
});


export default function GlobalData() {
    const { cardData,
        pieChartData,
        doughnutChartData,
        gridTableData,
        selectedCountry,
        isLoading,
        globalData,
        lineChartData,
        setCardData,
        setDoughnutChartData,
        setPieChartData,
        setGridTableData,
        setSelectedCountry,
        setData,
        setGlobalData,
        setLineChartData } = useContext(GlobalContext);

    const classes = useStyles();
    const classesTypography = useStylesTypography();

    const fetchData = async () => {
        var requestOptions = {
            method: 'GET'
        };
        const response = await fetch("https://api.covid19api.com/summary", requestOptions);
        const result = await response.json();
        // console.log(text);
        setGlobalData(result.Global);
        setData(result.Global);
        setGridTableData(result.Countries);
    }

    useEffect(() => { fetchData(); }, []);

    if (isLoading) {
        return (
            <div className={classes.root}>
                <Card className={classes.root}>
                    <CardContent>
                        <Typography variant="h6" component="h6">
                            <Variant />
                        </Typography>
                        <Typography variant="h4" component="h4" align="right">
                            <Variant />
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary" align="right">
                            <Variant />
                        </Typography>
                    </CardContent>
                </Card >

                <Card className={classes.root}>
                    <CardContent>
                        <Typography variant="h6" component="h6">
                            <Variant />
                        </Typography>
                        <Typography variant="h4" component="h4" align="right">
                            <Variant />
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary" align="right">
                            <Variant />
                        </Typography>
                    </CardContent>
                </Card >

                <Card className={classes.root}>
                    <CardContent>
                        <Typography variant="h6" component="h6">
                            <Variant />
                        </Typography>
                        <Typography variant="h4" component="h4" align="right">
                            <Variant />
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary" align="right">
                            <Variant />
                        </Typography>
                    </CardContent>
                </Card >

                <Card className={classes.root}>
                    <CardContent>
                        <Typography variant="h6" component="h6">
                            <Variant />
                        </Typography>
                        <Typography variant="h4" component="h4" align="right">
                            <Variant />
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary" align="right">
                            <Variant />
                        </Typography>
                    </CardContent>
                </Card >



               
            </div>


        );
    }
    else {
        return (
            <Cards />
        );
    }


}
