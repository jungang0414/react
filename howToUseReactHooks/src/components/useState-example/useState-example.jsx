import { useState } from "react";
import AddTodo from "./AddTodo.jsx";
import TaskList from "./TaskList.jsx";
import CountLabel from "./CountLabel.jsx";

function UseStateExample() {
  //改變數字 初始值設為0
  const [count, setCount] = useState(0);
  //函數設定
  function handleClick() {
    setCount(count + 1);
  }

  //改變文字
  const [text, setText] = useState("input text");
  //函數設定 在input輸入的文字藉由函數讀取在input中最新的值
  function handleChange(e) {
    setText(e.target.value);
  }

  //複選框的應用(布林值)
  const [liked, setLiked] = useState(true);
  //函數設定 js判斷觸發元素設定為 e.target 判斷是否被選中為.checked
  function handleClickLiked(e) {
    setLiked(e.target.checked);
  }

  //可以在同一元件當中宣告多數狀態變數, 狀態變數各自獨立
  const [name, setName] = useState("name");
  const [age, setAge] = useState(60);
  //函數設定 增加數字 改變姓名
  function increment() {
    setAge(age + 1); // setAge(60 + 1)
    setAge(age + 1); //set並不會改變目前已執行程式碼中的age狀態變數 所以也是 setAge(60 + 1)
    setAge(age + 1); // setAge(60 + 1)
    //若是想解決這個問題, 你應該需要把更新的函數狀態傳遞給setAge,而不是下個狀態
  }
  function textChange(e) {
    setName(e.target.value);
  }

  //根據之前的狀態更新狀態
  const [aged, setAged] = useState(0);
  function solveIncrement() {
    //使用set不會改變目前已執行程式碼中的狀態變數,為了解決此問題可以將更新的函數傳遞給setAged而不是下一個狀態
    //依照慣例通常會將參數名稱命名為狀態變數名稱的第一個字母 aged 就是 a, 更精確一點可以寫成prevAged
    setAged((prevAged) => prevAged + 1);
    setAged((prevAged) => prevAged + 1);
    setAged((prevAged) => prevAged + 1);
  }

  //將物件和陣列放入狀態
  const [form, setForm] = useState({
    firstName: "L",
    age: 50,
    email: "xxx@email",
  });

  //將巢狀物件和陣列放入狀態
  const [person, setPerson] = useState({
    name: "Niki",
    artwork: {
      title: "Nana",
      city: "Ham",
      image: "",
    },
  });

  //巢狀物件的函數設定
  function handleNameChange(e) {
    setPerson({
      ...person,
      name: e.target.value,
    });
  }

  function handleTitleChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        title: e.target.value,
      },
    });
  }

  function handleCityChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        city: e.target.value,
      },
    });
  }

  function handleImgeChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        image: e.target.value,
      },
    });
  }

  //todolist 將陣列初始值 放入狀態
  let nextId = 3;
  const initTodos = [
    { id: 0, title: "milk", done: true },
    { id: 1, title: "Eat taco", done: false },
    { id: 2, title: "Brew tea", done: false },
  ];

  const [todos, setTodos] = useState(initTodos);

  //todo函數設定 增加列表
  function handleAddTode(title) {
    setTodos([
      ...todos,
      {
        id: nextId++,
        title: title,
        done: false,
      },
    ]);
  }

  //修改todo
  function handleChangeTodo(nextTodo) {
    setTodos(
      todos.map((t) => {
        if (t.id === nextTodo.id) {
          return nextTodo;
        } else {
          return t;
        }
      })
    );
  }

  //刪除todo
  function handleDeleteTodo(todoId) {
    setTodos(todos.filter((t) => t.id !== todoId));
  }

  //利用useState狀態更改 React會重新渲染頁面的機制 製作reset按鈕
  const [version, setVersion] = useState(0);

  //函數設定
  function handleReset() {
    setVersion(version + 1);
  }

  function Form() {
    const [name, setName] = useState("default");

    return (
      <>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <p>Name : {name} </p>
      </>
    );
  }

  //儲存先前渲染的資訊
  const [counted, setCounted] = useState(0);
  
  return (
    <>
      <div>
        <button onClick={handleClick}>改變數字 {count}</button>
      </div>
      <hr />
      <div>
        <input type="text" value={text} onChange={handleChange} />
        <p>輸入的文字: {text}</p>
        <button onClick={() => setText("input text")}>reset</button>
      </div>
      <hr />
      <div>
        <label>
          <input type="checkbox" checked={liked} onChange={handleClickLiked} />
          Liked this
        </label>
        <p>{liked ? "liked" : "did not liked"}</p>
      </div>
      <hr />
      <div>
        <input type="text" value={name} onChange={textChange} />
        <button onClick={increment}>+1</button>
        <p>Name: {name}</p>
        <p>age: {age}</p>
      </div>
      <hr />
      <div>
        <p>重複使用setAged改變數字</p>
        <button onClick={solveIncrement}>+3 {aged}</button>
      </div>
      <hr />
      <div>
        <label>
          First name:{" "}
          <input
            value={form.firstName}
            onChange={(e) => {
              setForm({
                ...form,
                firstName: e.target.value,
              });
            }}
          />
        </label>
        <br />
        <label>
          Age:{" "}
          <input
            value={form.age}
            onChange={(e) => {
              setForm({
                ...form,
                age: e.target.value,
              });
            }}
          />
        </label>
        <br />
        <label>
          Email:{" "}
          <input
            value={form.email}
            onChange={(e) => {
              setForm({
                ...form,
                email: e.target.value,
              });
            }}
          />
        </label>
        <p>
          {form.firstName} {form.age} {form.email}
        </p>
      </div>
      <hr />
      <div>
        <label>
          Name: <input value={person.name} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          Title:{" "}
          <input value={person.artwork.title} onChange={handleTitleChange} />
        </label>
        <br />
        <label>
          City:{" "}
          <input value={person.artwork.city} onChange={handleCityChange} />
        </label>
        <br />
        <label>
          Image:
          <input value={person.artwork.image} onChange={handleImgeChange} />
        </label>
        <p>
          <i>{person.artwork.title}</i>
          {" by "}
          {person.name}
          <br />
          (located in {person.artwork.city})
        </p>
        <img src={person.artwork.image} alt={person.artwork.title} />
      </div>
      <hr />
      <div>
        <h2>Todo List</h2>
        {/* 這裡放另外寫的todo元件 */}
        <AddTodo onAddTodo={handleAddTode} />
        <TaskList
          todos={todos}
          onChangeTodo={handleChangeTodo}
          onDeleteTodo={handleDeleteTodo}
        />
      </div>
      <hr />
      <div>
        <button onClick={handleReset}>Reset</button>
        <Form />
      </div>
      <hr />
      <div>
        <button onClick={() => setCounted(counted + 1)}>Increment</button>
        <button onClick={() => setCounted(counted - 1)}>Decrement</button>
        <CountLabel counted={counted} />
      </div>
    </>
  );
}

export default UseStateExample;
