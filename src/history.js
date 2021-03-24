import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';
import SearchBar from "material-ui-search-bar";


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));


export default class FetchRandomUser extends React.Component {

  
  state = {
    eventos: [],

  };

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

<SearchBar
      onChange={() => console.log('onChange')}
      onRequestSearch={() => console.log('onRequestSearch')}
      style={{
        margin: '20px auto',
        maxWidth: 800
      }}
    />

      </div>




    )}
}

{/* <SearchBar
onChange={() => console.log('onChange')}
onRequestSearch={() => console.log('onRequestSearch')}
style={{
  margin: '0 auto',
  maxWidth: 800
}}
/> */}