import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class VeiculosVendidos extends BaseSchema {
  protected tableName = 'veiculos_vendidos'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary().unique()
      table.integer('veiculo_id').references('id').inTable('veiculos')
      table.integer('data').defaultTo(Date.now())
      table.integer('valor_vendido')
      table.integer('vendedor_id').references('id').inTable('funcionarios')
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
