import React, { Component } from 'react';
import TodoItem from './TodoItem'; //todoItem Component import
//todos: todo 객체들이 들어있는 배열
//onToggle : 체크박스를 키고 끄는 함수
//onRemove : 아이템을 삭제시키는 함수
class TodoItemList extends Component {

    //컴포넌트 라이프 사이클 메소드 - shouldComponentUpdate 리렌더링 조율
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.todos !== nextProps.todos;
      }
    
    render() {
        let { todos, onToggle, onRemove} = this.props;

        let todoList = todos.map(
            ({id, text, checked}) => (
                <TodoItem
                    id={id}
                    text={text}
                    checked = {checked}
                    onToggle = {onToggle}
                    onRemove = {onRemove}
                    key = {id}
                />
            )
        );

        return (
            <div>
               {todoList}
            </div>
        );
    }
}

export default TodoItemList;