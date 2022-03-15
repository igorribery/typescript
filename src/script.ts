interface opcoes {
    width: number;
    height: number;
}

function configurar(props: opcoes | 'auto') {

}


configurar({width: 100, height: 200});
configurar('auto');
configurar('automatico')  // erro