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

    for(let contador = 0; contador < listaDeTeclas.length;contador++){
        const tecla = listaDeTeclas[contador]
        const efeito =  tecla.classList[1];
        const idAudio = `#som_${efeito}`;
      tecla.onclick = function(){
       tocaSom(idAudio);
     }
   

    }