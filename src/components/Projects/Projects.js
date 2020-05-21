import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Card from "./../Card/Card"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        alignItems: "center",
        justifyContent: "center",
        display: "flex", 
        backgroundColor: "transparent"
       
    },
    projectCard: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        height: "400px",
        backgroundColor: "transparent"
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

function Projects() {

    const classes = useStyles();
    const findrDES = "FINDR is an application randomly displays an image from a restaurant in a card that can be cycled through until an appealing option is picked. Once the top choice is chosen, the restaurant information will be shown to get a user to their food as fast as possible."
    const geogramDES ="This application saves locations on a map and allows the user to post a title, review, and image to that location. It is user based so all saved data is for that specific user."
    const empReact = "Example table contain employee that allow user to search employee by name or sort them by category. This application build with react and retrieve information from API"

    return (
        <div className={classes.root} id="projects">
            <Box mt={1} mb={1}>
                <Grid container spacing={1} >
                    <Grid item xs={12}>
                        <Paper className={classes.hilight}>
                            <h2>Projects</h2>
                        </Paper>
                    </Grid>
                </Grid>

                <Grid container spacing={1} >
                    <Grid item xs={12} sm={6} >
                        <Paper className={classes.projectCard} elevation="0">
                            <Card 
                                name="Findr"
                                img="/Pic/findr.png"
                                des={findrDES}
                                repo="https://github.com/commiewalker/Findr"
                                demo="https://commiewalker.github.io/Findr/"
                            />
                        </Paper>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Paper className={classes.projectCard} elevation="0">
                            <Card 
                                name="Geogram"
                                img="/Pic/geogramPort.png"
                                des={geogramDES}
                                repo="https://github.com/vb27/RestaurantMapApp"
                                demo="https://murmuring-waters-09325.herokuapp.com/"
                            />
                        </Paper>
                    </Grid>
                </Grid>

                <Grid container spacing={1} >
                    <Grid item xs={12} sm={6} >
                        <Paper className={classes.projectCard} elevation="0">
                            <Card 
                                name="Employee management"
                                img="/Pic/employeeWithReact.png"
                                des={empReact}
                                repo="https://github.com/commiewalker/employeeWithReact"
                                demo="https://empwithreact.herokuapp.com/"
                            />
                        </Paper>
                    </Grid>

                    {/* <Grid item xs={12} sm={6}>
                        <Paper className={classes.projectCard} elevation="0">
                            <Card
                                name="Geogram"
                                img="/Pic/geogramPort.png"
                                des={geogramDES}
                                repo="https://github.com/vb27/RestaurantMapApp"
                                demo="https://murmuring-waters-09325.herokuapp.com/"
                            />
                        </Paper>
                    </Grid> */}
                </Grid>
            </Box>
        </div>
    )
}

export default Projects;