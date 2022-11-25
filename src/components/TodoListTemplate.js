import React from "react";
import '../css/TodoListTemplate.css';

// 함수형 컴포넌트 : 파라미터(form, children)로 받게 되는것은 props

// let hours = today.getHours(); // 시
// let minutes = today.getMinutes();  // 분
// let seconds = today.getSeconds();  // 초

let today = new Date();
let dateString = today.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});
let dayName = today.toLocaleDateString('ko-KR', { weekday: 'long' });

let TodoListTemplate = ({form, children}) => {
    return (
        <main className="todo-list-template">
            <h1>{dateString}</h1>
            <div className="day">{dayName}</div>
            <div className="title">
              React ToDo
            </div>

            <section className="form-wrapper">
                {form}
            </section>
            <section className="todos-wrapper">
                {children}
            </section>
        </main>
    );
};

export default TodoListTemplate;