import { split, HttpLink } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { WebSocketLink } from "@apollo/client/link/ws";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { SubscriptionClient } from "subscriptions-transport-ws";
import { setContext } from "@apollo/client/link/context";

const httpLink = new HttpLink({
  uri: "https://dhanai-fruits.hasura.app/v1/graphql",
  headers: {
    "x-hasura-admin-secret": `3EK6FD+o0+c7tzBNVfjpMkNDi2yARAAKzQlk8O2IKoxQu4nF7EdAh8s3TwpHwrdWT6R`
  }
});

const authLink = setContext(({ operationName }, prevCtx) => {
  const publicOperations = ["LOGIN_USER"];
  if (operationName && !publicOperations.includes(operationName)) {
    const token = JSON.parse(localStorage.getItem("userToken"));
    return {
      headers: {
        ...prevCtx.headers,
        Authorization: `Bearer ${token.accessToken}`
      }
    };
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
  link: authLink.concat(splitLink),
  cache: new InMemoryCache()
});
