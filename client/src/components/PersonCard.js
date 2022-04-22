import React, { Component } from 'react';

class PersonCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addYear:this.props.age,
    };
  }

render() {
const { firstName, lastName, hairColor } = this.props;
  return (
    <div>
      <h2> {lastName}, {firstName}</h2>
      <p>Age: {this.state.addYear} </p>
      <p>Hair Color: {hairColor} </p>
      <button className="birthday" onClick={() => this.setState({ addYear: this.state.addYear + 1})}>  Happy Birthday { firstName } { lastName }! </button>
    </div>
  );
 }
}

export default PersonCard;