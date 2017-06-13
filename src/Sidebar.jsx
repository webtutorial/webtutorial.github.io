import React from 'react';
import {
    Nav,
    NavLink
} from 'reactstrap';

class Sidebar extends React.Component
{
    render()
    {
        return(
            <Nav vertical>
                <NavLink to="/" activeClassName="active">Home</NavLink>
            </Nav>
        );
    }
}

export default Sidebar;