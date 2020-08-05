const connection = require('../database/connection');
const crypto = require('crypto');
//41
module.exports = {

    async create(req, res) {
        const  booking_user  =  req.headers.authorization;
        const { date } = req.body;
        const  {booking_spot}  = req.params;

        const [id] = await connection('booking').insert({
            booking_user, booking_spot, date
        });

        return res.json({ id });
    }
};

