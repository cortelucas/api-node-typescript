const createNewLine = (nome, email) => {
  const lineNewClient = document.createElement('tr')
  const content = `
    <td class="td" data-td>${nome}</td>
    <td>${email}</td>
    <td>
        <ul class="tabela__botoes-controle">
            <li><a href="../telas/edita_cliente.html" class="botao-simples botao-simples--editar">Editar</a></li>
            <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
        </ul>
    </td>
  `;

  lineNewClient.innerHTML = content;

  return lineNewClient;
}

const table = document.querySelector('[data-tabela]');

const listClients = () => {

  return fetch('http://localhost:3000/profile')
  .then (res => {
    return res.json();
  });

}

listClients()
  .then(data => {
      data.forEach( cliente => {
        table.appendChild(createNewLine(cliente.nome, cliente.email));
      });
  });