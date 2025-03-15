// Classe Pessoa
function Pessoa(nome, email, dataNascimento, telefoneFixo, telefoneCelular) {
    this.nome = nome;
    this.email = email;
    this.dataNascimento = dataNascimento;
    this.telefoneFixo = telefoneFixo;
    this.telefoneCelular = telefoneCelular;
}

// Classe Aluno herda de Pessoa
function Aluno(nome, email, dataNascimento, telefoneFixo, telefoneCelular, curso, matricula) {
    Pessoa.call(this, nome, email, dataNascimento, telefoneFixo, telefoneCelular);
    this.curso = curso;
    this.matricula = matricula;
}

// Classe Professor herda de Pessoa
function Professor(nome, email, dataNascimento, telefoneFixo, telefoneCelular, area, matricula) {
    Pessoa.call(this, nome, email, dataNascimento, telefoneFixo, telefoneCelular);
    this.area = area;
    this.matricula = matricula;
}

// Validação de nome
function validarNome() {
    const nome = document.getElementById("nome").value.trim();
    const erroNome = document.getElementById("nome-erro");
    const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?: [A-Za-zÀ-ÖØ-öø-ÿ]+)+$/;
    erroNome.style.display = nome === "" || !regex.test(nome) ? "block" : "none";
    erroNome.textContent = nome === "" ? "O campo nome não pode estar vazio." : "Nome inválido! Insira nome e sobrenome.";
}

// Validação de email
function validarEmail() {
    const email = document.getElementById("email").value.trim();
    const erroEmail = document.getElementById("email-erro");
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    erroEmail.style.display = email === "" || !regex.test(email) ? "block" : "none";
    erroEmail.textContent = email === "" ? "O campo e-mail não pode estar vazio." : "E-mail inválido!";
}

function validarData() {
    const dataNascimento = document.getElementById("dataNascimento").value;
    const erroData = document.getElementById("erroData");
    const dataAtual = new Date();
    const dataSelecionada = new Date(dataNascimento);

    if (dataSelecionada > dataAtual) {
        erroData.textContent = "Data de nascimento inválida!";
        erroData.style.display = "block";
    } else {
        erroData.style.display = "none";
    }
}

function validarTelefoneFixo() {
    const telefoneFixo = document.getElementById("telefone-fixo").value;
    const regex = /^\(\d{2}\)\d{4}-\d{4}$/;
    const erroTelefoneFixo = document.getElementById("telefone-fixo-erro");
    erroTelefoneFixo.style.display = regex.test(telefoneFixo) ? "none" : "block";
}

function validarTelefoneCelular() {
    const telefoneCelular = document.getElementById("telefone-celular").value;
    const regex = /^\(\d{2}\)\d{5}-\d{4}$/;
    const erroTelefoneCelular = document.getElementById("telefone-celular-erro");
    erroTelefoneCelular.style.display = regex.test(telefoneCelular) ? "none" : "block";
}


function validarMatricula() {
    const matricula = document.getElementById("matricula").value.trim(); // Remove espaços extras
    const tipo = document.querySelector('input[name="tipo"]:checked').value;
    
    // Permitir somente números
    if (!/^\d+$/.test(matricula)) {
        document.getElementById("matricula-erro").textContent = "A matrícula deve conter apenas números.";
        document.getElementById("matricula-erro").style.display = "block";
        return;
    }

    // Definir tamanho da matrícula
    const tamanhoCorreto = tipo === "Aluno" ? 10 : 5;
    
    if (matricula.length !== tamanhoCorreto) {
        document.getElementById("matricula-erro").textContent = `A matrícula deve ter exatamente ${tamanhoCorreto} dígitos.`;
        document.getElementById("matricula-erro").style.display = "block";
    } else {
        document.getElementById("matricula-erro").style.display = "none";
    }
}



// Alterna campos entre Professor e Aluno
function alternarCampos() {
    const tipo = document.querySelector('input[name="tipo"]:checked').value;
    const areaOuCurso = document.getElementById("curso-ou-area");
    const lattesContainer = document.getElementById("lattes-container");
    const areaInput = document.getElementById("area");

    if (tipo === "Aluno") {
        areaOuCurso.querySelector("label").innerText = "Curso:";
        areaInput.placeholder = "Digite seu curso";
        lattesContainer.style.visibility = "hidden";
        lattesContainer.style.height = "0";
    } else {
        areaOuCurso.querySelector("label").innerText = "Área:";
        areaInput.placeholder = "Digite sua área";
        lattesContainer.style.visibility = "visible";
        lattesContainer.style.height = "auto";
    }
}

function validarFormulario(event) {
    event.preventDefault();

    validarNome();
    validarEmail();
    validarData();
    validarTelefoneFixo();
    validarTelefoneCelular();
    validarMatricula();

    // Verifica se há erros visíveis
    const erros = document.querySelectorAll(".error");
    let temErro = false;

    erros.forEach(erro => {
        if (erro.style.display === "block") {
            temErro = true;
        }
    });

    if (!temErro) {
        const tipo = document.querySelector('input[name="tipo"]:checked').value;
        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const dataNascimento = document.getElementById("dataNascimento").value;
        const telefoneFixo = document.getElementById("telefone-fixo").value;
        const telefoneCelular = document.getElementById("telefone-celular").value;
        const matricula = document.getElementById("matricula").value;
        const cursoOuArea = document.getElementById("area").value;

        let pessoa;

        if (tipo === "Aluno") {
            pessoa = new Aluno(nome, email, dataNascimento, telefoneFixo, telefoneCelular, cursoOuArea, matricula);
        } else {
            pessoa = new Professor(nome, email, dataNascimento, telefoneFixo, telefoneCelular, cursoOuArea, matricula);
        }

        console.log(pessoa); // Exibe no console
        alert("Dados enviados com sucesso!");

        // Limpa as mensagens de erro
        erros.forEach(erro => {
            erro.style.display = "none";
        });

        // Limpa o formulário
        document.getElementById("form-cadastro").reset();
    } else {
        alert("Preencha corretamente todos os campos.");
    }
}


// Adiciona o evento de envio ao formulário
document.getElementById("form-cadastro").addEventListener("submit", validarFormulario);

