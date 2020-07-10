import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {
    Box,
    Grid,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography

} from '@material-ui/core';
import Navbar from './Navbar';
import project1 from '../portfolio-project-files/images/html-css-javascript.jpg';
import project2 from '../portfolio-project-files/images/javascript-fullstack.jpg';
import project3 from '../portfolio-project-files/images/react.png';
import project4 from '../portfolio-project-files/images/react-redux.jpg';


const useStyles = makeStyles({
mainContainer:{
    background: '#A98F9F',
    height:'100%'

},
cardContainer:{
    maxWidth: 345,
    margin: '5rem auto'

}


});

export const Portfolio = () => {
    const classes = useStyles();
    return (
        <>
           
           <Box component="div" className={classes.mainContainer}>
           <Navbar/>
           <Grid container justify = "center">
               {/* Project 1 */}

            <Grid item xs={12} sm={8} md={6}>
               <Card className={classes.cardContainer}>
                   <CardActionArea>
                       <CardMedia
                       component='img'
                       alt= "Project 1"
                       height="140"
                       image={project1}
                       />

                      <CardContent>
                          <Typography gutterBottom variant='h5'>
                            Project 1
                          </Typography>
                          <Typography  variant='body2' color="textSecondary" component="p">
                            This was a project done during the html and css course
                            where my ability to make a page using these tools was presented.
                          </Typography>

                      </CardContent>
                      </CardActionArea>
                      <CardActions>
                        
                          <Button size="small" color="primary" href="http://silviamorais.se/Projekt-Bio-master%203/Homepage.html">
                              Show this project
                          </Button>
                      </CardActions>
            
               </Card>
               </Grid>
                 {/* Project 2 */}

            <Grid item xs={12} sm={8} md={6}>
               <Card className={classes.cardContainer}>
                   <CardActionArea>
                       <CardMedia
                       component='img'
                       alt= "Project 2"
                       height="140"
                       image={project2}
                       />

                      <CardContent>
                          <Typography gutterBottom variant='h5'>
                            Project 2
                          </Typography>
                          <Typography  variant='body2' color="textSecondary" component="p">
                            This is the project done during my intership, I used RestAPI, javascript and Node.js.
                          </Typography>

                      </CardContent>
                      </CardActionArea>
                      <CardActions>
                      
                          <Button size="small" color="primary" href="http://silviamorais.se/app-test/">
                          Show this project
                          </Button>
                      </CardActions>
                 
               </Card>
               </Grid>
                    {/* Project 3 */}

               <Grid item xs={12} sm={8} md={6}>
               <Card className={classes.cardContainer}>
                   <CardActionArea>
                       <CardMedia
                       component='img'
                       alt= "Project 2"
                       height="140"
                       image={project3}
                       />

                      <CardContent>
                          <Typography gutterBottom variant='h5'>
                            Project 3
                          </Typography>
                          <Typography  variant='body2' color="textSecondary" component="p">
                     This project is my own Portfolio, I used material UI and React.js to build this page.
                          </Typography>

                      </CardContent>
                      </CardActionArea>

                
               </Card>
               </Grid>

               {/* project 4 */}
               <Grid item xs={12} sm={8} md={6}>
               <Card className={classes.cardContainer}>
                   <CardActionArea>
                       <CardMedia
                       component='img'
                       alt= "Project 2"
                       height="140"
                       image={project4}
                       />

                      <CardContent>
                          <Typography gutterBottom variant='h5'>
                            Project 4
                          </Typography>
                          <Typography  variant='body2' color="textSecondary" component="p">
                        Did a course " The Complete React Js & Redux Course - Build Modern Web Apps " on 06/16/2020 as taught by Codestars by Rob Percival, Rayan Slim, Rob Percival, Jad Slim on Udemy. 
                        The certificate indicates the entire course was completed as validated by the student.
                          </Typography>

                      </CardContent>
                      </CardActionArea>

              
               </Card>
               </Grid>
               </Grid>

           </Box>
        </>
    )
}

export default Portfolio;
