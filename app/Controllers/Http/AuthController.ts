import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Funcionario from 'App/Models/Funcionario'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Hash from '@ioc:Adonis/Core/Hash'
// import Auth from 'App/Models/Auth'

export default class AuthController {
  public async login({ auth, request, response }: HttpContextContract) {
    // const logar = await request.validate({
    //   schema: schema.create({
    //     email: schema.string({ trim: true }, [rules.email({ sanitize: true })]),
    //     senha: schema.string(),
    //   }),
    //   messages: {
    //     required: 'the field {{ field }} is required',
    //   },
    // })
    // const { email, senha } = logar
    const email = request.input('email')
    const senha = request.input('senha')
    //
    try {
      const funcionario = await Funcionario.query()
        .from('funcionarios')
        .where('email', email)
        .select('id', 'cpf', 'nome', 'email', 'avatar', 'biografia')

      const token = await auth.use('api').attempt(email, Hash.make(senha), {
        name: funcionario[0].email,
      })
      return { funcionario, token }
    } catch {
      return response.badRequest('Invalid credentials')
    }
  }

  // public async logout({ auth, response }:HttpContextContract) => {
  //     await auth.use('api').revoke()
  //     return {
  //       revoked: true
  //     }

  // }
}
