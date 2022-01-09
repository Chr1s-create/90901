import { v4 as uuidv4 } from "uuid";

export const users = [
  { username: "alpha", password: "password", id: uuidv4(), favorite: [] },
  { username: "beta", password: "password", id: uuidv4(), favorite: [] },
  { username: "charlie", password: "password", id: uuidv4(), favorite: [] },
];
