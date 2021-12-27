import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return
})

Route.group(() => {
  Route.get('/funcionarios/:?page=1&limit=&id=', 'FuncionariosController.index')
  Route.post('/funcionarios', 'FuncionariosController.store')
  Route.put('/funcionarios/:id', 'FuncionariosController.update')
  Route.delete('/funcionarios/:id', 'FuncionariosController.destroy')
  // Route.get('/funcionarios/negociacoes/:id', 'FuncionariosController.show')
})

Route.group(() => {
  Route.post('/veiculos', 'VeiculosController.store')
  Route.get('/veiculos', 'VeiculosController.index')
  Route.delete('/veiculos/:id', 'VeiculosController.destroy')
  Route.put('/veiculos/:id', 'VeiculosController.update')
})

Route.put(
  '/veiculo/:veiculo_id/funcionario/:funcionario_id/reservar/:id',
  'ReservasController.update'
)
Route.put('/veiculo/:veiculo_id/funcionario/:funcionario_id/vender/:id', 'VendasController.update')
// Route.resource('veiculo.vender', 'VeiculosController').apiOnly()
