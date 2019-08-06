import React, { Component } from 'react';
import './App.css';

// COMPONENTS
import IntroWindows from './intro-window'; //INTRO
import ApplicationDetails from './form/application-details'; //1
import UserDetails from './form/user-details'; //2
import EducationDetails from './form/education-details'; //3
import Confirmation from './form/confirmation'; //4
import Summary from './summary'; //SUMMARY

class App extends Component {
  state = {
    step: 0,

    creditAmount: '',
    creditTerm: '6',
    paymentDay: '12',
    monthlySalary: '',

    firstName: '',
    lastName: '',
    email: '',

    education: 'Vidurinis',
    positionHeld: 'Specialistas, tarnautojas',
    fieldOfActivity: 'Informacinės technologijos',
    durationOfWork: 'Iki 2 metų'
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  handleChange = input => event => {
    this.setState({ [input]: event.target.value });
  };

  render() {
    const { step } = this.state;
    const {
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
    } = this.state;

    const values = {
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
    };

    switch (step) {
      case 0:
        return <IntroWindows nextStep={this.nextStep} />;
      case 1:
        return (
          <ApplicationDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
            step={step}
          />
        );
      case 2:
        return (
          <UserDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
            step={step}
          />
        );
      case 3:
        return (
          <EducationDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
            step={step}
          />
        );
      case 4:
        return (
          <Confirmation
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
            step={step}
          />
        );
      case 5:
        return <Summary />;
      default:
        return <IntroWindows nextStep={this.nextStep} />;
    }
  }
}

export default App;
