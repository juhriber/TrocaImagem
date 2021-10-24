const clicouEmTrocar= (evento) =>{
    evento.preventDefault();

    let imagem2= document.getElementById('foto-feliz');
    imagem2.src= 'Triste.png';
};

const iniciar = ()=> {
    document.getElementById('troca').addEventListener('click', clicouEmTrocar);
};

document.addEventListener('DOMContentLoaded', iniciar);