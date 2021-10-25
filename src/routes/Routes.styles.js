import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 32px;
  background: #1a1a1a;
  flex: 1;
  overflow: auto;
  @media screen and (max-width: 767px) {
    padding: 8px;
  }
`;

export const Header = styled.header`
  text-align: left;

  img {
    width: 64px;
    height: 64px;
  }
`;
