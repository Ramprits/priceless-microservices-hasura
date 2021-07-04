import { split, HttpLink } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { WebSocketLink } from "@apollo/client/link/ws";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { SubscriptionClient } from "subscriptions-transport-ws";

const httpLink = new HttpLink({
  uri: "https://dhani-app.hasura.app/v1/graphql",
  headers: {
    "x-hasura-admin-secret": `12345`
  }
});

const wsLink = new WebSocketLink(
  new SubscriptionClient("wss://dhani-app.hasura.app/v1/graphql", {
    reconnect: true,
    timeout: 30000,
    connectionParams: {
      headers: {
        "x-hasura-admin-secret": `12345`
      }
    }
  })
);

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

export const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache()
});
