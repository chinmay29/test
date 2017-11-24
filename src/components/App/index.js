// src/components/App/index.js
import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import { Button } from 'react-bootstrap';
import logo from './logo.svg';
import './style.css';

class App extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}
  
  render() {
    const { className, ...props } = this.props;
    return (
      <div>
        <div className="App-header">
          <h2>State Street SLD</h2>
        </div>
        <div className="searchButtonDiv">
          <Button className="ssc-btn ssc-btn-primary addNewButton">Add new </Button>
          <Button 
            className="ssc-btn align-left searchButton"
            style={{backgroundColor: '#092e5d', color: '#fff'}}  
          >Clear</Button>
          <Button 
            className="clearB ssc-btn clearButton"
            style={{backgroundColor: '#00ad79', color: '#fff'}}
          >Search</Button>
        </div>
        <div className="searchContainer">
        <table className="searchTable">
          <tbody>
          <tr>
            <td> FIRST NAME: </td>
            <td>
              <div className="form-group has-feedback">
                <input className="form-control" type='text' id='firstName' placeholder='first name'/>
                <i className={['glyphicon glyphicon-search', 'form-control-feedback'].join(' ')} />
              </div>
            </td>
          </tr>
          <tr>
            <td> LAST NAME: </td>
            <td>
              <div className="form-group has-feedback">
                <input className="form-control" type='text' id='lastName' placeholder='last name'/>
                <i className={['glyphicon glyphicon-search', 'form-control-feedback'].join(' ')} />
              </div>
            </td>
          </tr>
          <tr>
            <td> employee id </td>
            <td>
              <div className="form-group has-feedback">
                <input className="form-control" type='text' id='employeeId' placeholder='employee id'/>
                <i className={['glyphicon glyphicon-search', 'form-control-feedback'].join(' ')} />
              </div>
            </td>
          </tr>
          <tr>
            <td> temp1 </td>
            <td>
              <div className="form-group has-feedback">
                <input className="form-control" type='text' id='temp1' placeholder='temp1'/>
                <i className={['glyphicon glyphicon-search', 'form-control-feedback'].join(' ')} />
              </div>
            </td>
          </tr>
          <tr>
            <td> first name </td>
            <td>
              <div className="form-group has-feedback">
                <input 
                  className="form-control"
                  type='text'
                  placeholder='first name'
                />
                <i className={['glyphicon glyphicon-search', 'form-control-feedback'].join(' ')} />
              </div>
            </td>
          </tr>
          </tbody>
          </table>
      </div>
      </div>
    );
  }
}

export default App;