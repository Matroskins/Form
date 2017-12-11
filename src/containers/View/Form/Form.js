/* @flow */

import React from 'react';
import { compose, withState, withStateHandlers } from 'recompose';
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
  selectCityId: number,
  isCommentValid: boolean,
  saveComment: () => void,
  setComment: () => void,
  setSelectCityId: () => void,
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
  selectCityId,
  setSelectCityId,
  isCommentValid,
  commentCorrect,
  commentIncorrect,
  selectCity,
  unselectCity } : FormProp) => {
    const disabledButton = !(isCitySelected && isCommentValid);
    const selectElement =citys.find((element)=>(element.id === selectCityId)); 
  return (
    <Container>
      <SelectCity
        isCitySelected={isCitySelected}
        setSelectCity={setSelectCityId}
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
        cityName={(typeof selectElement === "undefined") ? '' : selectElement.name }
        temp={(typeof selectElement === "undefined") ? '' : selectElement.temp}
        onClick={saveComment} 
      />
    </Container>
  );
}
const enhance = compose(
  withState('comment', 'setComment', ''),
  withState('selectCityId', 'setSelectCityId', ''),
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
  )
);

export default enhance(Form); 