import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
header {
  margin-bottom: 90px;
}
.card-link svg, a svg{
  height: 16px;
}
.card-header {
  font-family: Montserrat, sans-serif;
}
footer {
    background-image: url("https://www.jbcnconf.com/2020/assets/img/homepage/footer-bg.jpg");
    background-color: black;
    color:ghostwhite;
}
`;

export default GlobalStyle;