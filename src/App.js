//import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {
  let [글제목,글제목변경] = useState(['남자코트 추천','남자바지 추천']);
  let posts = "강남 맛집 추천";
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className='list'> 
        <h3>{ 글제목[1] }</h3>
        <p>2월 27일 발행</p>
        <br/>
      </div>
    </div>
  );
}

export default App;
