import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Drawer from '@material-ui/core/Drawer';
import FormGroup from '@material-ui/core/FormGroup';
import Typography from '@material-ui/core/Typography';

function App() {
	const [drawerOpen, setDrawerOpen] = React.useState(false);
	const [name, setName] = React.useState("");
	const [nameEdited, setNameEdited] = React.useState("");
	
	const updateName = (event) => {
		setNameEdited(event.target.value);
	}
	const switchDrawer = (event) => {
		setDrawerOpen(!drawerOpen);
	}
	const closeDrawer = (event) => {
		setDrawerOpen(false);
	}
	const useName = (event) => {
		setName(nameEdited);
		setNameEdited("");
		closeDrawer();
	}
	
	return (
		<div className="App">
				<div>
					<Drawer open={drawerOpen} onClose={closeDrawer}>
						<FormGroup>
							<TextField 
								id={"name"} 
								value={nameEdited} 
								onChange={updateName} 
								label="Name: " 
							/>
						</FormGroup>
						<Button variant="contained" id={"doneButton"} onClick={useName}>Done</Button>
					</Drawer>
				</div>
			<Typography variant='h1'>
				Hello {name}!
			</Typography>
			<Button variant="contained" id={"startAdd"} onClick={switchDrawer}>Greet</Button>
		</div>
	);
}

export default App;
