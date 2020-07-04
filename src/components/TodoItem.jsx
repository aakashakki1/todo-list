import React from "react";

function TodoItem(props) {
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li> {props.name} </li>
    </div>
  );
}

export default TodoItem;
