
import React, { Component } from 'react';
import { compose, withHandlers, withState } from 'recompose';
import styled from 'styled-components';
import Form from './Form/Form.js';
import CommentList from './CommentList/CommentList.js';

// const url = 'https://api.openweathermap.org/data/2.5/weather?id=2172797&APPID=9cbe7856cf6d27f5f576a22aa58a5045';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

class App extends Component {

  // componentDidMount() {
  //   console.log(this);
  //   const setFetchedData = this.props.setFetchedData;
  //   const fetchedData = this.props.fetchedData; 
  //   fetch(url, {
  //     method: 'get',
  // })
  // .then(response => response.json())
  // .then(data =>{
  //   console.log(data);
  //   console.log(JSON.stringify(data));
  //   setFetchedData(JSON.stringify(data));
  //   }).catch(function(err){
  //     console.log('Request failed', err);
  //   })
  //  }

  render() {
    return (
        <Container>
          <Form citys={this.props.fetchedData} saveComment={this.props.saveComment} />
          <CommentList commentList={this.props.commentList} />
       </Container>
    );
  }
}


const enhance = compose(
  withState('fetchedData', 'setFetchedData', [{name: 'Выберите город', value: 0}, { name: 'Sevastopol', value: 1 }, { name: 'Moscow', value: 2 }]),
  withState('commentList', 'setCommentList', []),
  withHandlers({
    saveComment: (props) => (city, comment) => {
      debugger;
      const TempCommentsList = props.commentList;
      TempCommentsList.unshift({ city, comment });
      props.setCommentList(TempCommentsList);
    }
  })
);

export default enhance(App);
