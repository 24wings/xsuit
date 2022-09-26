import { httpCollection } from "../cdp-proxy/db.ts";
console.log(Deno.args[0])
let res=await httpCollection.find({host:{$regex:new RegExp(Deno.args[0])} }).toArray();
console.log(res)
