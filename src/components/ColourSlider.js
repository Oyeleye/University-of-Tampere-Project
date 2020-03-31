import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
//import Paper from '@material-ui/core/Paper';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(theme =>({
        root: {
            height: 300
        },
        box: {
            padding: theme.spacing(4),
            textAlign: "center",
            borderRadius: "25px",
            position: "relative",
            margin: "10px 0",
            height: "300px",
            boxShadow: "0 2px 5px #ccc"
        },
        slider: {
            marginRight: theme.spacing(2),
            marginLeft: theme.spacing(2)
        }
    })
);

export default function ColourSlider() {
    const classes = useStyles();

    const [redValue, setRedValue] = React.useState(0);
    const [greenValue, setGreenValue] = React.useState(0);
    const [blueValue, setBlueValue] = React.useState(0);
    let rgb = [redValue,greenValue,blueValue]

    return (
        <div className = {classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={9} lg={6}>
                    <div className={classes.box} style={{ backgroundColor: `rgb(${rgb})` }}>
                        <Slider
                            style={{ color: "red", width: "2rem"}}
                            className={classes.slider} 
                            orientation="vertical"
                            aria-labelledby="vertical-slider"
                            value={redValue}
                            min={0}
                            step={1}
                            max={240}
                            onChange={(event, newValue) => {setRedValue(newValue);}}
                            valueLabelDisplay="auto"
                        />
                        <Slider
                            style={{ color:'green', width:"2rem"}}
                            className={classes.slider} 
                            orientation="vertical"
                            aria-labelledby="vertical-slider"
                            value={greenValue}
                            min={0}
                            step={1}
                            max={240}
                            onChange={(event, newValue) => {setGreenValue(newValue);}}
                            valueLabelDisplay="auto"
                        />
                        <Slider
                            style={{ color:'blue', width:"2rem"}}
                            className={classes.slider} 
                            orientation="vertical"
                            aria-labelledby="vertical-slider"
                            value={blueValue}
                            min={0}
                            step={1}
                            max={240}
                            onChange={(event, newValue) => {setBlueValue(newValue);}}
                            valueLabelDisplay="auto"
                        />
                    </div>
                </Grid>
            </Grid>


        </div>
    )
}
