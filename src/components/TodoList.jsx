import React from 'react'

import {Grid, Paper, Typography, Chip, ButtonGroup, IconButton} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import DoneIcon from '@material-ui/icons/Done';

const TodoList = (props) => {

    const todoHtml = props.todos.map(todo => {

                    return(
                        <Grid item key={todo.id} id={todo.id}>
                            <Paper elevation={2} style={{padding:'0.8rem'}} >
                                <Grid container justify='space-between' alignItems="center">
                                    <Grid item >
                                        <Typography variant="h6" style={{textDecoration: todo.done ? "line-through" : ""}} >{todo.val}</Typography>
                                    </Grid>
                                    <Grid item ><Chip color="primary" size="small" label= {todo.priority}/></Grid>
                                </Grid>
                                <Typography variant="body2">Due: {todo.dueDate}</Typography>
                                <ButtonGroup variant='text' size='small' color="primary" style={{paddingTop: '12px'}}>
                                    <IconButton size='small' onClick={() => {props.handleDelete(todo.id)}}>
                                        <DeleteIcon />
                                    </IconButton>
                                    <IconButton size='small' onClick={() => {props.handeleEdit(todo)}}>
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton size='small' onClick={() => {props.handeleDone(todo)}} >
                                        <DoneIcon/>
                                    </IconButton>
                                </ButtonGroup>
                            </Paper>
                        </Grid>
                    ) 
                })

    return (
        <Grid container direction='column' spacing={2} style={{marginTop: '1.3rem'}}>
            {todoHtml}
        </Grid>
    )

}

export default TodoList
