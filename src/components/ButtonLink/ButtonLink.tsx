import { Container, Title } from "./ButtonLink.styled";
import React from 'react';

const ButtonLink = ({
  title,
  url,
  disabled,
}: {
  title: string;
  url: string;
  disabled?: boolean;
}) => (
  
    <Container href={url}>
      <Title > {title} </Title>
    </Container>
  
  
);

export default ButtonLink;