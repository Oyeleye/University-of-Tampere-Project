import React from 'react';
import './App.css';
import { Typography, AppBar, Toolbar } from '@material-ui/core/';
import { Link } from 'react-router-dom';




function App() {

	return (
		<div className="nav">
			<AppBar position="static">
				<Toolbar>
                    <Typography component= { Link } to='/about' className='typography2' variant='h6' color='inherit'>
                        File
                    </Typography>
                    <Typography component= { Link } to='/about' className='typography'  variant='h6' color='inherit'>
                        Edit
                    </Typography>
                    <Typography component= { Link } to='/about' className='typography'  variant='h6' color='inherit'>
                        Help
                    </Typography>
				</Toolbar>
			</AppBar>
		</div>
	);
}

export default App;
