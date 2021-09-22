import React from "react";
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import { Nav, Navbar } from "react-bootstrap";


import Footer from "./components/Footers";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      title: "Name Here",
      headerLinks:[
        { title: 'Home', path:'/' },
        { title: 'About', path: '/about'},
        { title: 'Contact', path: '/contact'}
      ],
      home:{
        title:'Title',
        subTitle: 'Subtitle',
        text: 'Checkout my projects below'
      },
      about: {
        title: 'About Me'
      },
      contact: {
        title: 'Contact me'
      }
    }
  }

  render(){
    return(
        <Router>
          <Container className="p=0" fluid={true}>

            <Navbar className="border-bottom" bg="transparent" expand="lg">
              <Navbar.Brand> Name Goes Here </Navbar.Brand>

              <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />

              <Navbar.Collapse id="navbar-toggle">
                <Nav className="ml-auto">
                  <Link className="nav-link" to="/">Home</Link>
                  <Link className="nav-link" to="/about">About</Link>
                  <Link className="nav-link" to="/contact">Contact</Link>

                </Nav>

              </Navbar.Collapse>
            </Navbar>

            <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text}/>}/>
            <Route path="/about" exact render={() => <AboutPage title={this.state.about.title} />}/>
            <Route path="/contact" exact render={() => <ContactPage title={this.state.contact} />}/>

            <Footer />

          </Container>
        </Router>

    );
  }
}

export default App;
