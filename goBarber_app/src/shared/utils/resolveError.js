const resolveError = error => {
  const { response, message } = error;
  if (response && response.data) {
    return response.data.message || 'Nosso serviço está fora do ar';
  }

  if(message) {
    return message;
  }

  return 'Ocorreu algum erro interno, tente mais tarde';
}

export default resolveError;
