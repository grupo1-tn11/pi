const result = fetch('../perfil.json')
  .then((response) => response.json())
  .then((decoded) => decoded)
  .catch((erro) => {
    console.log(erro)
})

console.log(result.Promise.PromiseResult);