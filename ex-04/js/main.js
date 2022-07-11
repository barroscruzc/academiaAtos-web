function setLogin() {
    var nome = document.getElementById('nome').value.replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, '')
    var sobrenome = document.getElementById('sobrenome').value.replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, '')
    document.getElementById('login').value = nome + '.' + sobrenome
}
document.getElementById('nome').addEventListener('change', setLogin)
document.getElementById('sobrenome').addEventListener('change', setLogin)

function alertar(){
    alert("Formulário enviado!")
}
function enviar() {

    alertar()

    var nome = document.querySelector('#nome')
    document.getElementById('nomeOk').value = nome.value;

    var sobrenome = document.querySelector('#sobrenome')
    document.getElementById('sobrenomeOk').value = sobrenome.value;

    var email = document.querySelector('#email')
    var emailOk = document.getElementById('emailOk')
    emailOk.value = email.value;

    var login = document.querySelector('#login')
    var loginOk = document.getElementById('loginOk')
    loginOk.value = login.value;

    var senha = document.querySelector('#senha')
    var senhaOk = document.getElementById('senhaOk')
    senhaOk.value = senha.value;

    var cep = document.querySelector('#cep')
    var cepOk = document.getElementById('cepOk')
    cepOk.value = cep.value;

    var rua = document.querySelector('#rua')
    var ruaOk = document.getElementById('ruaOk')
    ruaOk.value = rua.value;

    var complemento = document.querySelector('#complemento')
    var complementoOk = document.getElementById('complementoOk')
    complementoOk.value = complemento.value;

    var bairro = document.querySelector('#bairro')
    var bairroOk = document.getElementById('bairroOk')
    bairroOk.value = bairro.value;

    var cidade = document.querySelector('#cidade')
    var cidadeOk = document.getElementById('cidadeOk')
    cidadeOk.value = cidade.value;

    var estado = document.querySelector('#estado')
    var estadoOk = document.getElementById('estadoOk')
    estadoOk.value = estado.value;

    var github = document.querySelector('#github')
    var githubOk = document.getElementById('githubOk')
    githubOk.value = github.value;

    var academia = document.querySelector('#academia')
    var academiaOk = document.getElementById('academiaOk')
    academiaOk.value = academia.value;

    var professor = document.querySelector('#professor')
    var professorOk = document.getElementById('professorOk')
    professorOk.value = professor.value;

    var termos = document.querySelector('#termos')
    var termosOk = document.getElementById('termosOk')
    termosOk.value = termos.value;

    var informativo = document.querySelector('#informativo')
    var informativoOk = document.getElementById('informativoOk')
    informativoOk.value = informativo.value;
}

