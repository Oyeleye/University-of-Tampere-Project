import React from 'react';
import { TextField, Checkbox, Button} from '@material-ui/core';


export default function MyInput() {
    const [firstNum, setFirstNum] = React.useState(0);
    const [secondNum, setSecondNum] = React.useState(0);
    const [thirdNum, setThirdNum] = React.useState(0);
    const [fourthNum, setFourthNum] = React.useState(0);
    const [fifthNum, setFifthNum] = React.useState(0);
    const [sixthNum, setSixthNum] = React.useState(0);
    const [seventhNum, setSeventhNum] = React.useState(0);
    const [eighthNum, setEighthNum] = React.useState(0);
    let inputValue = [firstNum,secondNum,thirdNum,fourthNum,fifthNum,
             sixthNum,seventhNum,eighthNum,
        ]

    const handleFirstNum = () => {
        setFirstNum(firstNum? firstNum=>0 : firstNum=>1);
    };
    const handleSecondNum = () => {
        setSecondNum(secondNum? secondNum=>0 : secondNum=>1);
    };
    const handleThirdNum = () => {
        setThirdNum(thirdNum? thirdNum=>0 : thirdNum=>1);
    };
    const handleFourthNum = () => {
        setFourthNum(fourthNum? fourthNum=>0 : fourthNum=>1);
    };
    const handleFifthNum = () => {
        setFifthNum(fifthNum? fifthNum=>0 : fifthNum=>1);
    };
    const handleSixthNum = () => {
        setSixthNum(sixthNum? sixthNum=>0 : sixthNum=>1);
    };
    const handleSeventhNum = () => {
        setSeventhNum(seventhNum? seventhNum=>0 : seventhNum=>1);
    };
    const handleEighthNum = () => {
        setEighthNum(eighthNum? eighthNum=>0 : eighthNum=>1);
    };

      
    return (
        <div style={{border:'solid green', marginTop:'50px', width:'30%'}}>
            <div>
                <form className="form-class" noValidate autoComplete="off">
                    <TextField id="outlined-basic" label="Outlined" value={inputValue}
                    variant="outlined" />
                </form>
                <form className="form-class" noValidate autoComplete="off">
                    <TextField id="outlined-basic" label="Outlined" 
                    variant="outlined" />
                </form>
                <Button color="primary" variant="contained" 
                    style={{marginLeft:"7rem"}}>
                        Convert
                </Button>
                <br/>
                <Checkbox color="primary" onClick={handleFirstNum}/>
                <Checkbox color="primary" onClick={handleSecondNum}/>
                <Checkbox color="primary" onClick={handleThirdNum}/>
                <Checkbox color="primary" onClick={handleFourthNum}/>
                <Checkbox color="primary" onClick={handleFifthNum}/>
                <Checkbox color="primary" onClick={handleSixthNum}/>
                <Checkbox color="primary" onClick={handleSeventhNum}/>
                <Checkbox color="primary" onClick={handleEighthNum}/>
            </div>  
        </div>
    )
}
