import React, {Component} from 'react';

import axios from 'axios';


export default class FetchRandomUser extends React.Component {
  state = {
    eventos: [],

  };

  //https://cors-anywhere.herokuapp.com/
//   componentDidMount() {
//     fetch('https://byabbe.se/on-this-day/12/14/events.json',
//     {
// }
//     ) 
//     .then(res => res.json())
//     // .then((data) => {
//     //   this.setState({ eventos: data.data.Events })
//     //   console.log(data.data);
//     // })
//     console.log(res.json);
//   }

componentDidMount() {
  // GET request using fetch with error handling
  fetch('https://byabbe.se/on-this-day/12/14/events.json')
      .then(async response => {
          const data = await response.json();
          console.log(data.events);

          // check for error response
          if (!response.ok) {
              // get error message from body or default to response statusText
              const error = (data && data.message) || response.statusText;
              return Promise.reject(error);
          }

          this.setState({ totalReactPackages: data.total })
      })
      .catch(error => {
          this.setState({ errorMessage: error.toString() });
          console.error('There was an error!', error);
      });
}




  render(){

    return(
      <div>

<form>
        <input
      />
        <button className="search-button" type="submit">
          Search
        </button>

        {/* {
        error && <div style={{color: `red`}}><h1>An error occurred, while fetching api</h1></div>
        }  */}
      </form>        
      {this.state.eventos.map(event => 
      <p key={event.html}>{event.year} - {event.text}
      {/* <p>{todaysDate}</p> */}
      </p>
      )}

      </div>

     
    )}
}

  // https://cors-anywhere.herokuapp.com/http://history.muffinlabs.com/date/12/14
