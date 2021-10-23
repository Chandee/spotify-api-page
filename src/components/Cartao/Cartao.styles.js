import styled from 'styled-components';

export const Imagem = styled.img`
  height: 200px;
  width: 200px;
  margin-bottom: 8px;
`;

export const EstiloAlbum = styled.p`
  color: ${props => props.theme.cor.primaria};
  font-size: ${props => props.theme.tamanho.minusculo};
  margin-bottom: 4px;
`;

export const EstiloArtista = styled.p`
  color: ${props => props.theme.cor.secundaria};
  font-size: ${props => props.theme.tamanho.minusculo};
`;

export const Container = styled.div`
  width: 200px;
  padding: 16px;
  text-align: center;

  :hover {
    background: #ffffff;
    p {
      color: #000000;
    }

    p:last-child {
      opacity: 50%;
    }
  }
`;
