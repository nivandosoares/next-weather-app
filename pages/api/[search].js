import cities from "../../lib/city.list.json";

export default function handler(req, res) {

  cities.map(city => {
    return city.name
  })
  res.status(200)
    .json(city)
}