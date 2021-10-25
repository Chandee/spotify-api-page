import styled from 'styled-components';

export const ContainerDivisao = styled.div`
  display: flex;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const ContainerPlaylist = styled.div`
  padding: 16px;
  flex: 1;

  @media screen and (max-width: 767px) {
    padding: 16px 0;
  }
`;

export const Container = styled.section`
  margin: 0 60px;
  @media screen and (max-width: 767px) {
    margin: 0 12px;
  }
`;

export const ImagemContainer = styled.div`
  @media screen and (max-width: 767px) {
    margin: auto;
  }
`;

export const BotaoVoltar = styled.button`
  background: none;
  border: none;
  display: flex;
  width: 32px;
  height: 32px;

  color: ${props => props.theme.cor.primaria};

  span,
  img {
    align-self: center;
  }

  span {
    font-size: ${props => props.theme.tamanho.medio};
  }
`;
