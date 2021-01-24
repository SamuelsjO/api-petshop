const ModeloTabela = require('../rotas/fornecedores/ModelTabelaFornecedor')

ModeloTabela.sync().then( () => console.log('Tabela criada com sucesso')).catch(console.log)