import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Countries from "./countries";
import "./App.css";

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/",
});

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <Countries />
      <h2>Hello</h2>
    </div>
  </ApolloProvider>
);

export default App;
