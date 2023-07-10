import ButtonLink from "../ButtonLink/ButtonLink";
import HomePageLink from "../HomePageLink/HomePageLink";
import { MenuContainer } from "./Menu.styled";



const Menu: React.FC = () => (
  
    
    <MenuContainer>  
      <HomePageLink title={"Desafio Viamaker"} url={"/"}/>
      <ButtonLink title={"Post"} url={"/posts"}/>
      <ButtonLink title={"Usuários"} url={"/users"} />
    </MenuContainer>
 
)


export default Menu;