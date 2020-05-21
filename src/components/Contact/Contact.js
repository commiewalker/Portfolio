import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import GitHubIcon from '@material-ui/icons/GitHub';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

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
    paperContent: {
        opacity: "50%"
    },

    spaceIcon: {
        paddingRight: theme.spacing(1)
    },
    textInfo: {
        textAlign: 'start'
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

function Contact() {

    const classes = useStyles();

    return (
        <div className={classes.root} id="contact">
            <Box mt={1} mb={1}>
                <Grid container spacing={1} >
                    <Grid item xs={12}>
                        <Paper className={classes.hilight}>
                            <h2>Contact</h2>
                        </Paper>
                    </Grid>
                </Grid>

                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}  elevation="0">
                        <p className={classes.textInfo}><GitHubIcon className={classes.spaceIcon}/> commiewalker</p>
                        <p className={classes.textInfo}><ContactMailIcon className={classes.spaceIcon}/> commie.walker@hotmail.com</p>
                        <p className={classes.textInfo}><LinkedInIcon className={classes.spaceIcon}/> Kridsanapong Daihentob</p>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default Contact;