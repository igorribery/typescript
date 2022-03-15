function resumo(usuario: {nome: string, idade?: number}) { // colocar um item opcional "?" logo apos da propriedade
    if(usuario.idade !== undefined) {
    return `Olá ${usuario.nome}, tudo bem? você tem ${usuario.idade} anos`;
    } else {
        return `Olá ${usuario.nome}, tudo bem?`;
    }
}

let u = {
    nome: 'igor', 
    idade: 20

};

resumo(u);