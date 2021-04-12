const conexao = require('../infra/conexao');
const moment = require('moment');

class Agendamento {
  listagem(res) {
    const sql = 'SELECT * FROM agendamentos';
    conexao.query(sql, (error, result) => {
      if(error) {
        res.status(400).json(error);
      }

      res.status(200).json(result);
    });
  }

  inserir(agendamento, res) {
    const sql = 'INSERT INTO agendamentos SET ?';

    const data_servico = moment(agendamento.data_servico).format('YYYY-MM-DD');
    const data_agendamento = moment().format('YYYY-MM-DD');
    const agendamentoComData = {...agendamento, data_servico, data_agendamento}

    const isDatValida = moment(agendamento.data_servico).isSameOrAfter(agendamento.data_agendamento);
    const validacoes = [
      {
        nome: "data_servico",
        valido: isDatValida,
        mensagem: "Data do agendamento deve ser igual ou superior a " + data_agendamento
      }
    ];

    const errors = validacoes.filter(campo => campo.valido);

    if(errors.length > 0) {
      return res.status(400).json(errors);
    }

    conexao.query(sql, agendamentoComData, (error, result) => {
      if(error) {
        res.status(400).json(error);
      }

      res.status(201).json({...agendamento, id: result.insertId});
    });
  }
}

module.exports = new Agendamento;