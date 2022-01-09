import gql from "graphql-tag";

export const VEHICLES = gql`
  query Vehicles {
    vehicles {
      id
      modelName
      brand {
        id
        name
        image
      }
      classification {
        id
        name
      }
      image
      price
      remark
    }
  }
`;
