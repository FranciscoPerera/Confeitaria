// Vamos criar os elementos do html com o javascript
/*
function criarItemCardapio(titulo, descricao, preco, foto) {

    const divCardapio = document.createElement('div');
    divCardapio.className = 'item-cardapio';

    const h3Titulo = document.createElement('h3');
    h3Titulo.textContent = titulo;

    const pDescricao = document.createElement('p');
    pDescricao.textContent = descricao;
    pDescricao.className = 'descricao';

    const pPreco = document.createElement('p');
    pPreco.textContent = 'Preço: R$ ' + preco.toFixed(2);

    const img = document.createElement('img');
    img.src = foto;
    img.className = 'img-item';

    const divC = document.getElementById('cardapio');

    divCardapio.appendChild(h3Titulo);
    divCardapio.appendChild(pDescricao);
    divCardapio.appendChild(pPreco);
    divCardapio.appendChild(img);

    divC.appendChild(divCardapio);
}    

criarItemCardapio(
    'Bolo De Chocolate',
    'Bolo de chocolate com recheio de brigadeiro e cobertura de ganache. Uma delícia para os amantes de chocolate.',
     45.00,
    'img/2.jpeg'
)

criarItemCardapio(
    'Bolo De Morango',
    'Bolo com morango, calda de morango caseira e cobertura de chantilly. Perfeito para celebrações especiais.',
     50.00,
    'img/1.jpeg'
)

criarItemCardapio(
    'Bolo De Cenora',
    'Bolo de cenoura fofinho com cobertura de chocolate. Uma combinação clássica que agrada a todos.',
     40.00,
    'img/3.jpeg'
)

criarItemCardapio(
    'Bolo De Limão',
    'Bolo de limão refrescante com recheio cremoso e cobertura de merengue. Ideal para quem gosta de sabores cítricos.',
     48.00,
    'img/4.jpeg'
)

criarItemCardapio(
    'Bolo Red Velvet',
    'Bolo Red Velvet com recheio de cream cheese e cobertura de glacê. Uma escolha sofisticada para ocasiões especiais.',
     55.00,
    'img/5.jpeg'
)

criarItemCardapio(
    'Bolo De Coco',
    'Bolo de coco macio com recheio de creme de coco e cobertura de coco ralado. Uma delícia tropical.',
     42.00,
    'img/6.jpeg'
)
*/

// URL da API
const API_URL = "https://confeitaria-api-1q7p.onrender.com/confeitaria/cardapio";

// Função para criar o card visualmente
function criarItemCardapio(item) {
    const divCardapio = document.createElement("div");
    divCardapio.className = "item-cardapio";

    const h3Titulo = document.createElement("h3");
    h3Titulo.textContent = item.nome || "Item sem nome";

    const pDescricao = document.createElement("p");
    pDescricao.textContent = item.descricao || "Sem descrição disponível";
    pDescricao.className = "descricao";

    const pPreco = document.createElement("p");
    pPreco.textContent = "Preço: R$ " + (item.preco?.toFixed(2) || "0,00");

    const img = document.createElement("img");
    img.src = item.foto || "img/default.jpg";
    img.className = "img-item";

    divCardapio.appendChild(h3Titulo);
    divCardapio.appendChild(pDescricao);
    divCardapio.appendChild(pPreco);
    divCardapio.appendChild(img);

    document.getElementById("cardapio").appendChild(divCardapio);
}

// Buscar dados da API
async function carregarCardapio() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();

        console.log("Dados recebidos:", data);

        data.forEach(item => criarItemCardapio(item));
    } catch (error) {
        console.error("Erro ao carregar cardápio:", error);
    }
}

// Carregar ao abrir página
carregarCardapio();
