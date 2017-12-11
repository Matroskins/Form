

import React, { Component } from 'react';
import { compose, withHandlers, withState, withProps } from 'recompose';
import styled from 'styled-components';
import Form from './Form/Form.js';
import CommentList from './CommentList/CommentList.js';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;


const Main = ({fetchedData, commentList, saveComment})=>(
  <Container>
      {(fetchedData === null) && (<div>Can't get data</div>)}
      {(fetchedData !== null) && (
        <div>
          <Form citys={fetchedData} saveComment={saveComment} />
          <CommentList commentList={commentList} />
        </div>)}
  </Container>
);



const enhance = compose(
  withProps((props)=>({
    fetchedData : (()=>{
    if(props.fetchedDataObject !== null){
      const newFetchedArray = props.fetchedDataObject.list.map((cityWeather, ind)=>{ 
        return {
        name: cityWeather.name,
        temp: cityWeather.main.temp,
        value: (ind + 1),
        id: cityWeather.id
      }
      });
      return [...newFetchedArray, {value: 0, name:'Выберите город'}]
   }
   return null; 
  })()
  })
),
  withState('commentList', 'setCommentList', []),
  withHandlers({
    saveComment: (props) => (city, comment, temp) => {
      const TempCommentsList = props.commentList;
      TempCommentsList.unshift({ city, comment, temp });
      props.setCommentList(TempCommentsList);
    }
  })
);

export default enhance(Main);