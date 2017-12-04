import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-top:15px;
  display:flex;
  justify-content: space-between; 
  width:100%;
  `;

const CommentRow = ({city, comment})=>(
  <Container>
    <div>{city}</div>
    <div>{comment}</div>
  </Container>
);

export default CommentRow; 