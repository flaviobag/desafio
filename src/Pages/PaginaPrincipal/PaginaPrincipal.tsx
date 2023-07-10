import Menu from "../../components/Menu/Menu";
import { Container, Main, Title } from "./PaginaPrincipal.styled";


const PaginaPrincipal: React.FC = () => {
  
  return (
    <div>
      <Container>    
        <Menu/>
        <Main>
          <Title>
            Pagina Inicial
          </Title>     
          <video width="auto" height="auto"controls>
          <source src="video.mp4" type="video/mp4" /> 
          </video>
        </Main>
      </Container>
    </div>
  );
}

export default PaginaPrincipal;
