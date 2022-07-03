export default (req, res) => {
  res
    .status(200)
    .json({ message: `You are trying search for ${req.query.city}` });
};
