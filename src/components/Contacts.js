import React from 'react';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import Navbar from './Navbar';
import {TextField, Typography, Button, Grid, Box } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';



const useStyles = makeStyles(theme =>({
    form:{
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        position:'absolute',
    },
    button: {
        marginTop:'1rem',
        color:'#CB298B',
        borderColor: '#CB298B'
    }

}))

const InputField = withStyles({
    root:{ //change the color of the label
        '& label.Mui-focused':{
            color: '#CB298B',
        },
        '& label':{
            color: '#68003F',
        },
        '& .MuiOutlinedInput-root':{
            '& fieldset':{
                borderColor: '#68003F',
            },
            '&:hover fieldset':{
                borderColor: '#68003F',
            },
         
            '&.Mui-focused fieldset':{
                borderColor: '#68003F',

            },

        },

    },                   

})(TextField); // can change styles on my label

    const Contacts = () => {

    const classes = useStyles();

    const hello = function(){
           alert('this form does not store data, it is just a demonstration')
       }
    return (
        < >
        
            <Navbar/>
            <Box component="div" style={{background:'#A98F9F', height:'100vh'}}>
                <Grid container justify='center'>
                    <Box component='form' className={classes.form}>
                        <Typography variant='h5' style={{color:'#CB298B', textAlign:'center', textTransform:'uppercase' }}>
                            Hire or contact me...
                        </Typography>
                        <InputField fullWidth={true}
                        label='Name' 
                        variant='outlined'
                        inputProps={{style:{color:'white'}}}
                         margin='dense' 
                         size='medium'/>
                        <br/>
                        <InputField fullWidth={true} 
                        label='Email' 
                        variant='outlined'
                        inputProps={{style:{color:'white'}}}
                         margin='dense' 
                         size='medium'/>
                        <br/>
                        <InputField fullWidth={true} 
                        label='Company name' 
                        variant='outlined' 
                        inputProps={{style:{color:'white'}}}
                        margin='dense' 
                        size='medium'/>
                        <br/>
                        <Button onClick={hello} className={classes.button} variant='outlined'
                         fullWidth={true} 
                         endIcon={<SendIcon/>}
                         >

                            contact me
                        </Button>
                        
                    </Box>
                </Grid>
            </Box>

        </>
    )
}

export default Contacts;