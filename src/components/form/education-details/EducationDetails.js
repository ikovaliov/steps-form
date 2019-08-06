import React, { Component } from 'react';
import { Container, Form, Button, Badge, Row, Col } from 'react-bootstrap';

import './EducationDetails.css';

class EducationDetails extends Component {
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
            Išsilavinimas
          </h3>

          <Form onSubmit={this.continue}>
            <Form.Group as={Row} controlId='formEducation'>
              <Form.Label column sm={3}>
                Išsilavinimas
              </Form.Label>
              <Col sm={2}>
                <Form.Control
                  defaultValue={values.education}
                  onChange={this.props.handleChange('education')}
                  as='select'
                  required
                >
                  <option>Pradinis</option>
                  <option>Vidurinis</option>
                  <option>Spec. vidurinis</option>
                  <option>Aukštesnysis</option>
                  <option>Aukštasis</option>
                </Form.Control>
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId='formPositionHeld'>
              <Form.Label column sm={3}>
                Užimamos pareigos
              </Form.Label>
              <Col sm={2}>
                <Form.Control
                  defaultValue={values.positionHeld}
                  onChange={this.props.handleChange('positionHeld')}
                  as='select'
                  required
                >
                  <option>Darbininkas</option>
                  <option>Specialistas, tarnautojas</option>
                  <option>Vyr. specialistas</option>
                  <option>Vadovas (skyriaus, padalinio)</option>
                  <option>Įmonės vadovas</option>
                  <option>Savininkas</option>
                  <option>Studentas</option>
                  <option>Pensininkas</option>
                  <option>Namų šemininkė</option>
                  <option>Niekur nedirbu</option>
                  <option>Individuali veikla</option>
                </Form.Control>
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId='formFieldOfActivity'>
              <Form.Label column sm={3}>
                Įstaigos, kurioje dirbate, veiklos sritis
              </Form.Label>
              <Col sm={2}>
                <Form.Control
                  defaultValue={values.fieldOfActivity}
                  onChange={this.props.handleChange('fieldOfActivity')}
                  as='select'
                  required
                >
                  <option>
                    Žemės ūkis, miškininkystė, medžioklė, žuvininkystė
                  </option>
                  <option>Statyba, apdirbamoji pramonė</option>
                  <option>Pramonė</option>
                  <option>Prekyba, aptarnavimas</option>
                  <option>Transportas, pervežimas, ryšiai</option>
                  <option>Finansinis tarpininkavimas</option>
                  <option>Švietimas, kultūra</option>
                  <option>Nekilnojamasis turtas, nuoma</option>
                  <option>Informacinės technologijos</option>
                  <option>
                    Teisinis tarpininkavimas, auditas ir kita veikla
                  </option>
                  <option>Sveikatos apsauga ir socialinis darbas</option>
                  <option>Valstybės valdymas ir gynimas</option>
                </Form.Control>
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId='formDurationOfWork'>
              <Form.Label column sm={3}>
                Darbo trukmė dabartinėje darbovietėje
              </Form.Label>
              <Col sm={2}>
                <Form.Control
                  defaultValue={values.durationOfWork}
                  onChange={this.props.handleChange('durationOfWork')}
                  as='select'
                  required
                >
                  <option>Bandomasis laikotarpis</option>
                  <option>Iki 1 metų</option>
                  <option>Iki 2 metų</option>
                  <option>Iki 3 metų</option>
                  <option>Iki 4 metų</option>
                  <option>Iki 5 metų</option>
                  <option>Virš 5 metų</option>
                </Form.Control>
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

export default EducationDetails;
