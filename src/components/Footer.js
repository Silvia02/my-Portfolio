import React from 'react';
import {makeStyles} from '@material-ui/core';
import {BottomNavigation, BottomNavigationAction} from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';



const useStyles = makeStyles({
    root:{
        '&. MuiBottomNavigationAction-root':{
            minWidh: 0,
            maxWidth: 250,

        },
        "& .MuiSvgIcon-root": {
            fill: '#9F8B97',
            "&:hover": {
                fill: '#CB298B',
                fontSize:'1.8rem'

            }

        }

    }
})

const Footer = () => {

    const classes = useStyles();
    return (
        < >
        <BottomNavigation width='auto' style={{background:'#68003F'}}>


        <BottomNavigationAction
        href="https://github.com/Silvia02?tab=repositories"
        className={classes.root}
        style={{padding: 0}}
        icon={<GitHubIcon/>}
        />
       

    <BottomNavigationAction
      href="https://www.instagram.com/silvinhaunik/"
      className={classes.root}
        style={{padding: 0}}
        icon={<InstagramIcon/>}
        />

    <BottomNavigationAction
        href="https://www.linkedin.com/in/silvia-morais-b99106159/"
        className={classes.root}
        style={{padding: 0}}
        icon={<LinkedInIcon/>}
        />

        </BottomNavigation>
        </>
    )
}

export default Footer;
