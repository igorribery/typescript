// tsc --init  para gerar o arquivo tsconfig.json

const botao = document.querySelector('button') as HTMLButtonElement;
botao.addEventListener('click', () => {
    console.log('clicou!');
});