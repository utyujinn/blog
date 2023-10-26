"use client"

import React,{useState} from "react";

export default function Home() {
  const [ todoText, setTodoText ] = useState("");
  const [ todos, setTodos ] = useState([]);

  const onChangeTodoText = (event: React.ChangeEvent<HTMLInputElement>): void => setTodoText(event.target.value);

  const onClickAddTodoText = (): void => {
    const newArrayTodos = [...todos, todoText];
    setTodos(newArrayTodos);
    setTodoText("");
  }
  return (
    <>
      <h1>インプットフィールドの練習</h1>
      <div>
        <input
          placeholder={"todoを入力してください"}
          type={"text"}
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button
          onClick={onClickAddTodoText}
        >todoを追加</button>
      </div>

      <div>
        <h2>Todoリスト</h2>
        {todos.length === 0 ? (
          <p>todoはまだ登録されていません</p>
        ) : (
          <ul>
            {todos.map((todo) => (
              <li key={todo}>{ todo }</li>
            ))}
          </ul>
        ) }
      </div>
    </>
    );
};

