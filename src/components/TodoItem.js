import React, { Component } from 'react';
import '../css/TodoItem.css';

//text : todo의 내용
//checked : 체크박스의 상태
//id:todo의 고유 아이디
//onToggle: 체크박스를 조작하는 함수.
//onRemove : 아이템을 삭제시키는 함수

class TodoItem extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.checked !== nextProps.checked;
      }
    render() {
        let {text, checked, id, onToggle, onRemove } = this.props;
        console.log(id);

        return (
            <div className="todo-item" onClick={() => onToggle(id)}>
                <div className='remove' onClick={(e) => {
                    e.stopPropagation(); // onToggle이 실행되지 않도록 함
                    onRemove(id)}   
            }>X</div> 
            <div className={`todo-text ${ checked ? ' checked' : '' }`
}>
                <div>{text}</div>
            </div>
            {
                checked && (<div className='check-mark'>✓</div>)
            }
        </div>
        );
    }
}

export default TodoItem;