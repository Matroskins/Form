import React from 'react';
import styled from 'styled-components';
import CommentRow from './CommentRow';

const Container = styled.div`
  margin-top:15px;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content: space-between; 
  width:100%;
`;

const CommentList = ({ commentList }) => (
  <Container>
    {commentList.map((comment, id) => {
      return (
        <CommentRow
          city={comment.city}
          comment={comment.comment}
          temp={comment.temp}
          key={comment.city + id}
        />);
    }
    )
    }
  </Container>
)

export default CommentList;