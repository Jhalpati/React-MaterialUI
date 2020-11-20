// *https://www.registers.service.gov.uk/registers/country/use-the-api*
import fetch from 'cross-fetch';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from './paper';
import './App.css';
import Box from '@material-ui/core/Box';



function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}))

export default function Asynchronous() {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;
  const classes = useStyles();




  React.useEffect(() => {
    let active = true;

  

    (async () => {
      const response = await fetch('https://local-authority-eng.register.gov.uk/records.json?page-size=5000');
      await sleep(1e3); // For demo purposes.
      const counties = await response.json();
      console.log(counties);

    })();
  
  }, [loading]);



  return(
    <div><p>Ello</p></div>

  );

}
