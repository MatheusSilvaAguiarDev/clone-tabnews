function status(resquest, response) {
  response.status(200).json({ chave: "são acima da média" });
}

export default status;
