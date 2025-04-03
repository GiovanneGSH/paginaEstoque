/*********Linkando Variáveis do HTML no JS via ID*********/

const nome = document.getElementById("nome");
const categoria = document.getElementById("categoria");
const preco = document.getElementById("preco");
const quantidade = document.getElementById("quantidade");
const imagem = document.getElementById("imagem");


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
    if(nome.value == ''){
        document.getElementById("erro-nome").style.display = 'block';        
    }
    else{
        document.getElementById("erro-nome").style.display = 'none';
    }
    if(categoria.value == ''){
        document.getElementById("erro-categoria").style.display = 'block';
    }
    else{
        document.getElementById('erro-categoria').style.display = 'none';
    }
    if(preco.value == '') {
        document.getElementById('erro-preco').style.display = 'block';
    }
    else{
        document.getElementById('erro-preco').style.display = 'none';
    }
    if(quantidade.value == ''){
        document.getElementById('erro-quantidade').style.display = 'block';
    }
    else{
        document.getElementById('erro-quantidade').style.display = 'none';
    }
});




