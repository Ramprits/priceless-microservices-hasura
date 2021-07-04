import { gql } from "@apollo/client";
export const FETCH_PRODUCTS = gql`
  query products($limit: Int = 10, $offset: Int = 0) {
    products(
      limit: $limit
      offset: $offset
      order_by: { created_at: desc }
      where: { is_active: { _eq: true } }
    ) {
      id
      image_id
      is_active
      name
      price
      updated_at
      user_id
      description
      created_at
    }
    products_aggregate {
      aggregate {
        count
      }
    }
  }
`;
