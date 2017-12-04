/* @flow */

import React from 'react';
import { compose, withHandlers, withState, withStateHandlers } from 'recompose';
import styled from 'styled-components';
import SelectCity from './SelectCity';
import Comment from './Comment';
import SaveComment from './SaveComment';

const Container = styled.div`
  height: 275px;
  display: flex;
  flex-direction:column;
  align-items:center;
  justify-content: space-between;
`;

type FormProp = {
  citys: Array<{name: string, value: number, }>,
  comment: string,
  isCitySelected: boolean,
  selectCityName: string,
  isCommentValid: boolean,
  saveComment: () => void,
  setComment: () => void,
  setSelectCityName: () => void,
  commentCorrect: () => void,
  commentIncorrect: () => void,
  selectCity: () => void,
  unselectCity: () => void,
};

const Form = ({
  citys,
  saveComment,
  comment,
  isCitySelected,
  setComment,
  selectCityName,
  setSelectCityName,
  isCommentValid,
  commentCorrect,
  commentIncorrect,
  selectCity,
  unselectCity } : FormProp) => {
    const disabledButton = !(isCitySelected && isCommentValid); 
  return (
    <Container>
      <SelectCity
        isCitySelected={isCitySelected}
        setSelectCity={setSelectCityName}
        selectCity={selectCity}
        unselectCity={unselectCity}
        citys={citys} 
      />
      <Comment
        comment={comment}
        setComment={setComment}
        commentCorrect={commentCorrect}
        commentIncorrect={commentIncorrect} 
      />
      <SaveComment
        disabledButton = {disabledButton}
        comment={comment}
        cityName={selectCityName}
        onClick={saveComment} 
      />
    </Container>
  );
}
const enhance = compose(
  withState('comment', 'setComment', ''),
  withState('selectCityName', 'setSelectCityName', ''),
  withStateHandlers(
    () => ({ isCitySelected: false }),
    {
      selectCity: () => () => ({
        isCitySelected: true,
      }),
      unselectCity: () => () => ({
        isCitySelected: false,
      }),
    }
  ),
  withStateHandlers(
    () => ({ isCommentValid: false }),
    {
      commentCorrect: () => () => ({
        isCommentValid: true,
      }),
      commentIncorrect: () => () => ({
        isCommentValid: false,
      }),
    }
  ),
  withHandlers({
    saveComment: (props) => (city, comment) => {
      props.saveComment(city,comment);
    }
  })
);

export default enhance(Form); 