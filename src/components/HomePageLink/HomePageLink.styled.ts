import styled from 'styled-components';

export const Container = styled.a`

  display: flex;
  flex-direction: column;
  gap: 25px;

`;

export const Title = styled.h2<{ disabled?: boolean }>`

  display: flex;
  font-size: 24px;
  margin:25px;
  height: 50px;
  width: 200px;
  text-align: center;
  background-color: none;
  justify-content: center;
  align-items: center;
  
  &:hover{
    cursor:pointer;
  }
`;