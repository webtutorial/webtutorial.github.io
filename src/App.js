import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
    Container, Row, Col
} from 'reactstrap';
import Navigasi from './Navigasi.jsx';
import Sidebar from './Sidebar.jsx';
import Komponen from './Komponen.jsx';

class App extends Component {
  render() {
    return (
        <div>
            <Navigasi/>
            <Container fluid>
                <Row>
                    <Col sm="2">
                        <Sidebar/>
                    </Col>
                    <Col sm="10">
                        <Komponen/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
  }
}

export default App;
