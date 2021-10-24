const clicouEmTrocar= (evento) =>{
    evento.preventDefault();

    let imagem2= document.getElementById('foto-feliz');
    imagem2.src= 'É-pessimo-ser-triste-o-tempo-todo-840x720.png';
};

const iniciar = ()=> {
    document.getElementById('troca').addEventListener('click', clicouEmTrocar);
};

document.addEventListener('DOMContentLoaded', iniciar);