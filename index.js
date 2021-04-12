const configExpress = require('./src/config/configExpress');
const conexao = require('./src/infra/conexao');
const Tabela = require('./src/infra/Tabelas');


conexao.connect(error => {
  if(error) throw error;

  Tabela.init(conexao);

  const app = configExpress();
  
  app.listen(3000, () => console.log('Success: Conexão estabelecida com sucesso!'));
});
