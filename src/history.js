import React, { Component, useState, useEffect, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SearchBar from "material-ui-search-bar";
import TextField from "@material-ui/core/TextField";
import { Button, Typography } from "@material-ui/core";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "25ch",
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
      console.log(response);
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
    <div>
      <Typography align="center" component="div">
        {/* Button and Search bar below */}
        <br></br>
        <TextField
          id="standard-full-width"
          style={{ margin: 4 }}
          placeholder="Enter a date"
          helperText="Example: 12/25 (Month, Day)"
          margin="normal"
          style={{ width: 300 }} //assign the width as your requirement
          InputLabelProps={{
            shrink: true,
          }}
          value={search}
          onChange={updateSearch}
        />

        <Button variant="contained" color="primary" onClick={getSearch}>
          Search
        </Button>

        {/* Functions for error handling */}
        {error && (
          <div>
            <CircularProgress color="Secondary" />
            <Typography>An error occured, Please try again</Typography>
          </div>
        )}

        {loading && (
          <div>
            <CircularProgress />
          </div>
        )}
      </Typography>

      <br></br>
      <Typography variant="h4" align="center">
        Events occured on {query}
      </Typography>
      <div>
        {data.map((data, i, index) => (
          <Timeline>
            <TimelineItem>
              <TimelineOppositeContent>
                <Typography key={data.description} color="textSecondary">
                  {data.description}
                </Typography>
                <a
                  // key={data.year}
                  href={data.wikipedia[0].wikipedia}
                  target="_blank"
                >
                  Read more...
                </a>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>Year {data.year}</TimelineContent>
            </TimelineItem>
          </Timeline>
        ))}
      </div>
    </div>
  );
}
export default History;

// import Accordion from "@material-ui/core/Accordion";
// import AccordionSummary from "@material-ui/core/AccordionSummary";
// import AccordionDetails from "@material-ui/core/AccordionDetails";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";


//   <p>
//     Year {data.year} | {data.description}
//   </p>
// ))}

// <Accordion>
//   <AccordionSummary
//     expandIcon={<ExpandMoreIcon />}
//     aria-controls="panel1a-content"
//     id="panel1a-header"
//   >
//     <Typography key={i} className={classes.heading}>{data.year} - {data.wikipedia.title} </Typography>

//   </AccordionSummary>
//   <AccordionDetails>
//   <Typography>
//     {data.description}
//   </Typography>
// </AccordionDetails>
// </Accordion>
