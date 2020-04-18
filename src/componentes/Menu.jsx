import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBCollapse } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';

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
        <MDBNavbar color="indigo" dark expand="md">
            <MDBNavbarBrand>
                <strong className="white-text">MAPA COVID-19</strong>
            </MDBNavbarBrand>
            {/* <MDBNavbarToggler onClick={this.toggleCollapse} /> */}
            <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
             <MDBNavbarNav right>
                <MDBNavItem>
                {/* <MDBFormInline waves>
                    <div className="md-form my-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Buscar País" aria-label="Search" />
                    </div>
                </MDBFormInline> */}
                </MDBNavItem>
            </MDBNavbarNav> 
            </MDBCollapse>
        </MDBNavbar>
        </Router>
        );
    }
}

export default NavbarPage;