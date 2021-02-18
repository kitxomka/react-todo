import React, {useState}from 'react'
import {Grid, Button, DialogActions, Dialog, DialogContent, DialogTitle} from '@material-ui/core'
import {TextField, Select, FormControl, InputLabel, MenuItem} from '@material-ui/core'



const FormDialog = (props) => {



    return (
        <Dialog open={props.open} onClose={props.handleClose} style={{minWidth: '60vw'}}>
           <DialogTitle id="form-dialog-title">Add Todo</DialogTitle>
           <DialogContent>
                <Grid container direction='column' spacing={2}>
                    <Grid item>
                        <TextField label='Todo text...' id="outlined-basic" variant="outlined"/>
                    </Grid>
                    <Grid item>
                        <FormControl variant='outlined' style={{width: '100%'}}>
                            <InputLabel id="priorityLabel">Priority</InputLabel>
                            <Select labelId="priorityLabel"  label="Priority">
                                <MenuItem value='hight'>Hight</MenuItem>
                                <MenuItem value='med'>Medium</MenuItem>
                                <MenuItem value='low'>Low</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>  
                    <Grid item >
                        <TextField variant='outlined' label='Due date' type='date' style={{width: '100%'}} InputLabelProps={{shrink: true}}></TextField>
                    </Grid>  
                </Grid>
           </DialogContent>
           <DialogActions>
                <Button  color="primary">Add</Button>
                <Button onClick={props.handleClose}>Cancel</Button>
           </DialogActions>
        </Dialog>
    )
}

export default FormDialog
