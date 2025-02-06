let amigos = [];

function adicionarAmigo() {
    const nomeInput = document.getElementById('amigo');
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
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Adicione pelo menos um amigo antes de sortear.');
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceSorteado];
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>Amigo secreto: ${amigoSecreto}</li>`;
}
