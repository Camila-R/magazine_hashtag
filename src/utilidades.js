// [] = lista de valores / array
// {} = objeto
export const catalogo = [
    {
        id: "1",
        nome: 'PlayStation 5',
        marca: 'Sony',
        preco: 3500,
        nomeArquivoImagem: 'product1.png',
        memoria1tera: true
    },
    {
        id: "2",
        nome: 'PlayStation 4',
        marca: 'Sony',
        preco: 2800,
        nomeArquivoImagem: 'product2.png',
        memoria1tera: true
    },
    {
        id: "3",
        nome: 'PlayStation 3',
        marca: 'Sony',
        preco: 1000,
        nomeArquivoImagem: 'product3.png',
        memoria1tera: false
    },
    {
        id: "4",
        nome: 'XBOX One',
        marca: 'Microsoft',
        preco: 2500,
        nomeArquivoImagem: 'product4.png',
        memoria1tera: true
    },
    {
        id: "5",
        nome: 'XBOX 360',
        marca: 'Microsoft',
        preco: 500,
        nomeArquivoImagem: 'product5.png',
        memoria1tera: false
    },
    {
        id: "6",
        nome: 'Nintendo Switch',
        marca: 'Nintendo',
        preco: 2550,
        nomeArquivoImagem: 'product6.png',
        memoria1tera: true
    },
    {
        id: "7",
        nome: 'Nintendo Wii',
        marca: 'Nintendo',
        preco: 750,
        nomeArquivoImagem: 'product7.png',
        memoria1tera: false
    },
    {
        id: "8",
        nome: 'Super Nintendo',
        marca: 'Nintendo',
        preco: 900,
        nomeArquivoImagem: 'product8.png',
        memoria1tera: false
    },
    {
        id: "9",
        nome: 'Meta Quest 2',
        marca: 'Meta',
        preco: 2500,
        nomeArquivoImagem: 'product9.png',
        memoria1tera: true
    },
]; 

export function salvarLocalStorage(chave, informacao) {
    localStorage.setItem(chave, JSON.stringify(informacao));
  }
  
  export function lerLocalStorage(chave) {
    return JSON.parse(localStorage.getItem(chave));
  }
  
  export function apagarDoLocalStorage(chave) {
    localStorage.removeItem(chave);
  }
  
  export function desenharProdutoCarrinhoSimples(
    idProduto,
    idContainerHtml,
    quantidadeProduto
  ) {
    const produto = catalogo.find((p) => p.id === idProduto);
    const containerProdutosCarrinho = document.getElementById(idContainerHtml);
  
    const elementoArticle = document.createElement("article"); //<article></article>
    const articleClasses = [
      "flex",
      "bg-slate-300",
      "rounded-lg",
      "p-1",
      "relative",
      "mb-2"
    ];
  
    for (const articleClass of articleClasses) {
      elementoArticle.classList.add(articleClass);
    }
    //<article class="flex bg-slate-100 rounded-lg p-1 relative"></article>
  
    const cartaoProdutoCarrinho = `
      <img
        src="./assets/${produto.nomeArquivoImagem}"
        alt="Carrinho: ${produto.nome}"
        class="h-24 rounded-lg"
      />
      <div class="p-2 flex flex-col justify-between">
        <p class="text-slate-900 text-sm">
          ${produto.nome}
        </p>
        <p class="text-green-700 text-lg">$${produto.preco}</p>
      </div>
      <div class='flex text-slate-950 items-end absolute bottom-0 right-2 text-lg'>
          <p id='quantidade-${produto.id}' class='ml-2'>${quantidadeProduto}</p>
      </div>`;
    //<article class="flex bg-slate-100 rounded-lg p-1 relative">codigo do cartao do produto</article>
  
    elementoArticle.innerHTML = cartaoProdutoCarrinho;
    containerProdutosCarrinho.appendChild(elementoArticle);
  }
  