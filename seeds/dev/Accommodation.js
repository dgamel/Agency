
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Accommodation').del()
    .then(function () {
      // Inserts seed entries
      return knex('Accommodation').insert([
        {id: 1, location: 'seaside villa', street_address: '123 Seaside', city: 'anywhere', country: 'USA', phone: '770-987-3822'},
        {id: 2, location: 'Cabin', street_address: 123 'Boonies, Hicktown', city: 'nowhere', country: 'USA', phone: 'XXX-XXX-XXXX'},
      ]);
    });
};
