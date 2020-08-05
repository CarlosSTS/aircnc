exports.up = function (knex) {
    return knex.schema.createTable('spot', function (table) {

        table.string('id').primary();//id string
        table.string('thumbnail').notNullable();
        table.string('techs').notNullable();
        table.string('company').notNullable();
        table.integer('price').notNullable();

        table.string('spot_id').notNullable();
        table.foreign('spot_id').references('id').inTable('user');

    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('spot');
};





