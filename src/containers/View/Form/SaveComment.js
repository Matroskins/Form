import React from 'react';
import { compose, withHandlers } from 'recompose';
import styled from 'styled-components';
import RaisedButton from 'material-ui/RaisedButton';

const Container = styled.div`
  display:flex;
  justify-content:center;
`;

type SaveCommentProp = {
  disabledButton:boolean,
  onClick: SyntheticEvent<T> => void,
};

const SaveComment = ({ disabledButton, onClick } : SaveCommentProp) => (
  <Container>
    <RaisedButton
     label="Cохранить"
     disabled={disabledButton}
     onClick={disabledButton ? undefined : onClick}
     />
  </Container>
);

const enhance = compose(
  withHandlers({
    onClick: (props) => () => {
      props.onClick(props.cityName, props.temp, props.comment);
    }
  })
);

export default enhance(SaveComment);