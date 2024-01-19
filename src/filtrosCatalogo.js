const catalogoProdutos = document.getElementById('container-produto')

function exibirTodos(){
    const produtosEscondidos = Array.from(catalogoProdutos.getElementsByClassName('hidden'));

    for(const produto of produtosEscondidos) {
        produto.classList.remove('hidden');
       }
}

function esconderSemMemoria(){
   exibirTodos();
   const produtosSemMemoria = 
   Array.from(catalogoProdutos.getElementsByClassName('semMemoria')
   );

   for(const produto of produtosSemMemoria){
    produto.classList.add('hidden')
   }
}

function esconderMemoria1Tera(){
    exibirTodos();
    const produtosMemoria1Tera = 
    Array.from(catalogoProdutos.getElementsByClassName('memoria1tera')
    );
 
    for(const produto of produtosMemoria1Tera){
     produto.classList.add('hidden')
    }
 }

export function inicializarFiltros(){
    document
    .getElementById('exibir-todos')
    .addEventListener('click', exibirTodos)
    document
    .getElementById('exibir-memoria1tera')
    .addEventListener('click', esconderSemMemoria)
    document
    .getElementById('exibir-semMemoria')
    .addEventListener('click', esconderMemoria1Tera)
}