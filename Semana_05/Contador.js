// Variáveis para armazenar os valores
let homens = 0;
let mulheres = 0;

// Função para atualizar o total
function atualizarTotal() {
    const total = homens + mulheres;
    document.getElementById('total').textContent = total;
}

// Função para incrementar homens
function incrementarHomens() {
    homens++;
    document.getElementById('homens').textContent = homens;
    atualizarTotal();
}

// Função para decrementar homens
function decrementarHomens() {
    if (homens > 0) {
        homens--;
        document.getElementById('homens').textContent = homens;
        atualizarTotal();
    }
}

// Função para incrementar mulheres
function incrementarMulheres() {
    mulheres++;
    document.getElementById('mulheres').textContent = mulheres;
    atualizarTotal();
}

// Função para decrementar mulheres
function decrementarMulheres() {
    if (mulheres > 0) {
        mulheres--;
        document.getElementById('mulheres').textContent = mulheres;
        atualizarTotal();
    }
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
    homemImg.src = '../img/garoto.png';
    homemImg.alt = 'Homem';
    homemImg.classList.add('imagem');

    const homemTexto = document.createElement('h2');
    homemTexto.innerHTML = 'Homens: <span id="homens">0</span>';

    const homemBtnMais = document.createElement('button');
    homemBtnMais.textContent = '+';
    homemBtnMais.onclick = incrementarHomens;

    const homemBtnMenos = document.createElement('button');
    homemBtnMenos.textContent = '-';
    homemBtnMenos.onclick = decrementarHomens;

    homemDiv.appendChild(homemImg);
    homemDiv.appendChild(homemTexto);
    homemDiv.appendChild(homemBtnMais);
    homemDiv.appendChild(homemBtnMenos);

    // Contador de mulheres
    const mulherDiv = document.createElement('div');
    mulherDiv.classList.add('pessoa');

    const mulherImg = document.createElement('img');
    mulherImg.src = '../img/menina.png';
    mulherImg.alt = 'Mulher';
    mulherImg.classList.add('imagem');

    const mulherTexto = document.createElement('h2');
    mulherTexto.innerHTML = 'Mulheres: <span id="mulheres">0</span>';

    const mulherBtnMais = document.createElement('button');
    mulherBtnMais.textContent = '+';
    mulherBtnMais.onclick = incrementarMulheres;

    const mulherBtnMenos = document.createElement('button');
    mulherBtnMenos.textContent = '-';
    mulherBtnMenos.onclick = decrementarMulheres;

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

    // Adiciona o container ao root
    root.appendChild(container);
}

// Executa a função para criar o layout quando a página carregar
window.onload = criarLayout;