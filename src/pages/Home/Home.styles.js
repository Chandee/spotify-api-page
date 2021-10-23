import styled from 'styled-components';

export const Paragrafo = styled.p`
  font-size: ${props => props.theme.tamanho.gigante};
  color: ${props => props.theme.cor.primaria};
`;

export const Container = styled.section`
  margin: 0 80px;
`;
