import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return
})

Route.group(() => {
  Route.get('/funcionarios/', 'FuncionariosController.index')
  Route.post('/funcionarios', 'FuncionariosController.store')
  Route.put('/funcionarios/:id', 'FuncionariosController.update')
  Route.delete('/funcionarios/:id', 'FuncionariosController.destroy')
})

// Route.get('/funcionarios/negociacoes/:id', 'FuncionariosController.show')

Route.group(() => {
  Route.post('/veiculos', 'VeiculosController.create')
  Route.get('/veiculos', 'VeiculosController.index')
  // Route.get('/veiculos/:?status=', 'VeiculosController.show')
  Route.delete('/veiculos/:id', 'VeiculosController.destroy')
})

Route.put('/veiculos/:id', 'VeiculosController.edit')
//   Route.post('/veiculos',)
