import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundColor: "#2196f3",
    margin: "-10px -8px auto -8px" 
  },
});


const theme = createMuiTheme({
  palette: {
    primary: {
     
      main: '#18ffff',
     
    },
    secondary: {
    
      main: '#76ff03',
     
    },
  },
});


export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };




  return (

    <Paper className={classes.root} fullwidth = "true" >
      <ThemeProvider theme={theme}>
      <Tabs 
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="primary"
        centered
        
      >
        
        <Tab label="About" href="#about" className="textColorPrimary"></Tab>
        <Tab label="Projects" href="#projects"/>
        <Tab label="Resume" href="https://drive.google.com/open?id=14iUYJbq2jXD3EXPo2YlKMUZYxQNzcSD-" target="_blank"/>
        <Tab label="Contact" href="#contact"/>
      </Tabs>
      </ThemeProvider>
    </Paper>

  );
}