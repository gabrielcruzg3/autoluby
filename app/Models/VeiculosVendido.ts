import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class VeiculosVendido extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public veiculo_id: number

  @column()
  public data: number

  @column()
  public valor_vendido: number

  @column()
  public vendedor_id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
