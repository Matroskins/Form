import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const ContainerTemperatureComment = styled.div`
display: flex;
justify-content: space-between;
width: 100px;
`;

const CommentRow = ({ city, comment, temp }) => (
  <Container>
    <div>{city}</div>
    <ContainerTemperatureComment>
      <div>{comment}</div>
      <div>{temp}</div>
    </ContainerTemperatureComment>
  </Container>
);

export default CommentRow;
