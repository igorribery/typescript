/* type User = {
    nome: string,
    idade: number
}; */

// usando o type uma vez q tu o criou ele não é alterável não tem como adicionar propriedades novas e com interface sim

interface User {
    nome: string
}

// pode fazer isso e o type não
interface User {
    idade: number
}

function resumo(usuario: User) {
    return `Olá ${usuario.nome}, você tem ${usuario.idade} anos`;
}

resumo({
    nome: 'Bonieky',
    idade: 30
});