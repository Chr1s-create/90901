import express from "express";
import { graphqlHTTP } from "express-graphql";
import mongoose from "mongoose";
import cors from "cors";
import schema from "./schema/schema.js";

const app = express();

app.use(cors());

mongoose.connect(
  "mongodb+srv://chris:qweasdzxc123@ridegrab.awisw.mongodb.net/ridegrab?retryWrites=true&w=majority",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  }
);

mongoose.connection.once("open", () => {
  console.log("Connected to db");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("Listening on Port 4000");
});
