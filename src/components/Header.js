import React, { useContext } from 'react';
import { GlobalContext } from '../context/Context';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        color: 'white'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    inputRoot: {
        color: "white",
    },
    clearIndicator:{
        color: 'white'
    },
    focused:{
        color: 'white',
        backgroundColor: fade(theme.palette.common.white, 0.2),
    },
}));


const Header = ({ gridTableData }) => {
    const { setData, globalData, setSelectedCountry } = useContext(GlobalContext);

    const classes = useStyles();
    const options = gridTableData.map((option) => {
        const firstLetter = option.Country[0].toUpperCase();
        return {
            firstLetter: firstLetter,
            ...option,
        };
    });

    const onCountrySelectionChange = (value) => {
        if (value) {
            setSelectedCountry(value.Country);
            setData(value);
        }
        else {
            setData(globalData);
            setSelectedCountry('');
        }
    }

    return (
        <div className={classes.root}>
            <AppBar position="sticky">
                <Toolbar>
                    <Typography className={classes.title} variant="h6" noWrap>
                        Corona Tracker
                   </Typography>
                        <Autocomplete
                            onChange={(event, value) => onCountrySelectionChange(value)}
                            size="small"
                            id="country-select-demo"
                            style={{ minWidth: 300 }}
                            options={options}
                            classes={{ inputRoot: classes.inputRoot, clearIndicator: classes.clearIndicator, focused: classes.focused }}
                            autoHighlight
                            getOptionLabel={option => option.Country}
                            getOptionSelected={(option, value) => option.Country === value.Country}
                            renderOption={option => (
                                <React.Fragment>
                                    {option.Country}
                                </React.Fragment>
                            )}
                            renderInput={params => (
                                <TextField
                                    {...params}
                                    label="Choose a country"
                                    variant="filled"
                                    inputProps={{
                                        ...params.inputProps
                                    }}
                                />
                            )}
                        />
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header
