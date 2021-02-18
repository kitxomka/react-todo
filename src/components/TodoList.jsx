import React from 'react'
import {Grid, Paper, Typography, Chip} from '@material-ui/core'

const TodoList = (props) => {

    const todoHtml = props.todos.map(todo => {
                    return(
                        <Grid item>
                            <Paper elevation={2} style={{padding:'0.8rem'}}>
                                <Grid container justify='space-between' alignItems="center">
                                    <Grid item >
                                        <Typography variant="h6">{todo.val}</Typography>
                                    </Grid>
                                    <Grid item ><Chip color="primary" size="small" label= {todo.priority}/></Grid>
                                </Grid>
                                <Typography variant="body2">Due: {todo.due}</Typography>
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
