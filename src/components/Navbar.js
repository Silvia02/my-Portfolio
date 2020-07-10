import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import MobilRightMenuSlider from '@material-ui/core/Drawer';
import Footer from './Footer';
import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemText,
    Avatar,
    Divider,
    List,
    Typography,
    Box,
    ListItemIcon
} from '@material-ui/core';
import {
    ArrowBack,
    AssignmentInd,
    Home,
    Apps,
    ContactMail
} from '@material-ui/icons';
import menina from '../portfolio-project-files/menina.jpg';

//CSS STYLES
const useStyles = makeStyles(theme => ({
    menuSliderContainer: {
        width:250,
        background: '#E5ABCE',
        height: '100%'

    },
    avatar: {
        display: 'block',
        margin: '0.5rem auto', //left auto
        width: theme.spacing(13),
        height: theme.spacing(13)

    },
    listItem:{
        color: '#CB298B'

    }

}));

const menuItems = [
   {
    listIcon: <Home/>,
    listText: 'Home',
    listPath: "/"
   },
   {
    listIcon: <AssignmentInd/>,
    listText: 'Resume',
    listPath: "/resume"
    },
    {
    listIcon: <Apps/>,
    listText: 'Portfolio',
    listPath: '/portfolio'
    },
    {
    listIcon: <ContactMail/>,
    listText: 'Contacts',
    listPath: '/contacts'
    }
    
]

const Navbar = () => {
    const [state, setState] = useState({
        right: false
    });

     const toggleSlider = (slider, open) => ()=> {
         setState({...state, [slider]: open});

     };
     const classes = useStyles();

     const sideList = slider => (
        <Box
         className ={classes.menuSliderContainer} 
         component= 'div'
         onClick={toggleSlider(slider, false)}
         
         >
        <Avatar  className= {classes.avatar} src= {menina} alt='menina linda'/> 
        <Divider/>
       <List>
           {menuItems.map((listItem, key) => (

           <ListItem button key= {key} component= {Link} to={listItem.listPath}>
               <ListItemIcon className= {classes.listItem}>{listItem.listIcon}</ListItemIcon>
               <ListItemText className= {classes.listItem} primary={listItem.listText}/>

           </ListItem>
            
            ))}

       </List>     
    </Box>

     )

    return (
     < >
    <Box component= 'nav'>
        <AppBar position='static' style={{background: '#68003F'}}>
            <Toolbar>
                <IconButton onClick= {toggleSlider('right', true)}>
                    <ArrowBack style={{ color: '#CB298B' }}/>
                </IconButton>
                <Typography variant= 'h5' style={{color: '#E5ABCE'}}>Portfolio</Typography>
                <MobilRightMenuSlider 
                anchor='right' 
                open= {state.right}
                onClose = {toggleSlider('right', false)}
                
                >
                    
                    {sideList('right')}
                    <Footer/>

                </MobilRightMenuSlider>
            </Toolbar>
        </AppBar>
    </Box>
  
    </>
    
    
    );
};

export default Navbar;