function resumo(usuario) {
    return `Olá ${usuario.nome}, tudo bem? você tem ${usuario.idade} anos`;
}

let u = {
    nome: 'igor', 
    idade: 20

};

resumo(u);