const db = require("../models");
const User = db.User;

const getUserDetails = async (req, res) => {
  try {
    const user = await User.findAll({
      include:[{model: db.Company, attributes: ["name"],
      raw: true,}],
    });
    // console.log("user>>>>>", user);
    // res.json(user);
    const transformedUsers = user.map(user => {
        const transformedUser = { ...user };
        transformedUser.Companies = user.Companies.map(company => company.name);
        return transformedUser;
      });
  
      console.log("transformedUsers>>>>>", transformedUsers);
      res.json(transformedUsers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getUserDetails,
};
