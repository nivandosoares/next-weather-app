export default function handler(req, res) {
  res.status(200);
  res.json({
    city: "London",
    temperature: "20",
    description: "sunny",
  });
}
