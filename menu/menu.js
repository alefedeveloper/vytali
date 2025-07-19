document.addEventListener('DOMContentLoaded', () => {
    const botao = document.querySelector('.botao-menu');
    const menuLateral = document.querySelector('.menu-principal');
    const conteudo = document.querySelector('.conteudo');
    const background = document.querySelector('.background');

    if (!botao || !menuLateral || !conteudo || !background) {
        console.error('Um ou mais elementos não foram encontrados no DOM');
        console.log({
            botao: !!botao,
            menuLateral: !!menuLateral,
            conteudo: !!conteudo,
            background: !!background
        });
        return;
    }

    botao.addEventListener('click', () => {
        const isAtivo = menuLateral.classList.contains('ativo');
        console.log('Botão clicado. Estado ativo:', isAtivo);

        menuLateral.classList.toggle('ativo');
        conteudo.classList.toggle('ativo');
        background.classList.toggle('ativo');
        botao.classList.toggle('ativo'); // Toggle da classe ativo no botão para rotação e posição

        document.body.style.backgroundColor = isAtivo ? 'var(--background-light) !important' : 'var(--text-dark) !important';
        console.log('Classes após toggle:', {
            menuLateral: menuLateral.classList,
            conteudo: conteudo.classList,
            background: background.classList,
            botao: botao.classList
        });
    });

    background.addEventListener('click', () => {
        menuLateral.classList.remove('ativo');
        conteudo.classList.remove('ativo');
        background.classList.remove('ativo');
        botao.classList.remove('ativo'); // Remove a classe ativo do botão ao fechar
        document.body.style.backgroundColor = 'var(--background-light) !important';
        console.log('Background clicado. Classes removidas.');
    });
});