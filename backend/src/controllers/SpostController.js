const connection = require("../database/connection");
const crypto = require("crypto");

module.exports = {
  async index(req, res) {
    const { techs } = req.query;

    const spot = await connection("spot").where("techs", techs).select("*");

    return res.json(spot);
  },
  async create(req, res) {
    const { filename } = req.file;
    const { company, techs, price } = req.body;
    const spot_id = req.headers.authorization;

    const id = crypto.randomBytes(4).toString("HEX");

    const spot = await connection("spot").insert({
      id,
      thumbnail: filename,
      company,
      techs,
      price,
      spot_id,
    });

    return res.json(spot);
  },
};
