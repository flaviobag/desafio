import React, { useEffect, useState } from "react";
import Menu from "../../components/Menu/Menu";
import { CardContainer, Card, CardTitle, CardBody, Container, Title } from "./Postagem.styled";

type dataTypes = {
  title: string,
  body: string,
  id: number;
}

const Posts: React.FC = () => {
  const [post, setPost] = useState<dataTypes[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts/');
      const data = await res.json();
      setPost(data);
    }
    loadData();
  }, []);

  return (
    <div>
      <Container>    
        <Menu/>
         <Title>
           Posts ({post.length})
          </Title> 
        <CardContainer>    
            
          {post.map((post) => (
            <Card key={post.id}>
              <CardTitle>{post.title}</CardTitle>
              <CardBody>{post.body}</CardBody>
            </Card>
          ))}
        </CardContainer>
      </Container>
    </div>
  );
}

export default Posts;
