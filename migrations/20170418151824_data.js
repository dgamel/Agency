
exports.up = function(knex, Promise) {
  return Promise.all([
  knex.schema.createTableIfNotExists("accommodation", function(table) {
    table.increments().primary();
    table.string('location');
    table.string('street_address');
    table.string('city');
    table.string('country');
    table.integer('telepone_number')
    table.timestamps(true, true);
  }),

  return knex.schema.createTableIfNotExists("customers", function(table) {
    table.increments().primary();
    table.string('first_name');
    table.string('last_name');
    table.string('email_address');
    table.integer('telepone_number')
    table.timestamps(true, true);
  }),

  return knex.schema.createTableIfNotExists("destination", function(table) {
    table.increments().primary();
    table.string('location');
    table.string('street_address');
    table.string('city');
    table.string('country');
    table.integer('telepone_number')
    table.timestamps(true, true);

  }).then(function(){
      return knex.schema.table('accommodation', function(table){
        table.interger('accommodation_id').unsigned().index();
        table.foreign('accommodation_id').references(accommodation_id);
        table.foreign('accommodation_id').references(accommodation_id);
      })
    })
  ])
};

exports.down = function(knex, Promise) {
  return Proise.all([
    knex.schema.dropTable('accommodation'),
    knex.schema.dropTable('customers')
  ])

};
