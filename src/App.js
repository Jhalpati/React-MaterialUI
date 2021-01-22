import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Nav from "./nav";
import PersonList from "./history";
import "./App.css";

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/",
});

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <h2>Hello</h2>
      {/* <Nav/> */}
      <PersonList/>
    </div>
  </ApolloProvider>
);

export default App;
