import graphql from "graphql";
import _ from "lodash";
import { users } from "./../data/userData";
import { brands } from "./../data/brandData";
import { classifications } from "./../data/classificationData";
import { vehicles } from "./../data/vehicleData";

const {
  GraphQLID,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
} = graphql;

// dummy data

// types
const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLID },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
  }),
});

const BrandType = new GraphQLObjectType({
  name: "Brand",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    image: { type: GraphQLString },
  }),
});

const ClassificationType = new GraphQLObjectType({
  name: "Classification",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    image: { type: GraphQLString },
  }),
});

const VehicleType = new GraphQLObjectType({
  name: "Vehicle",
  fields: () => ({
    id: { type: GraphQLID },
    modelName: { type: GraphQLString },
    brand: { type: BrandType },
    classification: { type: ClassificationType },
    price: { type: GraphQLString },
    remark: { type: GraphQLString },
    image: { type: GraphQLString },
    features: { type: new GraphQLList(GraphQLString) },
  }),
});

// query and mutations
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    // single query
    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return _.find(users, { id: args.id });
      },
    },

    vehicle: {
      type: VehicleType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return _.find(vehicles, { id: args.id });
      },
    },

    // query all
    users: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        return users;
      },
    },

    brands: {
      type: new GraphQLList(BrandType),
      resolve(parent, args) {
        return brands;
      },
    },

    classifications: {
      type: new GraphQLList(ClassificationType),
      resolve(parent, args) {
        return classifications;
      },
    },

    vehicles: {
      type: new GraphQLList(VehicleType),
      resolve(parent, args) {
        return vehicles;
      },
    },

    vehiclesByBrand: {
      type: new GraphQLList(VehicleType),
      args: { brandName: { type: new GraphQLNonNull(GraphQLString) } },
      resolve(parent, args) {
        const result = _.filter(vehicles, ["brand.name", args.brandName]);
        return result;
      },
    },

    vehiclesByClass: {
      type: new GraphQLList(VehicleType),
      args: { classificationId: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parent, args) {
        const result = vehicles.filter(
          (vehicle) => vehicle.classification.id === args.classificationId
        );
        return result;
      },
    },

    vehiclesByRemark: {
      type: new GraphQLList(VehicleType),
      args: { remark: { type: new GraphQLNonNull(GraphQLString) } },
      resolve(parent, args) {
        const result = vehicles.filter(
          (vehicle) => vehicle.remark === args.remark
        );
        return result;
      },
    },
  },
});

// const Mutation = new GraphQLObjectType({
//   name: "Mutation",
//   fields: {
//     createUser: {
//       type: UserType,
//       args: {
//         username: { type: new GraphQLNonNull(GraphQLString) },
//         password: { type: new GraphQLNonNull(GraphQLString) },
//       },
//       resolve(parent, args) {
//         let user = new User({
//           username: args.username,
//           password: args.password,
//         });
//         return user.save();
//       },
//     },
//   },
// });

export default new GraphQLSchema({
  query: RootQuery,
  // mutation: Mutation,
});
