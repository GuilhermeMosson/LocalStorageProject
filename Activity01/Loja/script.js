let produtos

window.onload = function () {
    var user = JSON.parse(localStorage.getItem('usuario'));
    console.log(user);

    document.getElementById('user').textContent = user.name
    document.getElementById('perfil').textContent =  `${user.name} - Registro de login - ${user.dataEntrada}`
    document.getElementById('idPerfil').textContent = user.id

}  

document.addEventListener('DOMContentLoaded', function (){
    fetch('../Dados/loja.json').then((response) => response.json()).then((data) => {
        produtos = data;
        const produtosContainer = document.getElementById('produtos-container');
        
        produtos.forEach((produtos, index) => {
            const card = document.createElement('div')
            card.className = 'card'  
            card.style.width = '18rem'
            card.style.marginRight = '10px'
            card.style.marginBottom = '2vh'

            const image = document.createElement('img')
            image.src = produtos.imagem
            image.className = 'card-img-top'

            const cardBody = document.createElement('div')
            cardBody.className = 'card-title'

            const cardTitle = document.createElement('h5')
            cardTitle.className = 'card-text'
            cardTitle.textContent = produtos.descricao

            const cardText = document.createElement('p')
            cardText.className = 'card-title'
            cardText.textContent = produtos.preco

            const btnAdicionarAoCarrinho = document.createElement('a')
            btnAdicionarAoCarrinho.href = '#'
            btnAdicionarAoCarrinho.className = 'btn btn-info btn-adicionar-ao-carrinho'
            btnAdicionarAoCarrinho.textContent = 'Adicionar ao carrinho'
            btnAdicionarAoCarrinho.setAttribute('data-indice', index)

            cardBody.appendChild(cardTitle)
            cardBody.appendChild(cardText)
            cardBody.appendChild(btnAdicionarAoCarrinho)

            card.appendChild(image)
            card.appendChild(cardBody)

            produtosContainer.appendChild(card)
        });

    }).catch((error) => console.error('Erro ao carrgar o arquivo JSON', error))

    $('#produtos-container').on('click', ".btn-adicionar-ao-carrinho", function() {
        const indexDoProduto = $(this).data('indice');
        const produtoSelecionado = produtos[indexDoProduto];

        let carrinho = JSON.parte(localStorage.getItem('carrinho')) || [];
        carrinho.push(produtoSelecionado);
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
        alert('PRODUTO ADICIONADO AO CARRINHO');
    })
})