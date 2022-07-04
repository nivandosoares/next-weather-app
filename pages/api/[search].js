import {
  cities
} from "cities.js";

export default function handler(req, res) {
  res.status(200)
    .json(cities)
}