import { useState } from "react";

function AddTodo({ onAddTodo }) {
  const [title, setTitle] = useState("");
  return (
    <>
      <input
        value={title}
        placeholder="增加列表"
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        onClick={() => {
          setTitle("");
          onAddTodo(title);
        }}
      >
        Add
      </button>
    </>
  );
}

export default AddTodo;
