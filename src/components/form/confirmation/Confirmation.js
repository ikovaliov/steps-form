import React, { Component } from 'react';

import { Container, Button, Table } from 'react-bootstrap';

import './Confirmation.css';

class Confirmation extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: {
        creditAmount,
        creditTerm,
        paymentDay,
        monthlySalary,
        firstName,
        lastName,
        email,
        education,
        positionHeld,
        fieldOfActivity,
        durationOfWork
      }
    } = this.props;

    return (
      <div className='confirmation page'>
        <Container>
          <div className='confirmation-block'>
            <h1>Santrauka</h1>

            <h3>Paraiška</h3>
            <Table responsive>
              <tbody>
                <tr>
                  <td>Paskolos suma</td>
                  <td>{creditAmount} €</td>
                </tr>
                <tr>
                  <td>Paskolos terminas</td>
                  <td>{creditTerm} mėn.</td>
                </tr>
                <tr>
                  <td>Paskolos ir palūkanų mokėjimo diena</td>
                  <td>{paymentDay} d.</td>
                </tr>
                <tr>
                  <td> Mėnesinis atlyginimas atskaičius mokesčius</td>
                  <td>{monthlySalary} €</td>
                </tr>
                <tr>
                  <td> Metinės palūkanos</td>
                  <td>{creditAmount <= 5000 ? '15%' : '10%'}</td>
                </tr>
              </tbody>
            </Table>

            <br />

            <h3>Asmeniniai duomenys</h3>
            <Table responsive>
              <tbody>
                <tr>
                  <td>Vardas</td>
                  <td>{firstName}</td>
                </tr>
                <tr>
                  <td>Pavardė</td>
                  <td>{lastName}</td>
                </tr>
                <tr>
                  <td>El. Paštas</td>
                  <td>{email}</td>
                </tr>
              </tbody>
            </Table>

            <br />

            <h3>Išsilavinimas</h3>
            <Table responsive>
              <tbody>
                <tr>
                  <td>Išsilavinimas</td>
                  <td>{education}</td>
                </tr>
                <tr>
                  <td>Užimamos pareigos</td>
                  <td>{positionHeld}</td>
                </tr>
                <tr>
                  <td>Įstaigos, kurioje dirbate, veiklos sritis</td>
                  <td>{fieldOfActivity}</td>
                </tr>
                <tr>
                  <td>Darbo trukmė dabartinėje darbovietėje</td>
                  <td>{durationOfWork}</td>
                </tr>
              </tbody>
            </Table>

            <Button
              variant='outline-secondary'
              className='prev-btn'
              onClick={this.back}
            >
              Atgal
            </Button>
            <Button className='next-btn' onClick={this.continue}>
              Siųsti paraišką
            </Button>
          </div>
        </Container>
      </div>
    );
  }
}

export default Confirmation;
