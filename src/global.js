import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
 body {
  margin: 20px auto;
  max-width: 1350px;
  color: #fff;
  background: ${(props) => (props.lightMode ? '#eee' : '#000')};
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  
  
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

:root {
  --primary-color: #ffc130;
}
  `;
