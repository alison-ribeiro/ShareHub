import { StyleSheetManager } from "styled-components";
import { GlobalStyle } from "../../GlobalStyle";
import MyRoutes from "../../utils/Route";
import Sidebar from "../Sidebar";
import {Container, ContainerMainContent } from "./styles";

function App() {
  const shouldForwardProp = (prop:string) => !['bool'].includes(prop);

  return (
    <StyleSheetManager shouldForwardProp={shouldForwardProp}>
      <Container>
        <GlobalStyle />
        <Sidebar />   
        <ContainerMainContent>
          <MyRoutes />
        </ContainerMainContent>
      </Container>
    </StyleSheetManager>
  );
}

export default App;
