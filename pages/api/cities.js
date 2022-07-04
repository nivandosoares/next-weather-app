import {
    cities
  } from "../../lib/city.list.json";
  
  export default function handler(req, res) {
    res.status(200)
      .json(cities)
  }