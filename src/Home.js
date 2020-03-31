import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import NavbarAndLineText from './NavbarAndLineText';
import ColourSlider from './components/ColourSlider';
import MyInput from './components/MyInput';
import { Radio, RadioGroup, FormControl, FormControlLabel, 
    Typography, Button } 
from '@material-ui/core/';
import AddDate from './components/AddDate';



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

    
  render(){
 
    return(
        <>
       
            <div>
                <NavbarAndLineText />
            </div>
            <br />
            <AddDate />
            <br />
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
                <ColourSlider /> 
            </div>
            <br/>
            <br/>
            <br/>
            <div>
                <MyInput /> 
            </div>        
        </>
    );
  
 }

}