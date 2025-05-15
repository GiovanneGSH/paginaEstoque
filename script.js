/*********Linkando Variáveis do HTML no JS via ID*********/

const nome = document.getElementById('nome');
const categoria = document.getElementById('categoria');
const preco = document.getElementById('preco');
const quantidade = document.getElementById('quantidade');
const imagem = document.getElementById('imagem');
const produtoform = document.getElementById('produto-form');
const notificacao = document.getElementById('notificacao-conteudo');
const tbody = document.getElementById('produtos-lista');

//Listas para armazenar os dados do formulário

const categorias = [];

const produtos = [];


/*********Linkando uma variével a div do HTML que guarda o Formulário*********/

/*********Caminho para adicionar um evento*********/


notificacao.style.display = 'none';


/*********Criando uma função*********/

// function testeEnvio(){
//     console.log("Enviando Formulário");
// }


/*********Criando um evento*********/

// produtoform.addEventListener("submit", testeEnvio()); /*addEventListener() cria um ouvinte de eventos, o parametro é passado dentro dos parenteses ("");*/

/*a função é passada dentro do parâmetro do addEventListener()*/


// Criando função para alterar a notificação exibida no topo da página

function exibirNotificacao(mensagem, status)
{

const messageE1 = document.getElementById('notificacao-mensagem');

messageE1.textContent = mensagem;

    if (status === 'sucesso') {
        notificacao.style.backgroundColor = '#b7d5ac';
        messageE1.style.color = '#103900';
    }
    else if(status === 'alerta')
    {
        notificacao.style.backgroundColor = '#ffffa0';
        messageE1.style.color = '#646600';
    }
    else if(status === 'erro')
    {
        notificacao.style.backgroundColor = '#fb6866';
        messageE1.style.color = '#470300';
    }

    notificacao.style.display = 'block';

    // Esconde a notificação depois de 3 segundos
    setTimeout(() => {
        
        notificacao.style.display = 'none';

    }, 3000);

}

let contador = 0;

function verificaCampos() {  
    
    let contador = 0;

    let camposPreenchidos = true;

    if(nome.value == ''){
        document.getElementById('erro-nome').style.display = 'block';
        camposPreenchidos = false;
    }
    else{
        document.getElementById('erro-nome').style.display = 'none';
        contador++;
    }
    if(categoria.value == ''){
        document.getElementById('erro-categoria').style.display = 'block';
        camposPreenchidos = false;   
    }
    else{
        document.getElementById('erro-categoria').style.display = 'none';
        contador++;
    }
    if(preco.value == '') {
        document.getElementById('erro-preco').style.display = 'block';
        camposPreenchidos = false;    
    }
    else{
        document.getElementById('erro-preco').style.display = 'none';
        contador++;
    }
    if(quantidade.value == '' || quantidade.value == 0){
        document.getElementById('erro-quantidade').style.display = 'block';
        camposPreenchidos = false;  
    }
    else{
        document.getElementById('erro-quantidade').style.display = 'none';
        contador++;
    } 

    if(camposPreenchidos == false){
        return
    } 

    exibirNotificacao('Produto adicionado com sucesso!','sucesso');

    // if (contador == 4) {

    //     camposPreenchidos = false;

    //     exibirNotificacao('Nenhum produto adicionado, preencha todos os campos!','erro');
    // }
    // else if(contador > 0 && contador < 4){
    //     exibirNotificacao('Ainda faltam campos a serem preenchidos!','alerta');
    // }

    // else{
    //     exibirNotificacao('Produto adicionado com sucesso!','sucesso');
    // }    
       
    return camposPreenchidos;
    
}


/*********Criando evento de envio via arrowfunction*********/

produtoform.addEventListener('submit', (event) => {

    // produtoform.addEventListener('submit', (EVENT) => {

    //impedir de recarregar a página quando o evento de submit(envio) for chamado

    event.preventDefault();  
    
    if (verificaCampos() == false && contador == 0) {

        exibirNotificacao('Nenhum produto adicionado, preencha todos os campos!','erro');

        return;
    }     
    else if (verificaCampos() == false && contador < 4) {
        exibirNotificacao('Ainda faltam alguns campos a serem preenchidos!','alerta');
    }

    exibirNotificacao('Produto adicionado com sucesso!','sucesso');

    const produtoInserido = {

        nome: nome.value,
        categoria: categoria.value,
        preco: preco.value,
        quantidade: quantidade.value,
        imagem: imagem.value

    }
    
    // const novoProduto = nome.value;

    // const novaCategoria = categoria.value;

    // categorias.push(novaCategoria);
    // produtos.push(novoProduto);

    //pegando dos produtos que já foram salvos no localstorage
    let produtosSalvos = JSON.parse(localStorage.getItem('nomeProduto')) || []
   
    //aguardando esses dados novos na lista
    produtosSalvos.push(produtoInserido);

    //guardando a lista no localstorage, transformando os dados para 
    // json usando o JSON.stringify

    localStorage.setItem('nomeProduto', JSON.stringify(produtosSalvos));     

    // localStorage.setItem("nomeCategoria", categorias);

    // localStorage.setItem("preco", preco.value);

    // localStorage.setItem("quantidade", quantidade.value);

    // nomes = ["Giovanne", "Débora", "Raimundo"];

    // localStorage.setItem("nome", nomes); //Adiciona um item no localStorage

    // // localStorage.removeItem("nome2"); para excluir um item do localStorage
    
    // const verNomes = localStorage.getItem("nome"); // Ver o que está armazenado no localStorage

    // alert(verNomes);

    //limpando os campos do formulário
    produtoform.reset();

    adicionarItemTabela();
   
});


function adicionarItemTabela() {

    const semProdutosDiv = document.getElementById('sem-produtos');

    let produtos = JSON.parse(localStorage.getItem('nomeProduto')) || [];
    
    let valoresTabela = '';

    if (produtos.length > 0) {

        semProdutosDiv.style.display = 'none';
        
    }
   
    produtos.forEach(produto => {
        console.log(produto);
        valoresTabela += `
            <tr>
                <td></td>
                <td>${produto.nome}</td>
                <td>${produto.categoria}</td>
                <td>${produto.preco}</td>
                <td>${produto.quantidade}</td> 
            </tr>
            `;

    });
     

    tbody.innerHTML = valoresTabela
    
};

adicionarItemTabela();


