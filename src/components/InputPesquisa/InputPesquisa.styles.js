import styled from 'styled-components';
import { theme } from '../../utils/Theme';

export const Input = styled.input`
  font-size: ${props => props.theme.tamanho.gigante};
  background: none;
  border: none;
  border-bottom: 1px solid ${props => props.theme.cor.secundaria};
  color: ${props => props.theme.cor.primaria};
  margin: 0 16px;
  width: 100%;

  :placeholder {
    color: ${props => props.theme.cor.secundaria};
  }

  :focus {
    outline: none;
  }

  @media screen and (max-width: 767px) {
    font-size: ${props => props.theme.tamanho.medio};
    width: 90%;
  }
`;

export const Container = styled.div`
  max-width: 1440px;
  margin-bottom: 64px;
`;

export const Label = styled.label`
  margin: 0 16px;
  color: ${props => props.theme.cor.primaria};
  font-size: ${props => props.theme.tamanho.pequeno};
`;
