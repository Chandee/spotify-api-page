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

export const TextoSpan = styled.span`
  @media screen and (max-width: 767px) {
    display: inline-block;
    white-space: nowrap;

    max-width: 400px;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  @media screen and (max-width: 600px) {
    max-width: 300px;
  }

  @media screen and (max-width: 500px) {
    max-width: 200px;
  }
`;
