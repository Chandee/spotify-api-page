import styled from 'styled-components';

export const Footer = styled.footer`
  display: flex;
  place-content: center;
  padding: 16px;
  background: #262626;
  color: ${props => props.theme.cor.primaria};
`;

export const Icon = styled.img`
  width: 32px;
  height: 32px;
`;

export const Botao = styled.button`
  background: none;
  border: none;
`;

export const ContainerMusicaBarra = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

export const ContainerBarra = styled.div`
  display: flex;
`;

export const Input = styled.input`
  margin: 0 6px;
`;

export const TextoAnimado = styled.p`
  
    margin: 0 auto;
    white-space: nowrap;
    overflow: hidden;
    max-width: 300px;
    align-self: center;
    position: absolute;
    left: 16px;
  span {
    display: inline-block;
    padding-left: 50%;
    animation: marquee 25s linear infinite;
  

  @keyframes marquee {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(-100%, 0);
    }
  }
`;
