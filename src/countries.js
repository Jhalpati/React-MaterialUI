import React from "react";
import ApolloClient from "apollo-boost";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import "./App.css";
import { render } from "@testing-library/react";

const Countries = () => (
  <Query
    query={gql`
      {
        country(code: "BR" ) {
          name
          native
          capital
          emoji
          currency
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading</p>;
      if (error) return <p>Error</p>;

      return data.country.map(({ name, native, capital, emoji, currency }) => (
        <div key={native}>
          <p>{`$name`}/</p>
        </div>
      ));
    }}
  </Query>
);

export default Countries;
