import React from 'react'

import createPersistedReducer from 'use-persisted-reducer';

import { CssBaseline, Container } from '@material-ui/core'
import { Button, DialogActions, Dialog, DialogContent, DialogTitle } from '@material-ui/core'
import { Grid, TextField } from '@material-ui/core'
import { Select, FormControl, InputLabel, MenuItem } from '@material-ui/core'

import {appReducer, INITIAL_STATE} from './appReducer.js'
import {ACTIONS} from './actions'
import Header from './components/Header.jsx'
import Todo from './components/Todo.jsx'



// Seving to the local storage
const usePersistedReducer = createPersistedReducer('state');

const App = (props) => {

    const [state, dispatch] = usePersistedReducer(appReducer, INITIAL_STATE);

    const getCurrentDate = () => {
        const now = new Date();
        return now.toISOString().slice(0, 10);
      }

    const todoHtml = state.todos?.map(todo => { return <Todo key={todo.id} todo={todo} dispatch={dispatch} /> })

    return (
        <>
            <CssBaseline />
            <Container maxWidth="sm" style={{}}>
                <Header 
                    handleFabClick={() => dispatch({ type: ACTIONS.SET_DIALOG_OPEN_STATE, 
                    dialogOpen: true , 
                    currentInputValue: '', 
                    priority: 'Low',  
                    dueDate: getCurrentDate()})} 
                />
                <Dialog
                    open = {state.dialogOpen}
                    onClose={() => dispatch({ type: ACTIONS.SET_DIALOG_OPEN_STATE, dialogOpen:false })} 
                    style={{ minWidth: '60vw' }}
                >
                    <DialogTitle id="form-dialog-title">ADD TODO</DialogTitle>
                    <DialogContent>
                        <Grid container direction='column' spacing={2}>
                            <Grid item>
                                <TextField 
                                    label='Todo text...' 
                                    id="outlined-basic" 
                                    variant="outlined" 
                                    name='currentInputValue' value={state.currentInputValue || '' } 
                                    onChange={e => dispatch({ type: ACTIONS.SET_CURRENT_INPUT_VALUE, currentInputValue: e.target.value  })} 
                                />
                            </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogContent>
                        <Grid item>
                            <FormControl variant='outlined' style={{ width: '100%' }}>
                                <InputLabel id="priorityLabel">Priority</InputLabel>
                                <Select 
                                    labelId="priorityLabel" 
                                    label="Priority" 
                                    name='priority' 
                                    value={state.priority || 'Low'}  
                                    onChange={e => dispatch({ type: ACTIONS.SET_CURRENT_PRIORITY_VALUE, priority: e.target.value })} 
                                >
                                    <MenuItem value='High'>High</MenuItem>
                                    <MenuItem value='Med'>Med</MenuItem>
                                    <MenuItem value='Low'>Low</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        
                    </DialogContent>
                    <DialogContent>
                        <Grid item >
                            <TextField 
                                variant='outlined' 
                                label='Due date' 
                                type='date' 
                                style={{width: '100%'}} 
                                InputLabelProps={{shrink: true}}
                                name="dueDate"
                                value={state.dueDate}
                                onChange = {e => dispatch({ type: ACTIONS.SET_CURRENT_DUEDATE, dueDate: e.target.value })}
                            > 
                            </TextField>
                        </Grid>  
                    </DialogContent>
                    <DialogActions>
                        <Button variant="outlined" onClick={() => dispatch({ type: ACTIONS.SET_DIALOG_OPEN_STATE, dialogOpen: false })}>Cancel</Button>
                        <Button variant="outlined" color="primary" onClick={e => dispatch({ type: ACTIONS.ADD_TODO })}>ADD</Button>
                    </DialogActions>
                </Dialog>
            </Container>
            <Container maxWidth="sm">
                <Grid container direction='column' spacing={2} style={{ marginTop: '1.3rem' }}>
                    {todoHtml}
                </Grid>
            </Container>

        </>
    )
}



export default App