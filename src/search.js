import React from 'react';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import TextField from '@material-ui/core/TextField';


function Search() {
    return(
        <div className="App">
   <Button 
      endIcon={<SaveIcon/>} 
      startIcon={<SaveIcon/>} 
      href="" 
      size="large"
      variant="contained" 
      color="primary">
        Hello
      </Button>

      <TextField
      color="secondary"
      variant="filled"
      type="date"
      />

        </div>




    );


}

export default Search;
