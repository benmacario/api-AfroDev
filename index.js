const configExpress = require('./config/configExpress');
const conexao = require('./infra/conexao');

const app = configExpress();

conexao.connect(error => {
  if(error) throw error
  
  app.listen(3000, () => console.log('Conexão estabelecida'));
})
