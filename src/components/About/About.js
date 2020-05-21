import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        backgroundColor: "transparent"
    },
    displayPic: {
        display: 'inline-block',
   
    },
    hilight: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        alignItems: "center",
        justifyContent: "center",
        display: "flex", 
        backgroundColor: "#b2ebf2"
    }
}));

export default function AutoGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root} id="about">
            <Box mt={1} mb={1}>

                <Grid container spacing={1} >
                    <Grid item xs={12}>
                        <Paper className={classes.hilight} elevation="1">
                            <h2>About Kridsanapong</h2>
                        </Paper>
                    </Grid>
                </Grid>


                <Grid container spacing={1} >

                    <Grid item xs={12}>
                        <Grid container>
                            <Grid item xs={12} sm={3}>
                                <Paper className={classes.paper} elevation="0" >
                                    <img className={classes.displayPic} src="/Pic/me.jpg" alt="mypic" width="50%" ></img>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={9}>
                                <Paper className={classes.paper} elevation="0">
                                    <p className={classes.displayPic}>
                                        My name is Kridsanapong Daihentob. I am a full-stack developer who is in love with programming. The reason that make me love
                                    programming is one problem can solve in many ways. So, I passionate in learnning new technologies to solve more problems.
                                    <br/>
                                        I have a diverse set of skills, ranging from HTML + CSS + Javascript or React to servers and databases. 
                                    </p>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container spacing={0} >

                    <Grid item xs={12}>
                        <Paper className={classes.paper} elevation="0">
                            <h3>Professional skills</h3>
                            <Grid container>
                                <Grid item xs={6}>
                                    <dl>
                                        <dd>HTML5</dd>
                                        <dd>CSS</dd>
                                        <dd>JAVA</dd>
                                        <dd>JAVA SCRIPT</dd>
                                        <dd>C#</dd>
                                    </dl>
                                </Grid>
                                <Grid item xs={6}>
                                    <dl>
                                        <dd>MYSQL</dd>
                                        <dd>PHP</dd>
                                        <dd>SQL</dd>
                                        <dd>MONGO DB</dd>
                                        <dd>REACT</dd>
                                    </dl>
                                </Grid>
                            </Grid>

                        </Paper>
                    </Grid>
                </Grid>

            </Box>
        </div>
    );
}