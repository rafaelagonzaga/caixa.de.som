//declaração/criando função TocaSomPom
function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play()
}
//chamando/invocando a função tocaSomPom pelo clique do botão
document.querySelector('.tecla_pom').onclick =tocaSom;

//referência constante listaDeTeclas, buscando todos o botões 
const listaDeTeclas = document.querySelectorAll('.tecla');

//chamando a função tocaSom pelo item "0" da listaDeTecla
listaDeTeclas[0].onclick = tocaSom

    let contador = 0
    while(contador < listaDeTeclas.length){
        const efeito = listaDeTeclas[contador].classList[1];
        const idAudio = "#som_"+ efeito;
     listaDeTeclas[contador].onclick = function(){
       tocaSom(Audio)
     };
     contador = contador + 1;
     console.log(contador);
}
