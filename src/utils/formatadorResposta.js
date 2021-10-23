export const retornoAlbuns = resposta => {
  const { albums } = resposta;

  const retornaArtista = vetorArtistas => {
    return vetorArtistas.map(va => va.name);
  };

  return albums.items.map(alb => {
    return {
      nomeAlbum: alb.name,
      artistas: retornaArtista(alb.artists),
      id: alb.id,
      imagem: alb.images[1],
    };
  });
};
