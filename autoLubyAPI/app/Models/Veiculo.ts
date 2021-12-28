import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Veiculo extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public chassi: string

  @column()
  public marca: string

  @column()
  public modelo: string

  @column()
  public ano: number

  @column()
  public km: string

  @column()
  public cor: string

  @column()
  public status: string

  @column()
  public preco_comprado: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
