import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "../../components/ui/Form/Form";
import {
  incrementCounter,
  decrementCounter,
  setValue,
  fakefunction,
} from "../../Store/Action/counter";
import { addTodo, cleanTodo, removeTodo } from "../../Store/Action/todo";
import { helpers } from "../../utils";
import "./Todo.scss";

const Todo = () => {
  const counterState = useSelector((state) => state.counter.counterValue);
  const todoState = useSelector((state) => state.todo.TodoValues);
  const dispatch = useDispatch();
  useEffect(() => {
    const URL =
      "https://www.celio.com/03-09-SWEATER/Pull-col-V-100-laine-merinos-extra-fin/p/1085610";
    fetch(URL)
      .then((res) => res.text())
      .then((text) => {
        console.log(text);
      })
      .catch((err) => console.log(err));
  });
  return (
    <div className="TodoContainer">
      <div className="Todolist">
        <h1 onClick={() => dispatch(cleanTodo())} className="CleanTodo">CleanTodo</h1>
        <TodoForm></TodoForm>
        <ul>
        {todoState.map((todo) => (
          <li key={helpers.generateKey(todo)}>{todo} - <span onClick={() => dispatch(removeTodo(todo))} value={todo}>Delete</span></li>
        ))}
        </ul>
      </div>

      <div className="Counter">
        <h1>{counterState}</h1>
        <div className="click">
          <h2 onClick={() => dispatch(incrementCounter())}>+</h2>
          <h2 onClick={() => dispatch(decrementCounter())}>-</h2>
          <h2 onClick={() => dispatch(fakefunction())}>fakefunction</h2>
        </div>
        <CounterForm></CounterForm>
      </div>
    </div>
  );
};
const TodoForm = () => {
  const dispatch = useDispatch();
  const Action = (data) => {
    dispatch(addTodo(data.setTodo.value));
  };
  const Fields = {
    setTodo: {
      type: "text",
      placeholder: "TODO",
      value: "",
      minlength: 3,
      required: true,
    },
    Submit: {
      type: "Submit",
      value: "Save",
    },
  };
  return <Form Fields={Fields} Action={Action}></Form>;
};

const CounterForm = () => {
  const dispatch = useDispatch();
  const Action = (data) => {
    dispatch(setValue(parseInt(data.setCounter.value)));
  };
  const Fields = {
    setCounter: {
      type: "number",
      placeholder: "number",
      value: "",
      minlength: 3,
      required: true,
    },
    Submit: {
      type: "Submit",
      value: "Save",
    },
  };
  return <Form Fields={Fields} Action={Action}></Form>;
};
export default Todo;
