import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Paper from '@material-ui/core/Paper';

function App() {
	const [items, setItems] = React.useState([]);
	const [name, setName] = React.useState("");
	const [student, setStudent] = React.useState(false);
	
	const updateName = (event) => {
		setName(event.target.value);
	}
	const handleChange = (event, selected) => {
		setStudent(selected);
	}
	const add = (event) => {
		setItems(items.concat([{"name": name, "student": student}]));
	}

	return (
		<div className="App">
			<FormGroup>
				<TextField id={"name"} value={name} onChange={updateName} label="Name: " />
				<FormControlLabel
					control={<Switch checked={student} onChange={handleChange} value="student" />}
					label="Student"
				/>
			</FormGroup>
			<Button variant="contained" id={"addButton"} onClick={add}>Add</Button>
			<TableContainer component={Paper}>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Name</TableCell>
							<TableCell>Student</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{items.map((row, index) => (
							<TableRow key={row.name + "_" + index}>
								<TableCell component="th" scope="row">
									{row.name} 
								</TableCell>
								<TableCell>
									{row.student?"Student":"Not a student"}
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
}

export default App;
