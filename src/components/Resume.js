import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Typography, Box} from '@material-ui/core';
import Navbar from './Navbar';


const useStyles = makeStyles (theme => ({
mainContainer :{
    background: '#A98F9F'
},
timeLine:{
    position: 'relative',
    padding: '1rem',
    margin: '0 auto',
    '&:before': {
        content: "''",
        position: 'absolute',
        height: '100%',
        border: '1px solid tan',
        right: '40px',
        top: '0'
    },
    "&:after": {
        content: "''",
        display: 'table',
        clear: 'both'
    },
    [theme.breakpoints.up('md')]:{
        padding: '2rem',
        "&:before": {
            left: "calc(50% - 1px)",
            right:"auto"
        }

    }
},
    timeLineItem:{
        padding: '1rem',
        borderBottom: '2px solid tan',
        position: 'relative',
        margin: '1rem 3rem 1rem 1rem',
        clear: 'both',
        '&:after': {
            content: "''",
            position: 'absolute'
        },
        '&:before': {
            content: "''",
            position: 'absolute',
            right:'-0.625rem',
            top: 'calc(50% - 5px)',
            borderStyle: 'solid',
            borderColor: '#6A003C #6A003C transparent transparent',
            borderWidth: '0.625rem',
            transform: 'rotate(45deg)'
        },
        [theme.breakpoints.up('md')]:{
            width: '44%',
            margin: '1rem',
            '&:nth-of-type(2n)': {
                float: 'right',
                margin: '1rem',
                borderColor: '#9F8B97'

            },
            '&:nth-of-type(2n):before': {
                right: 'auto',
                left: '-0.625rem',
                borderColor: 'transparent transparent #6A003C #6A003C'

            }

        }

    },
    timeLineYear:{
        textAlign: 'center',
        maxWidth: '9.375rem',
        margin: '0 3rem 0 auto',
        fontSize: '1.8rem',
        background: '#CB298B',
        color: 'white',
        lineHeight: 1,
        padding: '0.5rem 0 1rem',
        '&:before': {
            display: 'none'
        },
        [theme.breakpoints.up('md')]:{
            textAlign: 'center',
            margin: '0 auto',
            '&:nth-of-type(2n)':{
                float: 'none',
                margin: '0 auto'
            },
            '&:nth-of-type(2n):before': {
                display: 'none'
            }
        }
    },
    heading: {
        color: '#6A003C',
        padding: '3rem 0',
        textTransform: 'uppercase'

    },
    subHeading: {
        color: 'white',
        padding: '0',
        textTransform: 'uppercase'


    }

}));


 const Resume = () => {
    const classes = useStyles();

    return (
        <>
         <Navbar/>
        <Box component='header' className={classes.mainContainer}>
            <Typography  variant="h5" align="center"  className= {classes.heading}>
               Education -
               JavaScript Developer Examen 2020
            </Typography>

            <Box component="div" className= {classes.timeLine}>
                <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}
                >2018
                </Typography>
            

            <Box component="div" className={classes.timeLineItem}>
                <Typography 
                variant="h5" 
                aligh="center"
                className={classes.subHeading}>
                    JavaScript - Node.js
                </Typography>

                <Typography variant="body1" aligh="center" style={{color: '#420025'}}>
                    Högskola, ECUtbildning

                </Typography>
                <Typography variant="subtitle1" aligh="center" style={{color: '#68003F'}}>
                Here is Included the most  concepts used in this language.
                Node.js knowledge in backend, build simples server and basic knowledge in threads.

                </Typography>

            </Box>
            <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}
                >2019
                </Typography>
            

            <Box component="div" className={classes.timeLineItem}>
                <Typography 
                variant="h5" 
                aligh="center"
                className={classes.subHeading}>
                    Angular - TypeScript - HTML5 - CSS3 
                </Typography>

                <Typography variant="body1" aligh="center" style={{color: '#420025'}}>
                Högskola, ECUtbildning

                </Typography>
                <Typography variant="subtitle1" aligh="center" style={{color: '#68003F'}}>
            A introdution to Angular, how to work with the components and its aspectos.
            TypeScript is a smart choice when writing a modern web- or JavaScript-based application.
            Html5 to understanding the how to build pages and CSS3 to style the page.

                </Typography>

            </Box>
            <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}
                >2020
                </Typography>
            

            <Box component="div" className={classes.timeLineItem}>
                <Typography 
                variant="h5" 
                aligh="center"
                className={classes.subHeading}>
                    React - UI
                </Typography>

                <Typography variant="body1" aligh="center" style={{color: '#420025'}}>
                Högskola, ECUtbildning

                </Typography>
                <Typography variant="subtitle1" aligh="center" style={{color: '#68003F'}}>
                Full understanding to create single-page React applications and components based.
                As state, render and props...

                </Typography>

            </Box>

            <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}
                >2020
                </Typography>
            

            <Box component="div" className={classes.timeLineItem}>
                <Typography 
                variant="h5" 
                aligh="center"
                className={classes.subHeading}>
                    Internship
                </Typography>

                <Typography variant="body1" aligh="center" style={{color: '#420025'}}>
                   IDG

                </Typography>
                <Typography variant="subtitle1" aligh="center" style={{color: '#68003F'}}>
                Used pure JavaScript to build an app who shows a stastitic from a user.
                Worked with Node to build a simple server, and RestApi to Get and Post the data. 

                </Typography>

            </Box>

        </Box>
        </Box>
      



        </>
    );
};

export default Resume;