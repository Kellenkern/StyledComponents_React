import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle `
    * {
        box-sizing: border-box;
        font-family: "Montserrat", sans-serif;
        margin: 0;
        padding: 0;
        text-decoration: none;
    }
`

//Não podemos usar default em const

//Arquivo precisa ser importado no App e depois ser chamado como uma tag '<GlobalStyle />' dentro da função.
