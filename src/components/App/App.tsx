import { GlobalStyle } from "../../GlobalStyle";
import MyRoutes from "../../utils/Route";
import Sidebar from "../Sidebar";
import {Container, ContainerMainContent } from "./styles";

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Sidebar />   
      <ContainerMainContent>
        <MyRoutes />
      </ContainerMainContent>
      
    </Container>
  );
}

export default App;
