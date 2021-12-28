import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return 'Olá, bem vindo a AutoLuby!'
})

Route.post('/login', 'AuthController.login')

Route.post('/funcionarios', 'FuncionariosController.store')

Route.group(() => {
  Route.group(() => {
    Route.get('/:?page=1&limit=&id=', 'FuncionariosController.index')
    Route.put('/:id', 'FuncionariosController.update')
    Route.delete('/:id', 'FuncionariosController.destroy')
    // Route.get('/negociacoes/:id', 'FuncionariosController.show')
  }).prefix('/funcionarios')

  Route.group(() => {
    Route.post('', 'VeiculosController.store')
    Route.get('', 'VeiculosController.index')
    Route.delete('/:id', 'VeiculosController.destroy')
    Route.put('/:id', 'VeiculosController.update')
    //
  }).prefix('/veiculos')

  Route.group(() => {
    Route.put('/reservar/:id', 'ReservasController.update')
    Route.put('/vender/:id', 'VendasController.update')
    //
  }).prefix('/veiculo/:veiculo_id/funcionario/:funcionario_id')

  Route.get('/logout', 'AuthController.logout')
  //
}).middleware('auth:api,api')
