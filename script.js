const cidades = [
    { nome: 'Anta Gorda', imagem: './assets/anta-gorda.jpg', urlMapa: 'https://maps.app.goo.gl/aLuxesibjeiqppgP8' },
    { nome: 'Hong Kong', imagem: './assets/hong-kong.jpg', urlMapa: 'https://maps.app.goo.gl/kovE9u8rfGXVuoWP8' },
    { nome: 'Paraibuna', imagem: './assets/paraibuna.jpg', urlMapa: 'https://maps.app.goo.gl/fG3wJ9QLrUKMKsFj8' },
    { nome: 'Sarajevo', imagem: './assets/sarajevo.jpg', urlMapa: 'https://maps.app.goo.gl/Pnw95ERg2zw82wFR7' },
];

let indiceCidadeAtual = 0;

function carregarDadosCardAtual() {
    const imgCard = document.getElementById('imgCard');
    const tituloCard = document.getElementById('tituloCard');
    const urlMapa = document.getElementById('urlMapa');
    const cidadeAtual = cidades[indiceCidadeAtual];

    imgCard.src = cidadeAtual.imagem;
    imgCard.alt = `Imagem de ${cidadeAtual.nome}`;
    tituloCard.textContent = cidadeAtual.nome;
    urlMapa.href = cidadeAtual.urlMapa || '#';
    urlMapa.classList.toggle('disabled', !cidadeAtual.urlMapa);
    urlMapa.setAttribute('aria-disabled', String(!cidadeAtual.urlMapa));
    urlMapa.tabIndex = cidadeAtual.urlMapa ? 0 : -1;
}

function selecionarCidadeAnterior() {
    indiceCidadeAtual = (indiceCidadeAtual - 1 + cidades.length) % cidades.length;
    carregarDadosCardAtual();
}

function selecionarProximaCidade() {
    indiceCidadeAtual = (indiceCidadeAtual + 1) % cidades.length;
    carregarDadosCardAtual();
}

function main() {
    document.getElementById('btnCidadeAnterior').addEventListener('click', selecionarCidadeAnterior);
    document.getElementById('btnProximaCidade').addEventListener('click', selecionarProximaCidade);
    carregarDadosCardAtual();
};

document.addEventListener('DOMContentLoaded', main);