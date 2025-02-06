let amigos = [];

function adicionarAmigo() {
    const nomeInput = document.getElementById('nomeAmigo');
    const nome = nomeInput.value.trim();

    if (nome === '') {
        alert('Por favor, insira um nome.');
        return;
    }

    amigos.push(nome);
    nomeInput.value = '';
    atualizarLista();
}

function atualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    amigos.forEach(amigo => {
        lista.innerHTML += `<li>${amigo}</li>`;
    });
}

function sortear() {
    if (amigos.length === 0) {
        alert('Adicione pelo menos um amigo antes de sortear.');
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceSorteado];
    document.getElementById('resultado').textContent = `Amigo secreto: ${amigoSecreto}`;
}//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
