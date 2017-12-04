import React from 'react';
import styled from 'styled-components';
import CommentRow from './CommentRow';

const Container = styled.div`
  margin-top:15px;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content: space-between; 
  width:50%;
`;

const CommentList = ({ commentList }) => (
  <Container>
    {commentList.map((comment, id) => {
      return (
        <CommentRow
          city={comment.city}
          comment={comment.comment}
          key={comment.city + id}
        />);
    }
    )
    }
  </Container>
)

export default CommentList;