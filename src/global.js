import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
 body {
  margin: 20px auto;

  color: ${(props) => (props.lightMode ? '#000' : '#eee')};
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
  --title-color:#eee;
  --toggle-yellow:${(props) => (props.lightMode ? '#000' : '#ffc130')};
--normal-text:${(props) => (props.lightMode ? '#000' : '#eee')};
--border-color:${(props) => (props.lightMode ? '#ffc130' : '#000')};
}
  `;
