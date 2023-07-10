import React from 'react';
import Menu from "../../components/Menu/Menu";
import { Card, CardContainer, Container, Item, Title } from "./Usuarios.styled";

type dataTypes = {
  name: string,
  id: string,
}

const Usuario: React.FC = () => {
  const [users, setUsers] = React.useState<dataTypes[]>([]);

  React.useEffect(() => {
    const loadData = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users/');
      const data = await res.json();
      setUsers(data);
    }
    loadData();
  }, []);

  return (
    <div>
      <Container>
        <Menu/>
        <CardContainer>
        <Title>
          Usuários({users.length})
        </Title>
        <Card>
          {users.map((user) => (
            <Item key={user.id}>
              <p>{user.name}</p>
            </Item>
          ))}
        </Card>
        </CardContainer>
      </Container>
    </div>
  );
}

export default Usuario;
