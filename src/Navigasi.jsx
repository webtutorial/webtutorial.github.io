import React from 'react';
import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Collapse,
    Nav,
    NavDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';

class Navigasi extends React.Component
{
    constructor(props)
    {
        super(props);
        this.togglenav = this.togglenav.bind(this);
//        this.dropdownToggle = this.dropdownToggle.bind(this);
        
        this.statenav = {
            navOpen:false
        }
//        this.stateDropdown = {
//            downOpen:false
//        }
    }
    togglenav()
    {
        this.setState({
            navOpen: !this.statenav.navOpen
        });
    }
//    dropdownToggle()
//    {
//        this.setState({
//            downOpen: !this.stateDropdown.downOpen
//        });
//    }
    render()
    {
        return(
            <Navbar color="inverse" inverse toggleable>
                <NavbarToggler right onClick={this.togglenav}/>
                    <NavbarBrand href="/">Webtutorial</NavbarBrand>
                    <Collapse isOpen={this.statenav.navOpen} navbar>
{/*
                        <Nav className="mr-auto" navbar>
                            <NavDropdown isOpen={this.stateDropdown.downOpen} toggle={this.dropdownToggle}>
                                <DropdownToggle nav caret>
                                    Tutorial
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem>HTML</DropdownItem>
                                    <DropdownItem>CSS</DropdownItem>
                                    <DropdownItem>JavaScript</DropdownItem>
                                </DropdownMenu>
                            </NavDropdown>
                        </Nav>
                        */}
                    </Collapse>
            </Navbar>
        );
    }
}

export default Navigasi;