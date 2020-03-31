import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import NavbarAndLineText from './NavbarAndLineText';
import { Radio, RadioGroup, FormControl, FormControlLabel, 
    Typography, Button, TextField, Checkbox } 
from '@material-ui/core/';



const UpdateTypographyA = () => {
    return(<Typography variant='h6' className='update-typography'> Colour Application</Typography>);
}

const UpdateTypographyB = () => {
    return(<Typography variant='h6' className='update-typography'> Click 'Update' from the Menu Icon to change 'Colour Application' Text. Also, Click the Menu Icon and then 'About' Menu Item. An Information Dialog will open. Finally, click on 'Update' button, in Dialog Actions to update this game!</Typography>);
}

export class Home extends Component {

    state = {
        buttonClicked:false
    }
    handleButtonToggle = () => {
        this.setState( {buttonClicked: !this.state.buttonClicked} );

    }
    
    state = {
        radioClicked:false
    }

    handleRadioToggle = () => {
        this.setState( {radioClicked: !this.state.radioClicked} );
    }

    state = {
        input: 0
    }

    newInputSet = (newInput) => {
        this.setState( {input: newInput} );
    }
   
    
  render(){
 
    return(
        <>
       
            <div>
                <NavbarAndLineText />
            </div>
            {this.state.buttonClicked? <UpdateTypographyB /> : <UpdateTypographyA />}
                <Button component= {Link} to="/about" variant="contained" >
                    Game room
                </Button>
                <Button onClick={()=> this.handleButtonToggle()} variant="contained" color="primary">
                    Instruction
                </Button>
            <div className='border-bg'>
            <div className='border-radio'>
                <div className={ this.state.radioClicked  ? 'colour-style2' : 'colour-style' }>
                    Colour
                </div>

                <div>
                <FormControl component='fieldset'>
                    <RadioGroup onChange={this.handleRadioToggle}>
                        <FormControlLabel value='first colour' control={ <Radio /> } label='First Colour' />
                        <FormControlLabel value='second colour'   control={ <Radio /> } label='Second Colour'/>
                    </RadioGroup>
                </FormControl>
                </div>
            </div>
            </div>
            <div>
                <form className="form-class" noValidate autoComplete="off">
                    <TextField id="outlined-basic" label="Outlined" value={this.state.input}
                    variant="outlined" />
                </form>
                <Checkbox color="primary" onClick={()=> this.newInputSet(1)}/>
                <Checkbox color="primary" onClick={()=> this.newInputSet(0)}/>
                <Checkbox color="primary" onClick={()=> this.newInputSet(1)}/>
                <Checkbox color="primary" onClick={()=> this.newInputSet(0)}/>
                <Checkbox color="primary" onClick={()=> this.newInputSet(1)}/>
                <Checkbox color="primary" onClick={()=> this.newInputSet(0)}/>
                <Checkbox color="primary" onClick={()=> this.newInputSet(1)}/>
                <Checkbox color="primary" onClick={()=> this.newInputSet(0)}/>
            </div>          
        </>
    );
  
 }

}