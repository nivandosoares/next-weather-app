import cities from "../lib/city.list.json";

export default function handler(req, res) {
  res.status(200);
  res.json({
    req: cities.city,
    city: "London",
    temperature: "20",
    description: "sunny",
  });
}
