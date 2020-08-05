const connection = require('../database/connection');

module.exports = {

  async show(request, response) {
    const spot_id  = request.headers.authorization;

    const spot = await connection('spot')
      .where('spot_id', spot_id)
      .select('*');

    return response.json(spot);
  }
}