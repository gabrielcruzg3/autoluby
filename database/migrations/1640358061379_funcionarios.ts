import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Funcionarios extends BaseSchema {
  protected tableName = 'funcionarios'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary().unique()
      table.integer('cpf').unique()
      table.string('nome')
      table.string('email').unique()
      table.string('avatar')
      table.string('biografia')
      table.string('senha')
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
