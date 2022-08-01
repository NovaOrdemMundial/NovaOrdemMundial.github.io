function bossMessages(){
  //Criação dos Elementos
  const tituloText        = document.createElement('H1');
  const subTituloText     = document.createElement('H2');
  const descricaoText     = document.createElement('H3');
  const subDescricaoText  = document.createElement('H4');
  const rodapeText        = document.createElement('H5');
  const subRodapeText     = document.createElement('H6');
  const imageHighlight    = document.createElement('IMG');
  const videoHighlight    = document.createElement('VIDEO');
  
  tituloText      .innerHTML = highlight1.titulo;
  subTituloText   .innerHTML = highlight1.subtitulo;
  descricaoText   .innerHTML = highlight1.descrição;
  subDescricaoText.innerHTML = highlight1.subdescrição;
  rodapeText      .innerHTML = highlight1.rodape;
  subRodapeText   .innerHTML = highlight1.subrodape;
  imageHighlight  .src = highlight1.imagem;
  videoHighlight  .src = highlight1.video;
  
  slidePanel.append(tituloText, subTituloText, descricaoText, subDescricaoText, rodapeText, subRodapeText, imageHighlight, videoHighlight)
}
