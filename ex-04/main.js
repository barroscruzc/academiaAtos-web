var formulario = document.getElementById("formulario")

function setLogin() {
    var nome = document.getElementById("nome").value
    var sobrenome = document.getElementById("sobrenome").value
    document.getElementById("login").value = nome + "." + sobrenome
}

document.getElementById("nome").addEventListener("change", setLogin)
document.getElementById("sobrenome").addEventListener("change", setLogin)

function enviar() {

    var nome = document.querySelector("#nome")
    var sobrenome = document.querySelector("#sobrenome")
    var email = document.querySelector("#email")
    var login = document.querySelector("#login")
    var senha = document.querySelector("#senha")
    var cep = document.querySelector("#cep")
    var endereco = document.querySelector("#endereco")
    var complemento = document.querySelector("#complemento")
    var bairro = document.querySelector("#bairro")
    var cidade = document.querySelector("#cidade")
    var estado = document.querySelector("#estado")
    var github = document.querySelector("#github")
    var academia = document.querySelector("#academia")
    var professor = document.querySelector("#professor")
    var termos = document.querySelector("#termos")
    var informativo = document.querySelector("#informativo")

    /*var nomeOk = document.getElementById("nomeOk")
    var sobrenomeOk = document.getElementById("sobrenomeOk")
    var emailOk = document.getElementById("emailOk")
    var loginOk = document.getElementById("loginOk")
    var senhaOk = document.getElementById("senhaOk")
    var cepOk = document.getElementById("cepOk")
    var enderecoOk = document.getElementById("enderecoOk")
    var complementoOk = document.getElementById("complementoOk")
    var bairroOk = document.getElementById("bairroOk")
    var cidadeOk = document.getElementById("cidadeOk")
    var estadoOk = document.getElementById("estadoOk")
    var githubOk = document.getElementById("githubOk")
    var academiaOk = document.getElementById("academiaOk")
    var professorOk = document.getElementById("professorOk")
    var termosOk = document.getElementById("termosOk")
    var informativoOk = document.getElementById("informativoOk")

    nomeOk.innerText = nome.value*/

    document.getElementById("nomeOk").innerText = nome.value;
    document.getElementById("sobrenomeOk").innerText = sobrenome.value;
    document.getElementById("emailOk").innerText = email.value;
    document.getElementById("loginOk").innerText = login;
    document.getElementById("senhaOk").innerText = senha;
    document.getElementById("cepOk").innerText = cep;
    document.getElementById("enderecoOk").innerText = endereco;
    document.getElementById("complementoOk").innerText = complemento;
    document.getElementById("bairroOk").innerText = bairro;
    document.getElementById("cidadeOk").innerText = cidade;
    document.getElementById("estadoOk").innerText = estado;
    document.getElementById("githubOk").innerText = github;
    document.getElementById("academiaOk").innerText = academia;
    document.getElementById("professorOk").innerText = professor;
    document.getElementById("termosOk").innerText = termos;
    document.getElementById("informativoOk").innerText = informativo;
    alert("Formulário enviado!")
}

document.getElementById("btn_enviar").addEventListener("click", enviar())