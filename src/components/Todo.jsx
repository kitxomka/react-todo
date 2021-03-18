import React from 'react';

import {ACTIONS} from '../actions';
import {Grid, Paper, Typography, Chip} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
// import EditIcon from '@material-ui/icons/Edit';
import DoneIcon from '@material-ui/icons/Done';
import UndoIcon from '@material-ui/icons/Undo';


const Todo = ({ todo, dispatch }) => {
    return (
            <Grid item  id={todo.id} key={todo.id}>
                <Paper elevation={3} style={{padding:'0.8rem'}}>
                    <Grid container justify='space-between' alignItems="center" spacing={2}>
                        <Grid item xs={6}>
                           <Typography variant="h6" style={{ textDecoration: todo.complete ? "line-through" : "" }}>{todo.name}</Typography> 
                        </Grid>
                        <Grid item xs={6} style={{textAlign: 'end'}} >
                            <Chip 
                                color="primary" 
                                size="small" 
                                label= {todo.priority} 
                                onClick={() => dispatch({ type: ACTIONS.FILTER_BY_PRIORITY, payload: {priority: todo.priority}})} 
                            />
                        </Grid>
                        <Grid item >
                            <Typography variant="body2">Due: {todo.dueDate}</Typography>
                        </Grid>
                    </Grid>
                    <div style={{paddingTop: '12px'}}>
                        <IconButton size='small' onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload:{ id: todo.id}})}>
                            <DeleteIcon color="primary" />
                        </IconButton>
                        <IconButton size='small' onClick={() => dispatch({ type: ACTIONS.DONE_TODO, payload:{ id: todo.id}})}>
                            {
                                todo.complete ? <UndoIcon color="primary" /> : <DoneIcon color="primary" />
                            }
                        </IconButton>
                    </div >

                </Paper>
            </Grid>
    )
}


    



export default Todo
