import React from 'react';
//import './App.css';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Slider from '@material-ui/core/Slider';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

function App() {
	const [startTime, setStartTime] = React.useState(new Date());
	const [endTime, setEndTime] = React.useState(new Date());
	
	const useStyles = makeStyles(theme => ({
		textField: {
			marginLeft: theme.spacing(1),
			marginRight: theme.spacing(1),
			width: 200,
		},
	}));
	
	const dtf = new Intl.DateTimeFormat("uk-EN", {year: 'numeric', month: 'numeric', day: 'numeric'}) 
	
	const classes = useStyles();
	
	const handleDateChange = (event) => {
		let duration = endTime.getTime() - startTime.getTime();
		if (event.target.value.length > 0) {
			let nd = new Date(event.target.value);
			setStartTime(nd);
			setEndTime(new Date(nd.getTime() + duration));
		}
	}
	
	const durationUpdate = (event, duration) => {
		let newEnd = new Date(startTime.getTime() + duration * 24*60*60*1000);
		setEndTime(newEnd);
	}
	
	const duration = (endTime.getTime() - startTime.getTime()) / 1000 / 60 / 60 / 24;
	
	return (
		<>
			<div>
				<Typography variant='h1'>Event timing</Typography>
				<Typography variant='h2'>From {dtf.format(startTime)} to {dtf.format(endTime)}</Typography>
				<TextField
					label="Event start date"
					type="date"
					onChange={(event) => {handleDateChange(event)}}
					defaultValue={startTime.toISOString().substring(0, 10)}
					className={classes.textField}
					InputLabelProps={{shrink: true}}
				/>
				<Typography id="slider-label" gutterBottom>
					Duration (days)
				</Typography>
				<Box style={{width: "50%"}}>
					<Slider
						value={duration}
						valueLabelDisplay="auto"
						step={1}
						min={1}
						max={100}
						onChange={durationUpdate}
					/>
				</Box>
			</div>
			<Button className='btn-style' variant='contained' component={Link} to='' color='inherit'>
				Return Home
			</Button>
		</>
	);
}

export default App;
