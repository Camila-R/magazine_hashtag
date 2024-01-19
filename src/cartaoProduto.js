import { catalogo } from "./utilidades"
import { adicionarAoCarrinho } from "./menuCarrinho"

export function renderizarCatalogo (){
    for ( const produtoCatalogo of catalogo) {
    const cartaoProduto =
    `<div class='w-80 m-2 flex flex-col p-2 justify-between shadow-xl shadow-slate-400 rounded-lg group ${produtoCatalogo.memoria1tera ? 'memoria1tera' : 'semMemoria'}' id="card-produto-${produtoCatalogo.id}">
        <img class="group-hover:scale-110 duration-300 my-3 rounded-lg" src="./assets/${produtoCatalogo.nomeArquivoImagem}" alt="Imagem do console" style="height: 300px;">
        <div class="dados-produto">
            <p class='nomeProduto text-sm'>${produtoCatalogo.nome}</p>
            <p class='text-sm'>Marca ${produtoCatalogo.marca}</p>
            <p class='price-card text-sm'>Preço R$ ${produtoCatalogo.preco}</p>
        </div>
        <button id='adicionar-${produtoCatalogo.id}' class="botao-adicionar">Adicionar <i class="fa-solid fa-cart-plus"></i></button>
    </div>`

    // () = ação
    // += = acrescenta
    document.getElementById('container-produto').innerHTML += cartaoProduto
  }

  for (const produtoCatalogo of catalogo){
    document
    .getElementById(`adicionar-${produtoCatalogo.id}`)
    .addEventListener("click", () => adicionarAoCarrinho(produtoCatalogo.id))
  }

}
