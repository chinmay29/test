
// src/components/About/index.js
import React, { PropTypes, Component } from 'react';
// import classnames from 'classnames';
// import ReactDOM from 'react-dom';


export default class NavComponent extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
   // const { className, ...props } = this.props;
    return (
        <nav>
            <div className="navWide">
                <div className="wideDiv">
                    <button>Link 1</button>
                    <button>Link 2</button>
                    <button>Link 3</button>
                </div>
            </div>
        </nav>
    );
  }
}