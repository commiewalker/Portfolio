import React from 'react';
import Nav from "./components/Nav/Nav"
import About from "./components/About/About"
import { Container } from '@material-ui/core'
import Contact from "./components/Contact/Contact"
import Projects from "./components/Projects/Projects"


function App() {
  return (
    <div>
      <Nav />
      <Container maxWidth="lg">
        <About/>
        <Projects/>
        <Contact/>
      </Container>
    </div>
  );
}

export default App;
