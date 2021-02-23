import React from 'react'
import {Grid, Typography, Fab} from '@material-ui/core'

import AddIcon from '@material-ui/icons/Add';



const Header = (props) => {

    return(
        <Grid container alignItems='center' justify="space-between" style={{marginTop: '2rem'}} >
            <Grid item>
                <Typography variant="h3">TODO</Typography>
            </Grid>
            <Grid item>
                <Fab color="primary" aria-label="add" sixe='small' onClick={props.handleFabClick}>
                    <AddIcon />
                </Fab>
            </Grid>
        </Grid>
    )
}
    
export default Header
