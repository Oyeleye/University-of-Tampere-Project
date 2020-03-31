import React from 'react';
import { Button, Box, List, ListItem, ListItemText, Typography, TextField } from '@material-ui/core';


export default function AddDate() {
    const [items, setItems] = React.useState(["2020-03-16"]);
    const [selected, setSelected] = React.useState(-1);

    const select = (event, index) => {
        setSelected(index);
    }
    const add = (event) => {
        setItems(items.concat(["2020-03-" + (items.length + 16)]));
    }
    const remove = (event) => {
        setItems(items.slice(0, selected).concat(items.slice(selected+1)));
    }
    const handleValueChange = (event, index) => {
        let itemsUpdated = items.slice(0, index).concat([event.target.value]);
        setItems(itemsUpdated);
    }
    return (
        <div className="border-bg">
            <Box>
                <List>
                    {items.map((item, index) => 
                            <ListItem
                                key={"dateListItem" + index}
                                button
                                selected={index === selected}
                                onClick={(event) => {select(event, index);}}
                            >
                                <ListItemText 
                                    key={"dateTest"}
                                    primary={<Typography>{item}</Typography>}
                                />
                                <TextField
                                    type="Date"
                                    id={"inputField_" + index}
                                    label="Date"
                                    onChange={(event) => {handleValueChange(event, index)}}
                                    value={item}
                                    InputLabelProps={{shrink: true}}
                                />
                            </ListItem>
                        )
                    }
                    <Button onClick={add} variant="contained" color='primary'>Add</Button>
                    <Button onClick={remove} variant="contained" color='secondary'>Remove</Button>
                </List>
            </Box>
        </div>
    )
}
