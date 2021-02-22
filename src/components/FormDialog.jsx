import React from 'react'

import FormComponent from './FormComponent'

import {Button,  DialogActions, Dialog, DialogContent, DialogTitle} from '@material-ui/core'


const FormDialog = (props) => {

    
    return (
        <Dialog open={props.open} onClose={props.handleClose} style={{minWidth: '60vw'}}>
           <DialogTitle id="form-dialog-title">{props.editMode ? 'Update ' : 'Add'} Todo</DialogTitle>
           <DialogContent>
                <FormComponent formik={props.formik}/>
           </DialogContent>
           <DialogActions>
                <Button onClick={props.handleClose}>Cancel</Button>
                <Button  color="primary" onClick={props.handleSubmit}>{props.editMode ? 'Update ' : 'Add'}</Button>
           </DialogActions>
        </Dialog>
    )
}

export default FormDialog
