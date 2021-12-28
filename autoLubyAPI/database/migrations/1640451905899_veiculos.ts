import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Veiculos extends BaseSchema {
  protected tableName = 'veiculos'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary().unique()
      table.string('chassi').unique()
      table.string('marca')
      table.string('modelo')
      table.integer('ano')
      table.integer('km')
      table.string('cor')
      table.string('status').defaultTo('disponivel')
      table.integer('preco_comprado')
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
