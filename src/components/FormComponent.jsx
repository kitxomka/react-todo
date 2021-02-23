import React from 'react'


import {Grid, TextField, Select, FormControl, InputLabel, MenuItem} from '@material-ui/core'



const FormComponent = ({formik}) => {

    return (
        <Grid container direction='column' spacing={2}>
            <Grid item>
                <TextField label='Todo text...' id="outlined-basic" variant="outlined" name='todoText' 
                        onChange={formik.handleChange} value={formik.values.todoText}/>
            </Grid>
            <Grid item>
                <FormControl variant='outlined' style={{width: '100%'}}>
                    <InputLabel id="priorityLabel">Priority</InputLabel>
                    <Select labelId="priorityLabel"  label="Priority" name='priority' onChange={formik.handleChange} value={formik.values.priority}>
                        <MenuItem value='High'>High</MenuItem>
                        <MenuItem value='Med'>Med</MenuItem>
                        <MenuItem value='Low'>Low</MenuItem>
                    </Select>
                </FormControl>
            </Grid>  
            <Grid item >
                <TextField variant='outlined' label='Due date' type='date' style={{width: '100%'}} 
                        InputLabelProps={{shrink: true}} name="dueDate" onChange={formik.handleChange} value={formik.values.dueDate}> 
                </TextField>
            </Grid>  
        </Grid>

    )
}

export default FormComponent
