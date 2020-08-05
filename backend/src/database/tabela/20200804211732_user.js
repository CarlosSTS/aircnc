exports.up = function (knex) {
    return knex.schema.createTable('user', function (table) {

        table.string('id').primary();//id string
        table.string('email').notNullable();
       
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('user');
};




