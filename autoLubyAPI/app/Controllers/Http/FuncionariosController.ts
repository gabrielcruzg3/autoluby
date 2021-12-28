import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Database from '@ioc:Adonis/Lucid/Database'
import Funcionario from 'App/Models/Funcionario'

export default class FuncionariosController {
  //
  public async index({ request }: HttpContextContract) {
    //listagem vendas/reservas
    if (request.qs().id) {
      const funcionario = await Funcionario.query()
        .from('funcionarios')
        .where('id', request.qs().id)
        .select('id', 'cpf', 'nome', 'email', 'avatar', 'biografia')
      //carros vendidos
      const vendedorId = await Database.rawQuery(
        'select * from `veiculos_vendidos` where `vendedor_id` = ? ',
        [request.qs().id]
      )
      //carros reservados
      const reservadorId = await Database.rawQuery(
        'select * from `veiculos_reservados` where `vendedor_id` = ? ',
        [request.qs().id]
      )
      //formatação da data apresentada
      const formatDate = (date) => {
        const newDate = new Date(date)
        const dateFormated = `${newDate.getDate()}/${newDate.getMonth()}/${newDate.getFullYear()}`
        return dateFormated
      }
      for (let index = 0; index < reservadorId.length; index++) {
        reservadorId[index].data = formatDate(reservadorId[index].data)
      }
      for (let index = 0; index < vendedorId.length; index++) {
        vendedorId[index].data = formatDate(vendedorId[index].data)
      }
      //

      return { funcionario, vendas: vendedorId, reservas: reservadorId }
    }
    //paginação
    const page = request.qs().page || 1
    const limit = request.qs().limit || 20
    const funcionarios = await Funcionario.query().paginate(page, limit)

    return funcionarios
  }

  public async store({ request, response }: HttpContextContract) {
    //
    const validatedData = await request.validate({
      schema: schema.create({
        cpf: schema.number([rules.unique({ table: 'funcionarios', column: 'cpf' })]),
        nome: schema.string(),
        email: schema.string({ trim: true }, [
          rules.email({ sanitize: true }),
          rules.unique({ table: 'funcionarios', column: 'email' }),
        ]),
        avatar: schema.string(), //recebe uma url, (#todo processar arquivos)
        biografia: schema.string(),
        password: schema.string(),
      }),
      messages: {
        'required': 'the field {{ field }} is required',
        'cpf.range': 'O cpf deve ter 11 números sem hiphen',
        'cpf.unique': 'cpf ja cadastrado',
        'email.unique': 'email já cadastrado',
        'password': 'password is required',
      },
    })

    const funcionario = await Funcionario.create(validatedData)
    response.status(201)
    const { cpf, nome, email, avatar, biografia, id } = funcionario

    return {
      funcionario: {
        cpf,
        nome,
        email,
        avatar,
        biografia,
        id,
      },
    }
  }

  // public async show({ request }: HttpContextContract) {
  //   const funcionario = await Funcionario.findOrFail(request.qs().id)

  // const vendedorId = await Database.rawQuery(
  //   'select * from `veiculos_vendidos` where `vendedor_id` = ? ',
  //   [request.qs().id]
  // )

  // const reservadorId = await Database.rawQuery(
  //   'select * from `veiculos_reservados` where `vendedor_id` = ? ',
  //   [request.qs().id]
  // )

  // return { funcionario, vendas: vendedorId, reservas: reservadorId }
  // }

  public async update({ params, request }: HttpContextContract) {
    const funcionario = await Funcionario.query()
      .from('funcionarios')
      .where('id', params.id)
      .select('id', 'cpf', 'nome', 'email', 'avatar', 'biografia')
    const validatedData = await request.validate({
      schema: schema.create({
        cpf: schema.number(),
        nome: schema.string(),
        email: schema.string({ trim: true }, [rules.email({ sanitize: true })]),
        // avatar: schema.string(),
        biografia: schema.string(),
        password: schema.string(),
      }),
      messages: {
        required: 'the field {{field}} is required',
      },
    })

    funcionario[0].merge(validatedData).save()
    const { cpf, nome, email, avatar, biografia, id } = funcionario[0]

    return {
      funcionario: {
        cpf,
        nome,
        email,
        avatar,
        biografia,
        id,
      },
    }
  }

  public async destroy({ params }: HttpContextContract) {
    const funcionario = await Funcionario.findOrFail(params.id)

    await funcionario.delete()

    return { message: 'deletado com sucesso' }
  }
}
