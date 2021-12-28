import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Funcionarios extends BaseSchema {
  protected tableName = 'funcionarios'

  public async up() {
    this.schema.table(this.tableName, (table) => {
      table.renameColumn('senha', 'password')
    })
  }

  public async down() {
    this.schema.table(this.tableName, (table) => {
      table.renameColumn('password', 'senha')
    })
  }
}
