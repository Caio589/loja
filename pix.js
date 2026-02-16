module.exports = async (req, res) => {
  const { valor } = req.body;

  // aqui entra a integração real com Gerencianet
  // por enquanto mock pra testar a loja

  res.json({
    qrcode: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=PIX"
  });
};
