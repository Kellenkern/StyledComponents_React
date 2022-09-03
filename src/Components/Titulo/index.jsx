//import React from "react";
import styled from "styled-components"

const Titulo = styled.h1`
  color: ${ ({theme})=> theme.text};
  padding: 3% 0;
`
//Esse código de criação da tag título está subentendido pelo próprio estilo título, então não precisamos mais dele:
// const Titulo = ({ children }) => {
//   return <h1 className="titulo">{children}</h1>;
// };

export default Titulo;
