import { Avatar, Card, CardContent, Grid, makeStyles } from '@material-ui/core'
import Header from './header'
import Footer from './footer';
import React from 'react'
import border from './pic-1.jpg'
import bg from './hotel-2.jpg'

const useStyles = makeStyles(() => ({
image:{
    backgroundImage: `url(${border})`,
    minHeight: '300px',
    borderRadius:"50%",
    maxWidth: '400px',
    backgroundPosition: 'center center',
    backgroundSize: '29vw',
},
image2:{
    backgroundImage: `url(${bg})`,
    minHeight: '90vh',
    minWidth: '100%',
    backgroundPosition: 'no-repeat center center/cover ',
    backgroundSize:"85vw"
},
}))

function About() {
    const classes =useStyles();
    return (
        <Grid container>

            <Grid  style={{zIndex:"3"}}>
                <Header/>
            </Grid>
            <Grid container xs={12} style={{marginTop:"70px"}} >
                <Grid item xs={7}>
                <h1 style={{marginLeft:"50px",margin:" 30px",fontSize:"35px"}}>
                <span style={{color:"#EB984E"}}> About SkyLine</span> <span style={{color:"#333"}}>Hotel</span>
                </h1>
                <p style={{marginLeft:"50px",margin:"30px",fontSize:"20px",marginRight:"0px"}} >
                SkyLine Hotel is World Class Luxury Hotel having 100well- appointed spacious with modern facilities, multi cuisines restaurant, 24 hours room service, restaurant by the poolside, Swimming Pool, Wireless Internet Access and Ayurveda Spa. Hotel is conveniently situated in heart of the historic city of Mysore and close to Mysore railway station.SkyLine Hotel in Mysore offers guests extraordinary places, created by combining unique architecture and structure, expressive decor and artistry and magnificent features. We at SkyLine are perfecting the fine art of hospitality with an assurance of personalized care and service.
                </p>
                
     
                
                </Grid>
                
                <Grid item xs={5} >
                <p className={classes.image} style={{margin:"30px 60px 30px 100px"}}/>
                </Grid> 
                <Grid xs={2}/>
            </Grid>
            <Grid container className={classes.image2}>
                <Grid container justify="center"style={{fontSize:"50px",margin:"40px 40px 40px 40px"}}>
                <span style={{color:"#EB984E"}}> What Our </span > <span style={{color:"#333",marginLeft:"20px"}}> Guest Says</span>
                </Grid>
                
                <Grid container>
                <Grid item  xs={3} className={classes.image3} >
               <Card style={{padding:"20px",marginBottom:"20px",marginLeft:"84px",borderRadius:"20px"}} >
         <CardContent  >
         <Avatar  src='https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg' style={{height:"200px",width:"200px"}} />
        <p style={{marginTop:"35px"}}>
        It's in a perfect location. Less than a 5 minute talk from the main sights but off the crowded thoroughfares. Service is friendly and accommodating. When I arrived they recommended some places to eat which turned out to be great. Simple room but well-equipped and in good condition. 
        </p>
            
         </CardContent>
     </Card>
               </Grid>
               <Grid xs={1}/>
               <Grid item  xs={3} >
               <Card style={{padding:"20px",marginBottom:"20px",marginLeft:"64px",borderRadius:"20px"}} >
         <CardContent  >
             
        
         <Avatar  src='https://img.freepik.com/free-photo/mand-holding-cup_1258-340.jpg?size=626&amp;ext=jpg' style={{height:"200px",width:"200px"}} />
        <p style={{marginTop:"35px"}}>
        This hotel is well positioned and not very far from Ponte Vecchio ... staff is very helpful in providing help where needed and looking after their guests (they also speak French which was great for us) .... they have a small elevator to facilitate bringing your luggage up if needed
        </p>
            
         </CardContent>
     </Card>
               </Grid>
               <Grid xs={1}/>

               <Grid item  xs={3} >
               <Card style={{padding:"20px",marginBottom:"20px",marginLeft:"64px",borderRadius:"20px"}} >
         <CardContent  >
         <Avatar  src='https://www.mockofun.com/wp-content/uploads/2019/12/blur-part-of-an-image.jpg' style={{height:"200px",width:"200px"}} />
        <p style={{marginTop:"35px"}}>
        I could not speak more highly about this hotel! My parents and I stayed here for 3 nights and were greeted with some of the best customer service. Not only did our host upgrade our room but he also provided some incredible food recommendations! I will definitely stay here again
        </p>
         </CardContent>
     </Card>
               </Grid>
               </Grid>
        </Grid>
        <Grid>
            <Footer/>
        </Grid>
        </Grid>
    )
}



export default About;