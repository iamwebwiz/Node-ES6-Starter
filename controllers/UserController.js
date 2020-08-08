import User from "../models/User";

export const index = async (req, res) => {
  const users = await User.find({});

  res.json({
    message: "Users fetched.",
    users,
  });
};
