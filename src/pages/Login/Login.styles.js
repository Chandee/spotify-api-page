import styled from 'styled-components';

export const Botao = styled.a`
  padding: 16px;
  background: #1db954;
  color: ${props => props.theme.cor.primaria};
  border-radius: 15px;
  max-width: 330px;
  display: block;
  text-decoration: none;
  font-size: ${props => props.theme.tamanho.grande};
  text-align: center;
  margin: 0 auto;
`;

export const Titulo = styled.h1`
  font-size: ${props => props.theme.tamanho.gigante};
  color: ${props => props.theme.cor.primaria};
  text-align: center;
  margin-bottom: 16px;
`;
