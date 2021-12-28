import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Funcionario from 'App/Models/Funcionario'
import Veiculo from 'App/Models/Veiculo'
import VeiculosReservado from 'App/Models/VeiculosReservado'
import VeiculosVendido from 'App/Models/VeiculosVendido'

export default class FuncionarioSeeder extends BaseSeeder {
  //
  public static developmentOnly = true
  //
  public async run() {
    //
    await Funcionario.create({
      cpf: 15948726359,
      nome: 'admin',
      email: 'admin@localhost.com',
      password: '$trong3stPwdEver',
      biografia: 'lorem ipsum...',
    })
    //
    await Veiculo.createMany([
      {
        chassi: 'fae45f4e',
        marca: 'Ford',
        modelo: 'Ka',
        ano: 2022,
        km: '0km',
        cor: 'branco',
        status: 'disponivel',
        preco_comprado: 50000,
      },
      {
        chassi: 'fd87g8fd',
        marca: 'Fiat',
        modelo: 'Toro',
        ano: 2022,
        km: '0km',
        cor: 'indigo',
        status: 'vendido',
        preco_comprado: 90000,
      },
      {
        chassi: 's879fd89',
        marca: 'Ford',
        modelo: 'Fusion',
        ano: 2022,
        km: '0km',
        cor: 'black',
        status: 'reservado',
        preco_comprado: 150000,
      },
    ])
    //
    await VeiculosVendido.create({
      veiculo_id: 2,
      valor_vendido: 98000,
      vendedor_id: 1,
    })
    //
    await VeiculosReservado.create({
      veiculo_id: 3,
      valor_reservado: 160000,
      vendedor_id: 1,
    })
  }
}
