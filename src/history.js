import React from 'react';

import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://cors-anywhere.herokuapp.com/https://history.muffinlabs.com/date/1/22`)
      .then(res => {
        const persons = res.data.data.Events[0];
        console.log(persons);
        this.setState({ persons });
      })
  }

  render() {
    return (
      <ul>
        {/* { this.state.persons.map(person => <li>{person.name}</li>)} */}
        <h1>Hello</h1>

      </ul>
    )
  }
}