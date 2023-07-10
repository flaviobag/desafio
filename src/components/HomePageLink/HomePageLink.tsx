import { Container, Title } from "./HomePageLink.styled";
import React from 'react';

const HomePageLink = ({
  title,
  url,
}: {
  title: string;
  url: string;
  disabled?: boolean;
}) => (
  
    <Container href={url}>
      <Title > {title} </Title>
    </Container>
  
  
);

export default HomePageLink;