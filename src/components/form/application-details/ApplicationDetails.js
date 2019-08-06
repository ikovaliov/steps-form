import React, { Component } from 'react';

import { Container, Form, Button, Badge, Row, Col } from 'react-bootstrap';
import './ApplicationDetails.css';

class ApplicationDetails extends Component {
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
            Paraiška
          </h3>

          <Form onSubmit={this.continue}>
            <Form.Group as={Row} controlId='formCreditAmount'>
              <Form.Label column sm={3}>
                Paskolos suma (€)
              </Form.Label>
              <Col sm={2}>
                <Form.Control
                  defaultValue={values.creditAmount}
                  onChange={this.props.handleChange('creditAmount')}
                  type='number'
                  required
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId='formCreditTerm'>
              <Form.Label column sm={3}>
                Paskolos terminas (mėn.)
              </Form.Label>
              <Col sm={2}>
                <Form.Control
                  defaultValue={values.creditTerm}
                  onChange={this.props.handleChange('creditTerm')}
                  as='select'
                  required
                >
                  <option>6</option>
                  <option>10</option>
                  <option>12</option>
                  <option>18</option>
                  <option>24</option>
                  <option>36</option>
                  <option>60</option>
                </Form.Control>
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId='formPaymentDay'>
              <Form.Label column sm={3}>
                Paskolos ir palūkanų mokėjimo diena
              </Form.Label>
              <Col sm={2}>
                <Form.Control
                  defaultValue={values.paymentDay}
                  onChange={this.props.handleChange('paymentDay')}
                  as='select'
                  required
                >
                  <option>3</option>
                  <option>7</option>
                  <option>12</option>
                  <option>17</option>
                  <option>22</option>
                  <option>27</option>
                </Form.Control>
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId='formMonthlySalary'>
              <Form.Label column sm={3}>
                Mėnesinis atlyginimas atskaičius mokesčius (€)
              </Form.Label>
              <Col sm={2}>
                <Form.Control
                  defaultValue={values.monthlySalary}
                  onChange={this.props.handleChange('monthlySalary')}
                  type='number'
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

export default ApplicationDetails;
