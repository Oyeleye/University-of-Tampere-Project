import React from 'react';
import './App.css';
import { Typography, AppBar, Toolbar, IconButton, 
    MenuItem, Menu, Button, Dialog, DialogActions, 
    DialogTitle, TextField } 
from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles({
    app: {
		textAlign: 'center', 
		backgroundColor: 'yellow',
    },
    typographyStyleA: {
        color: '#012161',
    },
    typographyStyleB: {
		color: 'rgb(223, 12, 12)',
		fontWeight: 'bold',
		fontSize: '4rem' 
	},
	dialogTitle: {
        color: '#084bd3',
	},
	updateDialog1: {
		color: '#084bd3'
	},
	updateDialog2: {
		color: 'orange'
	},
	navbarTypography: {
		fontWeight: 'bold'
	}
});



function App() {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [dialogOpen, setDialogOpen] = React.useState(false);
	const [dialogUpdate, setDialogUpdate] = React.useState(false);
	const [textChange, setTextChange] = React.useState(false);
	const [inputText, setInputText] = React.useState(false);

	const menuOpen = Boolean(anchorEl);

	const classes= useStyles();

	const GameTypographyA = () => {
		return( 
			<Typography className={classes.typographyStyleA} variant='h4'>Colour Application</Typography>
		);
	};

	const GameTypographyB = () => {
		return( 
			<Typography className={classes.typographyStyleB} variant='h4'>Oops! Game Over!!</Typography>
		);
	};
	
	const UpdateDialog1 = () => {
        return(
			<Typography className={classes.updateDialog1}
				variant='h4'>This is a very interesting colour game. There are 9 stages. Good luck!
			</Typography>);
    };

    const UpdateDialog2 = () => {
		return(
			<Typography className={classes.updateDialog2}
				variant='h4'>Congratulations! You have successfully updated this game!
			</Typography>);
    };

    const handleDialogUpdate = () => {
        setDialogUpdate(true);
	};
	
	const toggleTextUpdate = () => {
		setTextChange(textChange=>!textChange);
	};

	const handleMenu = event => {
		setAnchorEl(event.currentTarget);
	};
	const handleMenuClose = () => {
		setAnchorEl(null);
	};
	
	const openDialog = (event) => {
		handleMenuClose(event);
		setDialogOpen(true);
	}
	const closeDialog = (event) => {
		setDialogOpen(false);
	}
	const handleInputText = (event) => {
		setInputText(event.target.value);
	}

	return (
		<>
			<div className="nav">
				<AppBar position="static">
					<Toolbar>
						<div>
							<IconButton 
								edge="start" 
								color="inherit" 
								onClick={handleMenu}
							>
								<MenuIcon />
							</IconButton>
							<Menu
								id="menu-appbar"
								anchorEl={anchorEl}
								anchorOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								open={menuOpen}
								onClose={handleMenuClose}
							>
								<MenuItem onClick={openDialog}>About</MenuItem>
								<MenuItem onClick={toggleTextUpdate}>Update</MenuItem>
								<MenuItem component={ Link } to='/about'>Info</MenuItem>
								<MenuItem component={ Link } to='/adddate'>Add date</MenuItem>
							</Menu>
						</div>

						<Typography component={ Link } to='/about'  className='typography2' variant='h6' color='inherit'>
							File
						</Typography>
						<Typography component= { Link } to='/about' className='typography'  variant='h6' color='inherit'>
							Edit
						</Typography>
						<Typography component={ Link } to='/about'  className='typography'  variant='h6' color='inherit'>
							Help
						</Typography>
						<Typography component={ Link } to='/date'  className='typography'  variant='h6' color='inherit'>
							Date
						</Typography>
					</Toolbar>
				</AppBar>
				
				
				<Dialog onClose={closeDialog} open={dialogOpen}>
					<DialogTitle id="simple-dialog-title"> { dialogUpdate? <UpdateDialog2 /> : <UpdateDialog1 /> } </DialogTitle>
					<DialogTitle id="simple-dialog-title" className={classes.dialogTitle}> { inputText } </DialogTitle>
					<form className="form-class" >
						<TextField id="outlined-basic" label="Outlined"  onChange={handleInputText}
							variant="outlined" placeholder="Enter game"
						/>
                    </form>
					<DialogActions>
						<Button variant="contained" onClick={closeDialog}>Cancel</Button>
						<Button variant="contained" onClick={handleDialogUpdate} color='primary'>Update</Button>
					</DialogActions>
				</Dialog>	
			</div>
			<div className={classes.app}>
				{ textChange? <GameTypographyB /> : <GameTypographyA /> }
			</div>
			<div>
				{inputText}
			</div>
		</>
	);
}

export default App;
