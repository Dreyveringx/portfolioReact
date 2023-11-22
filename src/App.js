import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Navbar from './components/Navbar';
import About from './components/About';
import Project from './components/Project';
import Skills from './components/Skills';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';

function App () {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={About} />
        <Route path='/project' component={Project} />
        <Route path='/skills' component={Skills} />
        <Route path='/testimonialial' component={Testimonial} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home</h1>
    <p>Bienvenidos a mi portfolio!</p>
  </div>
)

export default App;