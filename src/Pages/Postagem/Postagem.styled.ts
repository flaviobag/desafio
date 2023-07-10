import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  gap: 16px;
  position: relative;
  left: -100px;
  top: 70px;

`;

export const Card = styled.li`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 8px;
  margin-bottom: 16px;
  width: 250px;
  height: auto;
  list-style-type: none;
 
`;

export const CardTitle = styled.h3`
 
  color: #333;
  font-size: 20px;
  margin-bottom: 8px;
`;

export const Title = styled.h3`
  margin: 20px;
`;

export const CardBody = styled.p`

  color: #666;
  font-size: 16px;
`;
