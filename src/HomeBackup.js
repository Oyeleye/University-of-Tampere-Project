import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { Radio, RadioGroup, FormControl, FormControlLabel, 
    Typography, Button } 
from '@material-ui/core/';



const UpdateTypographyA = () => {
    return(<Typography variant='h4'> Colour Application</Typography>);
}

const UpdateTypographyB = () => {
    return(<Typography variant='h4'> Click the Menu Icon and then 'About' Menu Item. An Information Dialog will open. Finally, click on 'Update' button, in Dialog Actions to update this game!</Typography>);
}

export default function Home () {
    const [buttonClicked, setButtonClicked] = React.useState(false);
    const [radioClicked, setRadioClicked] = React.useState(false);
    
/*  const handleButtonClicked = () => {
        setButtonClicked(buttonClicked => !buttonClicked);
    }
    const handleRadioToggle = () => {
        setRadioClicked(radioClicked => !radioClicked);
    }
*/
    
    return(
        <>
            <div>
                <Navbar />
            </div>
                {buttonClicked? <UpdateTypographyB /> : <UpdateTypographyA />}
                <Button component= {Link} to="/about" variant="contained">
                    Game room
                </Button>
                <Button onClick={()=>setButtonClicked(buttonClicked => !buttonClicked)} variant="contained" color="primary">
                    Instruction
                </Button>
            <div className='border-bg'>
            <div className='border-radio'>
                <div className={radioClicked? 'colour-style2' : 'colour-style' }>
                    Colour
                </div>

                <div>
                <FormControl component='fieldset'>
                    <RadioGroup onChange={()=>setRadioClicked(radioClicked => !radioClicked)}>
                        <FormControlLabel value='first colour' control={ <Radio /> } label='First Colour' />
                        <FormControlLabel value='second colour'   control={ <Radio /> } label='Second Colour'/>
                    </RadioGroup>
                </FormControl>
                </div>
            </div>
            </div>
        </>
    );
  
 }

