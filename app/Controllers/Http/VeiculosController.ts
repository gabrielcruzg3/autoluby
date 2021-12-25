import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Veiculo from 'App/Models/Veiculo'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class VeiculosController {
  public async index({ request }: HttpContextContract) {
    const page = request.qs().page || 1
    const limit = request.qs().limit || 20
    const veiculos = await Veiculo.query().paginate(page, limit)
    return veiculos
  }

  public async create({ request, response }: HttpContextContract) {
    const validatedData = await request.validate({
      schema: schema.create({
        chassi: schema.string({ trim: true }, [
          rules.unique({ table: 'veiculos', column: 'chassi' }),
        ]),
        marca: schema.string({ trim: true }),
        modelo: schema.string({ trim: true }),
        ano: schema.number(),
        km: schema.string({ trim: true }),
        cor: schema.string({ trim: true }),
        status: schema.string({ trim: true }),
        preco_comprado: schema.number(),
      }),
      messages: {
        'required': 'o campo não pode ficar vazio',
        'chassi.unique': 'chassi is required',
      },
    })

    const veiculo = await Veiculo.create(validatedData)
    response.status(201)
    return veiculo
  }

  public async show({ params }: HttpContextContract) {
    const veiculo = Veiculo.findOrFail(params.id)
    return veiculo
  }

  public async edit({ params, request }: HttpContextContract) {
    const veiculo = await Veiculo.findOrFail(params.id)
    const data = await request.validate({
      schema: schema.create({
        chassi: schema.string({ trim: true }),
        marca: schema.string({ trim: true }),
        modelo: schema.string({ trim: true }),
        ano: schema.number(),
        km: schema.string({ trim: true }),
        cor: schema.string({ trim: true }),
        status: schema.string({ trim: true }),
        preco_comprado: schema.number(),
      }),
      messages: {
        required: 'o campo {field} não pode ficar vazio',
      },
    })
    veiculo.merge(data).save()
    return veiculo
  }

  public async destroy({ params }: HttpContextContract) {
    const funcionario = await Veiculo.findOrFail(params.id)
    await funcionario.delete()
    return { message: 'deletado com sucesso' }
  }
}
