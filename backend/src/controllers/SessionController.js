const crypto = require("crypto");
const connection = require("../database/connection");

module.exports = {
  async create(req, res) {
    const { email } = req.body;
    const id = crypto.randomBytes(4).toString("HEX");

    let user = await connection("user")
      .where("email", email)
      .select("email")
      .select("id")
      .first();

    if (!user) {
      user = await connection("user").insert({
        email,
        id,
      });
    }

    return res.json(user);
  },
};
