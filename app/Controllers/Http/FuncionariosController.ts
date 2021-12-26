import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Funcionario from 'App/Models/Funcionario'

export default class FuncionariosController {
  public async index({ request }: HttpContextContract) {
    // const id =  || 1
    if (request.qs().id) {
      const funcionario = await Funcionario.findOrFail(request.qs().id)
      return funcionario
    }
    const page = request.qs().page || 1
    const limit = request.qs().limit || 20
    const funcionarios = await Funcionario.query().paginate(page, limit)
    return funcionarios
  }

  public async store({ request, response }: HttpContextContract) {
    const validatedData = await request.validate({
      schema: schema.create({
        cpf: schema.number([rules.unique({ table: 'funcionarios', column: 'cpf' })]),
        nome: schema.string(),
        email: schema.string({ trim: true }, [
          rules.email({ sanitize: true }),
          rules.unique({ table: 'funcionarios', column: 'email' }),
        ]),
        avatar: schema.string(), //recebe uma url, somente(por enquanto #todo processar arquivos)
        biografia: schema.string(),
        senha: schema.string(),
      }),
      messages: {
        'required': 'the {{ cpf }} is required',
        'cpf.range': 'O cpf deve ter 11 números sem hiphen',
        'cpf.unique': 'cpf ja cadastrado',
        'email.unique': 'email já cadastrado',
        'senha': 'senha is required',
      },
    })

    const funcionario = await Funcionario.create(validatedData)
    response.status(201)
    return funcionario
  }

  // public async show({ request }: HttpContextContract) {
  //   if (request.qs().id !== '') {
  //     const funcionario = await Funcionario.findOrFail(request.qs().id)
  //     return funcionario
  //   } else {
  //   }
  // }

  public async update({ params, request }: HttpContextContract) {
    const funcionario = await Funcionario.findOrFail(params.id)
    const validatedData = await request.validate({
      schema: schema.create({
        cpf: schema.number(),
        nome: schema.string(),
        email: schema.string({ trim: true }, [rules.email({ sanitize: true })]),
        avatar: schema.string(),
        biografia: schema.string(),
        senha: schema.string(),
      }),
      messages: {
        required: 'the field {{field}} is required',
      },
    })

    funcionario.merge(validatedData).save()
    return funcionario
  }

  public async destroy({ params }: HttpContextContract) {
    const funcionario = await Funcionario.findOrFail(params.id)

    await funcionario.delete()

    return { message: 'deletado com sucesso' }
  }
}
