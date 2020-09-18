import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBCollapse, MDBNavbarToggler} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import BuscadorPais from "./buscador/BuscadorPais";

class NavbarPage extends Component {
    state = {
        isOpen: false
    };

    toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
    return (
        <Router>
        <MDBNavbar color="indigo" dark expand="md" className="fixed-top w-100">
            <MDBNavbarBrand>
                <strong className="white-text">MAPA COVID-19</strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.toggleCollapse} />
            <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav right>
                <BuscadorPais />
            </MDBNavbarNav>  
            </MDBCollapse>
        </MDBNavbar>
        </Router>
        );
    }
}


export default NavbarPage;