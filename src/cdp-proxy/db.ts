import {
    Bson,
    MongoClient,
  } from "https://deno.land/x/mongo@v0.31.1/mod.ts";
import { HttpSchema } from "./schema.ts";
  const client = new MongoClient();
  await client.connect("mongodb://127.0.0.1:27017");

  export const db=client;

  export let httpCollection= db.database("test").collection<HttpSchema>("http");
