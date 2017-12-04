import React from 'react';
import { compose, withHandlers, withState } from 'recompose';
import TextField from 'material-ui/TextField';

function validationComment(comment) {
  if (comment.length < 3) {
    return 'too small comment'
  }
  if (comment.length > 7) {
    return 'too large comment'
  }
}

type CommentProp = {
  comment:string,
  errorText:string,
  onChange: SyntheticEvent<T> => void,
};

const Comment = ({ comment, onChange, errorText }: CommentProp) => (
  <TextField
    hintText="Enter your comment"
    errorText={errorText}
    value={comment}
    onChange={onChange}
  />
);

const enhance = compose(
  withState('errorText', 'setErrorText', undefined),
  withHandlers({
    onChange: (props) => (e, newValue) => {
      const commentText = newValue;
      props.setComment(commentText);
      const errorText = validationComment(commentText);
      props.setComment(commentText);
      if (errorText) {
        props.commentIncorrect();
        props.setErrorText(errorText);
      }
      else {
        props.commentCorrect();
        props.setErrorText(undefined);
      }
    }
  })
);

export default enhance(Comment);