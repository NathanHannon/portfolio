import React, { Component } from 'react';
import { Container } from 'reactstrap';
import NavMenu  from './NavMenu';

//redux connection & imports
import {connect} from 'react-redux';
 class Layout extends Component {
   
  static displayName = Layout.name;

  render () { 
      return (
          <div>
              <NavMenu />
              <Container>
                 {this.props.children}
              </Container>
          </div>
      );
  }
}

export default Layout