document.getElementById('exercicio1').addEventListener('click', () => {
    document.getElementById('exercicio1Container').style.display = 'block';
    document.getElementById('exercicio2Container').style.display = 'none';
    document.querySelector('.button-container').classList.add('hidden'); // Esconde os botões
});

document.getElementById('exercicio2').addEventListener('click', () => {
    document.getElementById('exercicio1Container').style.display = 'none';
    document.getElementById('exercicio2Container').style.display = 'block';
    document.querySelector('.button-container').classList.add('hidden'); // Esconde os botões
});

// Função para exibir os botões novamente ao voltar
const voltarLinks = document.querySelectorAll('.btn');
voltarLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.button-container').classList.remove('hidden'); // Exibe os botões novamente
        document.getElementById('exercicio1Container').style.display = 'none';
        document.getElementById('exercicio2Container').style.display = 'none';
    });
});

// Exercício 1: Array Dinâmico
const valores = [];
document.getElementById('formulario').addEventListener('submit', (e) => {
    e.preventDefault();
    const valor = document.getElementById('valor').value.trim();
    if (valor) {
        valores.push(valor);
        valores.sort();
        atualizarLista();
        document.getElementById('valor').value = '';
    }
});

function atualizarLista() {
    const listaOrdenada = document.getElementById('listaOrdenada');
    listaOrdenada.innerHTML = '';
    valores.forEach((valor) => {
        const li = document.createElement('li');
        li.textContent = valor;
        listaOrdenada.appendChild(li);
    });
}

// Calculo FIPE
class Carro {
    constructor(marca, modelo, ano, cor, kilometragem, valorFipe) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
        this.kilometragem = kilometragem;
        this.valorFipe = valorFipe;
    }

    anosUtilizacao() {
        const anoAtual = new Date().getFullYear();
        return anoAtual - this.ano;
    }

    valorMercado() {
        const anosDeUso = this.anosUtilizacao();
        const kmPorAno = this.kilometragem / anosDeUso;
        
        if (kmPorAno <= 30000) {
            return this.valorFipe * 1.10; // 110% do valor FIPE
        } else if (kmPorAno <= 50000) {
            return this.valorFipe; // 100% do valor FIPE
        } else {
            return this.valorFipe * 0.90; // 90% do valor FIPE
        }
    }
}

document.getElementById('formularioCarro').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const marca = document.getElementById('marca').value.trim();
    const modelo = document.getElementById('modelo').value.trim();
    const ano = parseInt(document.getElementById('ano').value.trim());
    const cor = document.getElementById('cor').value.trim();
    const kilometragem = parseInt(document.getElementById('kilometragem').value.trim());
    const valorFipe = parseFloat(document.getElementById('valorFipe').value.trim());

    // Verifica se os campos são válidos
    if (marca && modelo && ano && cor && kilometragem && valorFipe) {
        const carro = new Carro(marca, modelo, ano, cor, kilometragem, valorFipe);
        
        // Exibe o resultado com os métodos anosUtilizacao e valorMercado
        document.getElementById('resultadoCarro').textContent = `O carro tem ${carro.anosUtilizacao()} anos de uso e seu valor de mercado é R$ ${carro.valorMercado().toFixed(2)}.`;
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});



