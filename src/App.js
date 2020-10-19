import React from 'react';
import './App.css';
import Search from './search';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import IconButton  from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


function App() {
  return (
    <div className="App">
      <AppBar>
        {/* <ToolBar>
          <IconButton>
            <MenuIcon/>
          </IconButton>
        </ToolBar> */}
      </AppBar>


    <Search/>
    </div>
  );
}

export default App;
