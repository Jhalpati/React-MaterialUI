import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import './App.css';

const client = new ApolloClient({
    uri: "https://countries.trevorblades.com/"

});

const App = () => (

  <ApolloProvider client={client}>

<div>
  <p>Hello World</p>
</div>



  </ApolloProvider>

)

export default App;
