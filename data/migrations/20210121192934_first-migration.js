exports.up = function (knex) {
  return knex.schema
    .createTable('zoos', tbl => {
      tbl.increments('zoo_id')
    })
    .createTable()
    .createTable()
    .createTable()
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists()
    .dropTableIfExists()
    .dropTableIfExists()
    .dropTableIfExists()
};
