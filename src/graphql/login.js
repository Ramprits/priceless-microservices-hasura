import { gql } from "@apollo/client";
const LOGIN_USER = gql`
  mutation LOGIN_USER($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      accessToken
    }
  }
`;
export default LOGIN_USER;
