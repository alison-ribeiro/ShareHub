import { createGlobalStyle } from 'styled-components';
import theme from './assets/theme';

export const GlobalStyle = createGlobalStyle`
  /* Reset de estilos */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    font-size: ${theme.fontSize.regular};
    transition: all .3s ease ;
  }

  /* Fonte padrão */
  html,body  {
    background-color: ${theme.background.default};
  }

  /* Preenchimento e margem padrão */
  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
  }
  input{
    all: initial;
  }
  /* Tamanho padrão do link não sublinhado */
  a {
    text-decoration: none;
  }

  /* Listas não estilizadas */
  ul, ol {
    list-style: none;
  }
`;
