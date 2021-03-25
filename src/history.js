import React, {Component, useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import SearchBar from "material-ui-search-bar";
import { ContactSupportOutlined } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));


function History()
 {

  
  const [data, setItems] = useState([]);
  // search state
  const [search, setSearch] = useState();
  // Default query state
  const [query, setQuery] = useState('12/12');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  // useEffect() function
  useEffect(() => {
    // fetchItems() makes an asyncronous call
    const fetchItems = async () => {
      setLoading(true);
      setError(false);

      try {
        const response = await fetch(
          // Proxy was used to make this API call
          //`https://cors-anywhere.herokuapp.com/https://api.flightstats.com/flex/delayindex/rest/v1/json/region/Asia?appId=${APP_ID}&appKey=${APP_KEY}&classification=5&score=3`
          `https://byabbe.se/on-this-day/${query}/events.json`
        );

        // Response received in JSON format and  stored as const data
        const data = await response.json();
        console.log(data);
        // Sets response as data.airports
        setItems(data);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };

    fetchItems();
  }, [query]);

  // Function to
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    // Resets the input
    setSearch('');
  };
  
const updateSearch = (e) => {
  setSearch(e.target.value);
};







    return(
      
      <div>

    <SearchBar
          onSubmit={getSearch}
          value={search}
      // onChange={() => console.log('onRequestSearch1')}
      
      onRequestSearch={updateSearch}
      style={{
        margin: '20px auto',
        maxWidth: 800
      }}
    />

    <h1>Hello</h1>

      </div>




    )
}

export default History;

{/* <SearchBar
onChange={() => console.log('onChange')}
onRequestSearch={() => console.log('onRequestSearch')}
style={{
  margin: '0 auto',
  maxWidth: 800
}}
/> */}