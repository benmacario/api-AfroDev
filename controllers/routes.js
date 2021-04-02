module.exports = app => {
  app.get('/agendamentos', (req, res) => {
    res.send('Rota agendamentos!!!');
  });
};
