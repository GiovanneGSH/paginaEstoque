/*********Linkando Variáveis do HTML no JS via ID*********/

const nome = document.getElementById("nome");
const categoria = document.getElementById("categoria");
const preco = document.getElementById("preco");
const quantidade = document.getElementById("quantidade");
const imagem = document.getElementById("imagem");

//Listas para armazenar os dados do formulário

const categorias = [];

const produtos = [];


/*********Linkando uma variével a div do HTML que guarda o Formulário*********/

/*********Caminho para adicionar um evento*********/

const produtoform = document.getElementById("produto-form");


/*********Criando uma função*********/

// function testeEnvio(){
//     console.log("Enviando Formulário");
// }


/*********Criando um evento*********/

// produtoform.addEventListener("submit", testeEnvio()); /*addEventListener() cria um ouvinte de eventos, o parametro é passado dentro dos parenteses ("");*/

/*a função é passada dentro do parâmetro do addEventListener()*/


/*********Criando evento de envio via arrowfunction*********/

produtoform.addEventListener("submit", (event) => {
    event.preventDefault();

    let camposPreenchidos = true;

    if(nome.value == ''){
        document.getElementById("erro-nome").style.display = 'block';
        camposPreenchidos = false;        
    }
    else{
        document.getElementById("erro-nome").style.display = 'none';
    }
    if(categoria.value == ''){
        document.getElementById("erro-categoria").style.display = 'block';
        camposPreenchidos = false; 
    }
    else{
        document.getElementById('erro-categoria').style.display = 'none';
    }
    if(preco.value == '') {
        document.getElementById('erro-preco').style.display = 'block';
        camposPreenchidos = false; 
    }
    else{
        document.getElementById('erro-preco').style.display = 'none';
    }
    if(quantidade.value == ''){
        document.getElementById('erro-quantidade').style.display = 'block';
        camposPreenchidos = false; 
    }
    else{
        document.getElementById('erro-quantidade').style.display = 'none';
    }

    // nomes = ["Giovanne", "Débora", "Raimundo"];

    // localStorage.setItem("nome", nomes); //Adiciona um item no localStorage

    // // localStorage.removeItem("nome2"); para excluir um item do localStorage
    
    // const verNomes = localStorage.getItem("nome"); // Ver o que está armazenado no localStorage

    // alert(verNomes);

    if(camposPreenchidos == false){
        return
    }


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

    produtos.push(produtoInserido);


    localStorage.setItem("nomeProduto", JSON.stringify(produtos));
    
    // localStorage.setItem("nomeCategoria", categorias);

    // localStorage.setItem("preco", preco.value);

    // localStorage.setItem("quantidade", quantidade.value);

});




