import gql from "graphql-tag";

export const CLASSIFICATION = gql`
  query Classifications {
    classifications {
      id
      name
      image
    }
  }
`;
