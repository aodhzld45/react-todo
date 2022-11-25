import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/TodoForm';
import TodoItemList from './components/TodoItemList';


class App extends Component {

  id = 3 // 이미 0,1,2 가 존재하므로 3으로 설정

  state = {
    input: '',
    todos: [
      { id: 0, text: ' 가우비즈', checked: false },
      { id: 1, text: ' 서현석', checked: true },
      { id: 2, text: ' React', checked: false }
    ]
  }

//   handleToggle = (id) => {
//   let  {todos} = this.state;
//   let index = todos.findIndex(todo => todo.id === id);
//   let selected = todos[index]; //선택한 객체
//   let nextTodos = [...todos]; // 배열을 복사
  
//   //기존의 값들을 복사하고, checked 값을 덮어쓰기
//   nextTodos[index] = {
//     ...selected,
//     checked: !selected.checked
//   };
  
//   this.setState({
//     todos: nextTodos
//   });
// }

handleToggle = (id) => {
  let { todos } = this.state;
  //파라미터로 받은 id를 가지고 몇번째 아이템인지 찾는다.
  let index = todos.findIndex(todo => todo.id === id);

  let selected = todos[index];

  this.setState({
    todos: [
      ...todos.slice(0, index),
      {
        ...selected,
        checked: !selected.checked
      },
      ...todos.slice(index + 1, todos.length)
    ]
  });
}

  handleChange = (e) => {
    this.setState({
      input: e.target.value // input 의 다음 바뀔 값
    });
  }

  handleRemove = (id) => {
    let {todos} = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  }

  handleCreate = () => {
    let { input, todos } = this.state;
    this.setState({
      input: '', // 인풋 비우고
      // concat 을 사용하여 배열에 추가
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false
      })
    });
  }

  handleKeyPress = (e) => {
    // 눌려진 키가 Enter 면 handleCreate 호출
    if(e.key === 'Enter') {
      this.handleCreate();
    }
  }

  render() {
    let { input, todos } = this.state;
    let {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove
    } = this;

    return (
      <TodoListTemplate form={(
        <Form 
          value={input}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          onCreate={handleCreate}
        />
      )}>
        <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
      </TodoListTemplate>
    );
  }
}

export default App;