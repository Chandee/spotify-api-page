const retornaArtista = vetorArtistas => {
  return vetorArtistas.map(va => va.name);
};

export const retornoAlbuns = resposta => {
  const { albums } = resposta;

  return albums.items.map(alb => {
    return {
      nomeAlbum: alb.name,
      artistas: retornaArtista(alb.artists),
      id: alb.id,
      imagem: alb.images[1],
    };
  });
};

export const listaArtistas = todosArtistas => {
  return todosArtistas.reduce((acumulador, atual, index) => {
    if (index === 0) {
      return (acumulador = acumulador + atual);
    } else {
      return (acumulador = acumulador + ', ' + atual);
    }
  }, '');
};

export const transformaMilisegundoEmMinuto = milisegundo => {
  var minuto = Math.floor(milisegundo / 60000);
  var segundo = ((milisegundo % 60000) / 1000).toFixed(0);
  return minuto + ':' + (segundo < 10 ? '0' : '') + segundo;
};

export const retornoMusicas = todasInfoMusica => {
  const { artists, name, tracks, images } = todasInfoMusica;
  const musicaFormatada = tracks.items.map(t => {
    return {
      id: t.id,
      nomeMusica: t.name,
      duracao: transformaMilisegundoEmMinuto(t.duration_ms),
      preview: t.preview_url,
    };
  });
  const novoObjFormatado = {
    nomeAlbum: name,
    artistas: listaArtistas(retornaArtista(artists)),
    musicas: musicaFormatada,
    imagem: images[1],
  };
  return novoObjFormatado;
};
