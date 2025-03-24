document.addEventListener('DOMContentLoaded', () => {
    const displayAtual = document.getElementById('valor-atual');
    const displayOperacao = document.getElementById('valor-anterior');
    const botoes = document.querySelectorAll('button');
    
    let primeiroNumero = '';
    let segundoNumero = '';
    let operacaoSelecionada = '';
    let deveResetarDisplay = false;

    // Função para atualizar o display
    function atualizarDisplay() {
        displayAtual.textContent = segundoNumero || primeiroNumero || '0';
        
        if (operacaoSelecionada && primeiroNumero && !segundoNumero) {
            displayOperacao.textContent = `${primeiroNumero} ${operacaoSelecionada}`;
        } else if (operacaoSelecionada && primeiroNumero && segundoNumero) {
            displayOperacao.textContent = `${primeiroNumero} ${operacaoSelecionada} ${segundoNumero}`;
        } else {
            displayOperacao.textContent = '';
        }
    }

    // Função para resetar a calculadora
    function limparCalculadora() {
        primeiroNumero = '';
        segundoNumero = '';
        operacaoSelecionada = '';
        atualizarDisplay();
    }

    // Função para calcular o resultado
    function calcularResultado() {
        if (!operacaoSelecionada || !segundoNumero) return;
        
        const num1 = parseFloat(primeiroNumero);
        const num2 = parseFloat(segundoNumero);
        let resultado;
        
        switch (operacaoSelecionada) {
            case '+': resultado = num1 + num2; break;
            case '-': resultado = num1 - num2; break;
            case '*': resultado = num1 * num2; break;
            case '/': resultado = num1 / num2; break;
            default: return;
        }
        
        // Formata o resultado para evitar decimais desnecessários
        resultado = parseFloat(resultado.toFixed(10)).toString();
        
        primeiroNumero = resultado;
        segundoNumero = '';
        operacaoSelecionada = '';
        deveResetarDisplay = true;
        atualizarDisplay();
    }

    // Adiciona event listeners para todos os botões
    botoes.forEach(botao => {
        botao.addEventListener('click', () => {
            const valor = botao.getAttribute('data-value');

            // Limpar tudo
            if (valor === 'AC') {
                limparCalculadora();
                return;
            }

            // Porcentagem
            if (valor === '%') {
                if (segundoNumero) {
                    segundoNumero = (parseFloat(segundoNumero) / 100).toString();
                } else if (primeiroNumero) {
                    primeiroNumero = (parseFloat(primeiroNumero) / 100).toString();
                }
                atualizarDisplay();
                return;
            }

            // Igual - calcular resultado
            if (valor === '=') {
                calcularResultado();
                return;
            }

            // Operações matemáticas
            if (['+', '-', '*', '/'].includes(valor)) {
                if (primeiroNumero && segundoNumero && operacaoSelecionada) {
                    calcularResultado();
                }
                
                if (primeiroNumero) {
                    operacaoSelecionada = valor;
                    deveResetarDisplay = true;
                    atualizarDisplay();
                }
                return;
            }

            // Ponto decimal
            if (valor === '.') {
                const displayAtual = segundoNumero || primeiroNumero || '0';
                if (displayAtual.includes('.')) return;
                
                if (deveResetarDisplay || displayAtual === '0') {
                    if (operacaoSelecionada) {
                        segundoNumero = '0.';
                    } else {
                        primeiroNumero = '0.';
                    }
                    deveResetarDisplay = false;
                } else {
                    if (operacaoSelecionada) {
                        segundoNumero += '.';
                    } else {
                        primeiroNumero += '.';
                    }
                }
                atualizarDisplay();
                return;
            }

            // Números
            if (deveResetarDisplay) {
                if (operacaoSelecionada) {
                    segundoNumero = valor;
                } else {
                    primeiroNumero = valor;
                }
                deveResetarDisplay = false;
            } else {
                if (operacaoSelecionada) {
                    segundoNumero = segundoNumero === '0' ? valor : segundoNumero + valor;
                } else {
                    primeiroNumero = primeiroNumero === '0' ? valor : primeiroNumero + valor;
                }
            }
            
            atualizarDisplay();
        });
    });
});