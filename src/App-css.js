import React, { useState } from "react";
import "./App.css";
import List from "./components/List";
import Form from "./components/Form";

export default function App() {
  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // 새로운 할 일 데이터
    let newTodo = {
      id: Date.now(),
      title: value,
      conpleted: false,
    };

    //원래 있던 할 일에 새로운 할 일을 더해주기
    setTodoData((prev) => [...prev, newTodo]);
    setValue(""); //입력란 텍스트 삭제
  };

  return (
    <div className="container">
      <div className="todoBlock">
        <div className="title">
          <h1>할 일 목록</h1>
        </div>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <List todoData={todoData} setTodoData={setTodoData} />
        <Form handleSubmit={handleSubmit} value={value} setValue={setValue} />
      </div>
    </div>
  );
}
