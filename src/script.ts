type User = {
    nome: string,
    idade: number
};

function resumo(usuario: User) {
    return `Olá ${usuario.nome}, você tem ${usuario.idade} anos`;
}

resumo({
    nome: 'Bonieky',
    idade: 30
});