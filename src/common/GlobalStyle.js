import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
header {
  margin-bottom: 40px;
}
svg, a svg{
  height: 16px;
}
h1, h2, h3, h4, h5{
font-family: Monserrat, sans-serif;
}
footer > div.ui.segment{
    background-image: url("https://www.jbcnconf.com/2020/assets/img/homepage/footer-bg.jpg");
    background-color: black;
    color:ghostwhite;
}
`;

export default GlobalStyle;