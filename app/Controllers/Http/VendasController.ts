import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'
import Database from '@ioc:Adonis/Lucid/Database'

export default class VendasController {
  public async update({ request, params }: HttpContextContract) {
    const veiculoId = await Database.rawQuery(
      'select `status`, `id` from `veiculos` where `id` = ? ',
      [params.veiculo_id]
    )

    const funcionarioId = await Database.rawQuery(
      'select `id` from `funcionarios` where `id` = ? ',
      [params.funcionario_id]
    )

    if (veiculoId[0].status !== 'disponivel') {
      return { message: 'it is only possible to sell an available vehicle' }
    }

    const validatedData = await request.validate({
      schema: schema.create({
        valor_venda: schema.number(),
      }),
      messages: {
        required: 'the field {{ field }} is required',
      },
    })
    const vendido = await Database.table('veiculos_vendidos').insert({
      veiculo_id: veiculoId[0].id,
      valor_vendido: validatedData.valor_venda,
      vendedor_id: funcionarioId[0].id,
      data: Date.now(),
    })

    const atualizado = await Database.from('veiculos')
      .where('id', params.veiculo_id)
      .update({ status: 'vendido' })

    return { vendido, atualizado }
  }
}
