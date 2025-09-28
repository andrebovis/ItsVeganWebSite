
const produtos = {
    // ================== MASSAS ==================
    'pesto-incrivel': {
        titulo: 'Pesto Incrível',
        descricao: 'Nosso pesto é simplesmente incrível, feito com nozes, manjericão e creme de leite vegetal. Queijo parmesão ralado delicioso e sua opção de frango ou linguiça (ambos de proteína de ervilha).',
        detalhes: 'Serve 1 pessoa (420g)',
        preco: 'R$ 37,90',
        imagem: 'images/pesto.jpg'
    },
    
    // ================== COMBOS ==================
    'combo-brooklyn': {
        titulo: 'Combo Brooklyn (Meat Salad Burger) + Fritas + Bebida',
        descricao: 'Nosso tradicional Brooklyn com delicioso pão de hambúrguer com gergelim (opção sem glúten), incrível burguer de carne plant based (100g e base de ervilha - pode conter glúten) e o chocante queijo de castanhas com cebola, picles, tomate fresquinho e um toque de ketchup e mostarda pra finalizar. Acompanha batata frita feita na casa (opções de troca com adicional) e a um refri ou agua, também com trocas opcionais.',
        detalhes: 'Serve 1 pessoa',
        preco: 'R$ 56,90',
        imagem: 'images/brooklyn.jpg'
    },
    'combo-buckhead': {
        titulo: 'Combo Buckhead (Chicken Burger) + Fritas + Bebida',
        descricao: 'Tradicional Buckhead - delicioso burger de frango Plant Based ( base de ervilha) , pão de hambúrguer com gergelim ( opção sem glúten),burguer de frango ( base de ervilha - pode conter glúten) cebola caramelizada da casa feita com açúcar mascavo ,alface fresquinha , tomate, incrível queijo prato ( feito de castanhas)com fritas e bebida .',
        detalhes: 'Serve 1 pessoa',
        preco: 'R$ 56,90',
        imagem: 'images/buckhead.jpg'
    },
    'combo-gangnam': {
        titulo: 'Combo Gangnam - Korean Style Chicken Burger + Fritas + Bebida',
        descricao: 'Deliciosa receita Coreana: Pão de burger com gergelim ( opção sem glúten), alface fresca ,incrível burger de frango plant based chocante( base de ervilha - pode conter glúten) queijo prato de castanha de caju, tradicional maionese coreana de Goguchang ( opções médio picante ou muito picante) completando com a saborosa salada Coreana ( repolho roxo, repolho branco ,cebolinha e cenoura grelhados). Acompanha fritas e bebida (opções de troca disponíveis)',
        detalhes: 'Serve 1 pessoa',
        preco: 'R$ 58,90',
        imagem: 'images/gangnam.jpg'
    },
    'combo-hutteldorf': {
        titulo: 'Combo Hutteldorf-Schnitzel de Frango + Fritas + Bebida',
        descricao: 'Incrivel receita Austriaca ! Delicioso filé de frango plant based empanado( base de ervilha) Baguete,cole slaw da chef (maionese de repolho rouxo,verde e cenoura) e rucula- acompanha Bebida e Fritas com opções de troca. Fica melhor ainda com Chrein(opcional) a raíz forte de beterraba tradicional do leste Europeu',
        detalhes: 'Serve 1 pessoa',
        preco: 'R$ 62,90',
        imagem: 'images/hutteldorf-combo.jpg' // Adicione  imagem aqui
    },
    'combo-choripan': {
        titulo: 'Choripán Combo',
        descricao: 'Deliciosa receita tradicional Argentina: Pão francês fresquinho, 2 linguiças de 40 gramas plant based (base de ervilha - pode conter glúten), vinagrete temperado com limão, maionese de castanhas e chimichurri. Acompanha Bebida e fritas com opções de troca.',
        detalhes: 'Serve 1 pessoa',
        preco: 'R$ 53,90',
        imagem: 'images/palermo.jpg'
    },
    'romerberg-combo': {
        titulo: 'Romerberg Combo',
        descricao: 'Incrível receita Alemã! Delicioso pão de hotdog, 2 chocante linguiça de 40 grama (plant based base de ervilha - pode conter glúten), delicioso chucrute temperado e mostarda Dijon. Acompanha fritas e bebida com opções de troca disponíveis.',
        detalhes: 'Serve 1 pessoa',
        preco: 'R$ 56,90',
        imagem: 'images/romerberg.jpg'
    },
    
    // ================== A LA CARTE (SOLO) ==================
    'burger-brooklyn-solo': {
        titulo: 'Burger Brooklyn (Meat Salad Burger)',
        descricao: 'Nosso tradicional Brooklyn com delicioso pão de hambúrguer com gergelim (opção sem glúten), incrível burger de carne plant based (100g e base de ervilha - pode conter glúten) e o chocante queijo de castanhas com cebola, picles, tomate fresquinho e um toque de ketchup e mostarda para finalizar.',
        detalhes: '',
        preco: 'R$ 37,90',
        imagem: 'images/brooklyn.jpg'
    },
    'burger-buckhead-solo': {
        titulo: 'Burger Buckhead (Chicken Burger)',
        descricao: 'Tradicional Buckhead - delicioso burger de frango Plant Based (base de ervilha), pão de hambúrguer com gergelim (opção sem glúten), burger de frango (base de ervilha - pode conter glúten), cebola caramelizada da casa feita com açúcar mascavo, alface fresquinha, tomate e incrível queijo prato (feito de castanhas).',
        detalhes: '',
        preco: 'R$ 40,90',
        imagem: 'images/buckhead.jpg'
    },
    'burger-gangnam-solo': {
        titulo: 'Burger Gangnam - Korean Style Chicken Burger',
        descricao: 'Deliciosa receita Coreana: Pão de burger com gergelim (opção sem glúten), alface fresca, incrível burger de frango plant based chocante (base de ervilha - pode conter glúten), queijo prato de castanha de caju, tradicional maionese coreana de Goguchang (opções médio picante ou muito picante) completando com a saborosa salada Coreana (repolho roxo, repolho branco, cebolinha e cenoura grelhados).',
        detalhes: '',
        preco: 'R$ 44,70',
        imagem: 'images/gangnam.jpg'
    },
    'hutteldorf-schnitzel-solo': {
        titulo: 'Hutteldorf-Schnitzel de Frango',
        descricao: 'Incrível receita Austríaca! Delicioso filé de frango plant based empanado (base de ervilha) Baguete, cole slaw da chef (maionese de repolho roxo, verde e cenoura) e rúcula. Fica melhor ainda com Chrein (opcional) a raiz forte de beterraba tradicional do leste Europeu.',
        detalhes: '',
        preco: 'R$ 49,90',
        imagem: 'images/hutteldorf.jpg'
    },
    'choripan-solo': {
        titulo: 'Choripán',
        descricao: 'Deliciosa receita tradicional Argentina: Pão francês fresquinho, 2 linguiças de 40 gramas plant based (base de ervilha - pode conter glúten), vinagrete temperado com limão, maionese de castanhas e chimichurri.',
        detalhes: '',
        preco: 'R$ 33,90',
        imagem: 'images/palermo.jpg'
    },
    'hotdog-alemao-solo': {
        titulo: 'Romerberg',
        descricao: 'Incrível receita Alemã! Delicioso pão de hotdog, 2 chocante linguiça de 40 grama (plant based base de ervilha - pode conter glúten), delicioso chucrute temperado e mostarda Dijon.',
        detalhes: '',
        preco: 'R$ 36,90',
        imagem: 'images/cachorro-quente.jpg'
    }
};


const urlParams = new URLSearchParams(window.location.search);
const produtoId = urlParams.get('id');


if (produtoId && produtos[produtoId]) {
    const produto = produtos[produtoId];
    
    
    document.getElementById('item-title').innerText = produto.titulo;
    document.getElementById('item-description').innerText = produto.descricao;
    document.getElementById('item-price').innerText = produto.preco;
    
    
    const imagemElement = document.getElementById('item-image');
    imagemElement.src = produto.imagem;
    imagemElement.alt = produto.titulo;
    
    
    const detalhesElement = document.getElementById('item-details');
    if (produto.detalhes) {
        detalhesElement.innerText = produto.detalhes;
    } else {
        detalhesElement.style.display = 'none'; 
    }
    
    
    document.title = `ItsVeganWebSite - ${produto.titulo}`;
    
} else {
    
    document.getElementById('item-title').innerText = 'Produto não encontrado.';
    document.getElementById('item-description').innerText = 'Por favor, volte para o menu e selecione um item válido.';
    document.getElementById('item-image').style.display = 'none'; 
    document.getElementById('item-details').style.display = 'none';
    document.getElementById('item-price').style.display = 'none';
}