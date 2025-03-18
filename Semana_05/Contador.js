// Variáveis para armazenar os valores
let homens = 0;
let mulheres = 0;

// Função para atualizar o total
function atualizarTotal() {
    const total = homens + mulheres;
    document.getElementById('total').textContent = total;
}

// Função para atualizar o valor de homens
function atualizarHomens(novoValor) {
    homens = Math.max(0, novoValor); // Garante que o valor não seja negativo
    document.getElementById('homens').textContent = homens;
    atualizarTotal();
}

// Função para atualizar o valor de mulheres
function atualizarMulheres(novoValor) {
    mulheres = Math.max(0, novoValor); // Garante que o valor não seja negativo
    document.getElementById('mulheres').textContent = mulheres;
    atualizarTotal();
}

// Função para zerar todos os valores
function zerarContador() {
    atualizarHomens(0);
    atualizarMulheres(0);
}

// Função para criar o layout da página
function criarLayout() {
    const root = document.getElementById('root');

    // Container principal
    const container = document.createElement('div');
    container.classList.add('contador-container');

    // Título
    const titulo = document.createElement('h1');
    titulo.textContent = 'Contador';
    container.appendChild(titulo);

    // Contador de homens e mulheres
    const contador = document.createElement('div');
    contador.classList.add('contador');

    // Contador de homens
    const homemDiv = document.createElement('div');
    homemDiv.classList.add('pessoa');

    const homemImg = document.createElement('img');
    homemImg.src = '../img/garoto.png'; // Caminho corrigido
    homemImg.alt = 'Homem';
    homemImg.classList.add('imagem');

    const homemTexto = document.createElement('h2');
    homemTexto.innerHTML = 'Homens: <span id="homens">0</span>';

    const homemBtnMais = document.createElement('button');
    homemBtnMais.textContent = '+';
    homemBtnMais.onclick = () => atualizarHomens(homens + 1); // Atualiza o valor

    const homemBtnMenos = document.createElement('button');
    homemBtnMenos.textContent = '-';
    homemBtnMenos.onclick = () => atualizarHomens(homens - 1); // Atualiza o valor

    homemDiv.appendChild(homemImg);
    homemDiv.appendChild(homemTexto);
    homemDiv.appendChild(homemBtnMais);
    homemDiv.appendChild(homemBtnMenos);

    // Contador de mulheres
    const mulherDiv = document.createElement('div');
    mulherDiv.classList.add('pessoa');

    const mulherImg = document.createElement('img');
    mulherImg.src = '../img/menina.png'; // Caminho corrigido
    mulherImg.alt = 'Mulher';
    mulherImg.classList.add('imagem');

    const mulherTexto = document.createElement('h2');
    mulherTexto.innerHTML = 'Mulheres: <span id="mulheres">0</span>';

    const mulherBtnMais = document.createElement('button');
    mulherBtnMais.textContent = '+';
    mulherBtnMais.onclick = () => atualizarMulheres(mulheres + 1); // Atualiza o valor

    const mulherBtnMenos = document.createElement('button');
    mulherBtnMenos.textContent = '-';
    mulherBtnMenos.onclick = () => atualizarMulheres(mulheres - 1); // Atualiza o valor

    mulherDiv.appendChild(mulherImg);
    mulherDiv.appendChild(mulherTexto);
    mulherDiv.appendChild(mulherBtnMais);
    mulherDiv.appendChild(mulherBtnMenos);

    // Adiciona os contadores ao layout
    contador.appendChild(homemDiv);
    contador.appendChild(mulherDiv);
    container.appendChild(contador);

    // Total
    const totalTexto = document.createElement('h2');
    totalTexto.innerHTML = 'Total: <span id="total">0</span>';
    container.appendChild(totalTexto);

    // Botão "Zerar"
    const btnZerar = document.createElement('button');
    btnZerar.textContent = 'Zerar';
    btnZerar.classList.add('btn-zerar');
    btnZerar.onclick = zerarContador;

    // Botão "Voltar"
    const btnVoltar = document.createElement('button');
    btnVoltar.textContent = 'Voltar';
    btnVoltar.classList.add('btn-voltar');
    btnVoltar.onclick = () => {
        window.location.href = '../index.html'; // Redireciona para a página inicial
    };

    // Container para os botões
    const botoesContainer = document.createElement('div');
    botoesContainer.classList.add('botoes-container');
    botoesContainer.appendChild(btnZerar);
    botoesContainer.appendChild(btnVoltar);

    // Adiciona os botões ao layout
    container.appendChild(botoesContainer);

    // Adiciona o container ao root
    root.appendChild(container);
}

// Executa a função para criar o layout quando a página carregar
window.onload = criarLayout;