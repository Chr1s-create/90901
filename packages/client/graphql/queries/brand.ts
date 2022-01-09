import gql from "graphql-tag";

export const BRANDS = gql`
  query Brands {
    brands {
      id
      name
      image
    }
  }
`;
