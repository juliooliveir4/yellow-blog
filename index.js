const conteudo = document.querySelectorAll('.conteudo');

conteudo.forEach(content => {
    content.classList.add('ativo');
});

function selecaoContent(content) {
    content.classList.toggle('selecionado');
}

conteudo.forEach((content, index) => {
    content.addEventListener('click', () => {
        selecaoContent(content);
    });
});