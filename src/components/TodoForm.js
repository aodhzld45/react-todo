/*
    Form 컴포넌트 구현 흐름
    1. 컴포넌트의 생김새 정의
    2. 컴포넌트의 DOM 태그 정의
    3. 컴포넌트의 CSS 스타일 정의
    4. 상태관리 및 props로 필요한 값 전달
*/ 

//products = 추가할 상품 값
//onChange = input 내용이 변경될때 실행되는 함수
//onCreate = 버튼이 클릭될때 실행되는 함수
//onKeyPress = input에서 키가 입력될 때 실행되는 함수 
import React from 'react';
import '../css/TodoForm.css';

let todoForm = ({value, onChange, onCreate, onKeyPress}) => {
  return (
    <div className="form">
      <input value={value} onChange={onChange} onKeyPress={onKeyPress}/>
      <div className="create-button" onClick={onCreate}>
        추가
      </div>
    </div>
  );
};

export default todoForm;


