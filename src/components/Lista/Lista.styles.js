import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  max-width: 1440px;
  flex-flow: wrap;
  justify-content: space-between;

  @media screen and (max-width: 767px) {
    justify-content: center;
  }
`;

export const Titulo = styled.h2`
  color: ${props => props.theme.cor.primaria};
  font-size: ${props => props.theme.tamanho.medio};
  font-weight: normal;
  flex-basis: 100%;
  margin: 0 16px 16px;
`;
