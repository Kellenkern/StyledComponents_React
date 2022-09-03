import React from "react";
import styled from 'styled-components';
import bank_logo from "../../assets/images/bank_logo.svg";
import { corPrimaria } from "../UI/Variaveis";

const BtnCabecalho = styled.a`
  text-align: center;
  border-radius: 3px;
  padding: 3% 18%;
  margin: 0 20%;
  font-weight: 600;
  border: 2px solid white;

  color: white;
  background: transparent;

  background: ${(props) => (props.primary ? "white": corPrimaria)};
  color: ${(props)=> (props.primary ? corPrimaria : 'white')};
`

const StyledHeader = styled.nav`
  background-color: ${corPrimaria};
  display: flex;
  justify-content: space-between;
  padding: 0 20vw;
  height: 10vh;
  align-items: center;

  @media (max-width: 800px){
    justify-content: flex-start;
    padding: 0 15%;
  }
`;

const Logo = styled.img `
  height: 80%;
  width: 10%;

  @media (max-width: 800px){
    width: 20%;
  }
`


const Cabecalho = () => {
  return (
    <StyledHeader>
      <Logo src={bank_logo} alt="Logo Smart Bank" />
      <div>
        <BtnCabecalho primary href="https://google.com">Ajuda</BtnCabecalho>
        <BtnCabecalho href="https://google.com">Sair</BtnCabecalho>
      </div>
    </StyledHeader>
  );
};

export default Cabecalho;
