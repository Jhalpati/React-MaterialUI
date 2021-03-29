import React, { Component, useState, useEffect, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SearchBar from "material-ui-search-bar";
import TextField from "@material-ui/core/TextField";
import { Button, Typography } from "@material-ui/core";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

function History() {
  const classes = useStyles();

  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;

  const [data, setItems] = useState([]);
  // search state
  const [search, setSearch] = useState("");
  // Default query state
  const [query, setQuery] = useState(month + "/" + date);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  // useEffect() function
  useEffect(() => {
    // fetchItems() makes an asyncronous call
    fetchItems();
  }, [query]);

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
      // Sets response as data.airports
      setItems(data.events);
      console.log(data.events);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  // Function to
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    // Resets the input
    // setSearch("");
  };

  return (
    <div className={classes.root}>
      {/* Button and Search bar below */}
      {/* <TextField
      label="Search input"
      margin="auto"
       value={search}
        onChange={updateSearch}
        // style={{
        //   margin: "20 auto",
        //   maxWidth: 1000,
        // }}
      /> 
      <Button
      style={{
        margin: "auto",
        maxWidth: 1000,
      }}

       variant="contained" color="primary" onClick={getSearch}>
        Search
        
      </Button> */}
      <br></br>
      <Typography variant="h4" align="center">
        Events that happened on {date}/{month}
      </Typography>
      <div>
        {data.map((data, i) => (
        //   <p>
        //     Year {data.year} | {data.description}
        //   </p>
        // ))}

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>{data.year}</Typography>
          
          </AccordionSummary>
        </Accordion>
        ))}
      </div>
    </div>
  );
}
export default History;
