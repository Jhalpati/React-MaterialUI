import React, {Component} from 'react';

import axios from 'axios';

export default class FetchRandomUser extends React.Component {
  state = {
    eventos: []
  };

  componentDidMount() {
    fetch('https://cors-anywhere.herokuapp.com/http://history.muffinlabs.com/date/12/14')
    .then(res => res.json())
    .then((data) => {
      this.setState({ eventos: data.data.Events })
      console.log(data.data.Events);
    })
    .catch(console.log)
  }

  render(){
    return(
      <div>
      <h1>w</h1>
      {this.state.eventos.map(event => 
      <p key={event.html}>{event.year} - {event.text}</p>


      
      
      )}

      </div>

     
    )}
}

  // https://cors-anywhere.herokuapp.com/http://history.muffinlabs.com/date/12/14
