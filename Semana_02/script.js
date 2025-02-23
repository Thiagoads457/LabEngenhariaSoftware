function exibirDataAtual() {
    const data = new Date();

    const diasSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    const meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];

    const diaSemana = diasSemana[data.getDay()];
    const dia = data.getDate();
    const mes = meses[data.getMonth()];
    const ano = data.getFullYear();

    const dataFormatada = `${diaSemana}, ${dia} de ${mes} de ${ano}`;
    alert(dataFormatada);  
}

function iniciarRelogio() {
    const relogioElement = document.getElementById("relogio");

    function atualizarRelogio() {
        const data = new Date();
        const horas = String(data.getHours()).padStart(2, '0');
        const minutos = String(data.getMinutes()).padStart(2, '0');
        const segundos = String(data.getSeconds()).padStart(2, '0');

        const horarioAtual = `${horas}:${minutos}:${segundos}`;
        relogioElement.textContent = horarioAtual;
        
    }

    atualizarRelogio();  
    setInterval(atualizarRelogio, 1000);  
    
}


function verificarPalindromo() {
    const texto = prompt("Digite uma palavra ou frase para verificar se é um palíndromo:");

    if (texto) {
        // Remover espaços, acentos e transformar em minúsculas para uma comparação precisa
        const textoLimpo = texto.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]/g, '');

        // Verificar se o texto limpo é igual ao seu reverso
        const ehPalindromo = textoLimpo === textoLimpo.split('').reverse().join('');

        if (ehPalindromo) {
            alert("O texto digitado é um palíndromo!");
        } else {
            alert("O texto digitado não é um palíndromo.");
        }
    } else {
        alert("Você não digitou nenhum texto.");
    }
}