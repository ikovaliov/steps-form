import React, { Component } from 'react';
import { Container, Form, Button, Badge, Row, Col } from 'react-bootstrap';

import './UserDetails.css';

class UserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, step } = this.props;

    return (
      <div className='application-details page'>
        <Container>
          <h3 className='form-title-step'>
            <Badge>{step}</Badge>
            Asmeniniai duomenys
          </h3>

          <Form onSubmit={this.continue}>
            <Form.Group as={Row} controlId='formFirstName'>
              <Form.Label column sm={3}>
                Vardas
              </Form.Label>
              <Col sm={2}>
                <Form.Control
                  defaultValue={values.firstName}
                  onChange={this.props.handleChange('firstName')}
                  type='text'
                  required
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId='formLastName'>
              <Form.Label column sm={3}>
                Pavardė
              </Form.Label>
              <Col sm={2}>
                <Form.Control
                  defaultValue={values.lastName}
                  onChange={this.props.handleChange('lastName')}
                  type='text'
                  required
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId='formEmail'>
              <Form.Label column sm={3}>
                El. Paštas
              </Form.Label>
              <Col sm={2}>
                <Form.Control
                  defaultValue={values.email}
                  onChange={this.props.handleChange('email')}
                  type='email'
                  required
                />
              </Col>
            </Form.Group>

            <Button
              variant='outline-secondary'
              className='prev-btn'
              onClick={this.back}
            >
              Atgal
            </Button>
            <Button type='submit' className='next-btn'>
              Toliau
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default UserDetails;
