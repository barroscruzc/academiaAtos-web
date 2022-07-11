function setLogin() {
    var nome = document.getElementById('nome').value.replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, '')
    var sobrenome = document.getElementById('sobrenome').value.replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, '')
    document.getElementById('login').value = nome + '.' + sobrenome
}
document.getElementById('nome').addEventListener('change', setLogin)
document.getElementById('sobrenome').addEventListener('change', setLogin)

function enviar() {

    var nome = document.getElementById('nome')
    document.getElementById('nomeOk').value = nome.value;

    var sobrenome = document.getElementById('sobrenome')
    document.getElementById('sobrenomeOk').value = sobrenome.value;

    var email = document.getElementById('email')
    var emailOk = document.getElementById('emailOk')
    emailOk.value = email.value;

    var login = document.getElementById('login')
    var loginOk = document.getElementById('loginOk')
    loginOk.value = login.value;

    var senha = document.getElementById('senha')
    var senhaOk = document.getElementById('senhaOk')
    senhaOk.value = senha.value;

    var cep = document.getElementById('cep')
    var cepOk = document.getElementById('cepOk')
    cepOk.value = cep.value;

    var endereco = document.getElementById('endereco')
    var enderecoOk = document.getElementById('enderecoOk')
    enderecoOk.value = endereco.value;

    var complemento = document.getElementById('complemento')
    var complementoOk = document.getElementById('complementoOk')
    complementoOk.value = complemento.value;

    var bairro = document.getElementById('bairro')
    var bairroOk = document.getElementById('bairroOk')
    bairroOk.value = bairro.value;

    var cidade = document.getElementById('cidade')
    var cidadeOk = document.getElementById('cidadeOk')
    cidadeOk.value = cidade.value;

    var estado = document.getElementById('estado')
    var estadoOk = document.getElementById('estadoOk')
    estadoOk.value = estado.value;

    var github = document.getElementById('github')
    var githubOk = document.getElementById('githubOk')
    githubOk.value = github.value;

    var academia = document.getElementById('academia')
    var academiaOk = document.getElementById('academiaOk')
    academiaOk.value = academia.value;

    var professor = document.getElementById('professor')
    var professorOk = document.getElementById('professorOk')
    professorOk.value = professor.value;

    var termos = document.getElementById('termos')
    var termosOk = document.getElementById('termosOk')
    termosOk.value = termos.value;

    var informativo = document.getElementById('informativo')
    var informativoOk = document.getElementById('informativoOk')
    informativoOk.value = informativo.value;

    alert('Formulário enviado!')
}

