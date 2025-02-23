function verificarParImpar() {
    
    let numero = parseInt(prompt("Digite um número inteiro positivo:"));

    if (isNaN(numero) || numero < 0) {
        alert("Por favor, digite um número inteiro positivo válido.");
        return;
    }

    if (numero % 2 === 0) {
        alert("O número " + numero + " é par.");
    } else {
        alert("O número " + numero + " é ímpar.");
    }
}

function verificarPrimo() {
    let numero = parseInt(prompt("Digite um número inteiro positivo:"));

    if (isNaN(numero) || numero <= 0) {
        alert("Por favor, digite um número inteiro positivo válido.");
        return;
    }

    function isPrimo(num) {
        if (num <= 1) return false;
        if (num === 2) return true;
        if (num % 2 === 0) return false;
        for (let i = 3; i <= Math.sqrt(num); i += 2) {
            if (num % i === 0) return false;
        }
        return true;
    }

    if (isPrimo(numero)) {
        alert("O número " + numero + " é primo.");
    } else {
        alert("O número " + numero + " não é primo.");
    }
}

function calcularFatorial() {
    let numero = parseInt(prompt("Digite um número inteiro positivo:"));
  
    if (isNaN(numero) || numero < 0) {
      alert("Por favor, digite um número inteiro positivo válido.");
      return;
    }
  
    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
      fatorial *= i;
    }
  
    alert("O fatorial de " + numero + " é: " + fatorial);
  }

  function verificarTipoDado() {
    let dado = prompt("Digite qualquer valor:");

    if (dado === null) {
        document.body.textContent = "Nenhum valor foi inserido.";
        return;
    }

    let confirmar = confirm("Deseja verificar o tipo do dado?");

    if (confirmar) {
        let tipo;
        
        if (!isNaN(dado) && dado.trim() !== "") {
            dado = Number(dado);
            tipo = typeof dado;
        } else if (dado.toLowerCase() === "true" || dado.toLowerCase() === "false") {
            tipo = "boolean";
        } else if (dado === "") {
            tipo = "string";
        } else {
            tipo = typeof dado;
        }
        document.body.textContent = "O tipo do dado é: " + tipo;
    } else {
        document.body.textContent = "Obrigado por visitar esta página.";
    }
}