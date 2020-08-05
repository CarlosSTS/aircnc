exports.up = function(knex) { 
    return  knex.schema.createTable('booking', function(table){ 
    
      table.increments();
      
      table.string('date').notNullable();

        table.string('booking_spot').notNullable();
        table.foreign('booking_spot').references('id').inTable('spot');

        table.string('booking_user').notNullable();
        table.foreign('booking_user').references('id').inTable('user');
      
      }); 
    };
    
    exports.down = function(knex) { 
     return  knex.schema.dropTable('booking') 
    };
    













