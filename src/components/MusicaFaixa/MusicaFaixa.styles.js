import styled from 'styled-components';

export const Span = styled.span`
  float: right;
  color: ${props => props.theme.cor.secundaria};
`;

export const Li = styled.li`
  color: ${props => props.theme.cor.primaria};
  padding-left: 16px;
  margin-bottom: 12px;
  ::marker {
    color: ${props => props.theme.cor.secundaria};
  }
`;
