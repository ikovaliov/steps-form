import React, { Component } from 'react';

import { Container, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

import './IntroWindow.css';

class IntroWindow extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    return (
      <div className='intro-window page'>
        <Container>
          <h1>Vartojimo paskola</h1>
          <h2>Paskolos, kurios padeda</h2>
          <p>
            Vartojimo paskola pravers, jei planuojate atnaujinti namus,
            remontuoti automobilį, įsigyti naujų baldų, buitinės technikos, ar
            kitą brangesnį daiktą.
          </p>
          <p className='orange-text'>
            <strong>
              Specialus pasiūlymas: 50% nuolaida sutarties administravimo
              mokesčiui su kodu VASARA.
            </strong>
          </p>
          <ul>
            <li>Paskola nuo 500 iki 20 000 Eur be užstato.</li>
            <li>
              Pinigus pervesime Jums į sąskaitą iš karto po sutarties sudarymo.
            </li>
            <li>
              Pasiskolintą sumą ar jos dalį galėsite grąžinti anksčiau laiko be
              papildomų mokesčių.
            </li>
          </ul>
          <p>
            <FontAwesomeIcon icon={faClock} /> Paraišką užpildysite vos per
            keletą minučių.
          </p>
          <Button className='next-btn' onClick={this.continue}>
            Pildyti paraišką
          </Button>
        </Container>
      </div>
    );
  }
}

export default IntroWindow;
