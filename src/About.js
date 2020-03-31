import  React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, AppBar, Toolbar as ToolBar, Typography } 
from '@material-ui/core/';




const UpdateTypographyA = () => {
    return(
        <Typography variant='h4'>
            Congratulations! You have successfully updated this game!
        </Typography>
    );
};

const UpdateTypographyB = () => {
    return(
        <Typography variant='h4'>
            This is a very interesting colour game. There are 9 stages. Good luck!
        </Typography>
    );
};

class About extends Component  {
    state = {
        clicked: false,
    }
    
    handleToggle = () => {
        this.setState( {clicked: !this.state.clicked} );
    }

    render () {

    return (
        <>
            <div>
                <AppBar position='static'>
                    <ToolBar>
                        <Typography variant='h6' color='inherit'>
                            About the Colour Game
                        </Typography>
                    </ToolBar>
                </AppBar>
            </div>
            {this.state.clicked? <UpdateTypographyA/> : <UpdateTypographyB/>}          
            <Button className='btn-style' variant='contained' component={Link} to='' color='inherit'>
                Return Home
            </Button>

            <Button onClick={()=>this.handleToggle()} variant='contained' color='primary'> Update Text </Button>
        </>
    );
}
}
export default About;