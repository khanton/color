import React, { Component } from 'react';
import './App.css';
import { ParamForm } from './ParamForm.js';
import { ColorTable } from './ColorTable.js';
import { Navbar, Nav, Grid, Row, Col, Panel } from 'react-bootstrap'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { rows:10, cols:10 };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    console.log(value)
    this.setState(value);
  }

  render() {
    return (
      <div className="App">
        <Navbar staticTop fluid>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Color</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
          </Nav>
        </Navbar>
        <Grid fluid>
          <Row>
            <Col md={2}>
              <Panel>
                <ParamForm 
                  rows={this.state.rows} 
                  cols={this.state.cols}
                  onChange={this.handleChange} 
                />
              </Panel>
            </Col>
            <Col md={10}>
              <Panel>
                <ColorTable
                  rows={this.state.rows} 
                  cols={this.state.cols}  
                />
              </Panel>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
