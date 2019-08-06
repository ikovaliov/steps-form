import React, { Component } from 'react';

import { Container } from 'react-bootstrap';
import './Summary.css';

class Summary extends Component {
  render() {
    return (
      <div className='summary page'>
        <Container>
          <h1>Pirmas žingsnis padarytas!</h1>
          <h2 className='orange-text'>
            jūsų paraiška buvo sėkmingai išsiųsta.
          </h2>
        </Container>
      </div>
    );
  }
}

export default Summary;
