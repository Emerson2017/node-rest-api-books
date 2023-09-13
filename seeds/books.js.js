/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('books').del()
  await knex('books').insert([
    {id: 1, nome: 'O menino do pijama listrado', autor: 'John Boyne', genero: 'Drama histórico'},
    {id: 2, nome: 'Iracema', autor: 'José de Alencar', genero: 'Novela romântica | Ficção'},
    {id: 3, nome: 'O Cortiço', autor: 'Aluísio Azevedo', genero: 'Naturalismo'}
  ]);
};
