/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("books", tbl => {
        tbl.increments ('id') ;
        tbl.text ("nome", 255).notNullable();
        tbl.text ("autor", 255).notNullable();
        tbl.text ("genero", 255).notNullable();  
      }); 
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists("books")
};
