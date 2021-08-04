const listClients = () => { // pega dados e da uma resposta

  return fetch('http://localhost:3000/profile')
  .then (res => {
    return res.json();
  });

}

export const clientService = {
  listClients
}