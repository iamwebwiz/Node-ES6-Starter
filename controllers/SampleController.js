import User from "../models/User";

export const index = (req, res) => {
  res.json({ message: "Hello Express!" });
};

export const users = async (req, res) => {
  const users = await User.find({});

  res.json({
    message: "Users fetched.",
    users,
  });
};
