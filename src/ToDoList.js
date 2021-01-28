import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import ListCom from "./ListCom";

const ToDoList = () => {
  const [item, setitem] = useState("");
  const [newitem, setNewItem] = useState([]);

  const itemEvent = (e) => {
    setitem(e.target.value);
  };

  const changee = () => {
    setNewItem((prevVal) => {
      return [...prevVal, item];
    });
    setitem("");
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1> ToDoList </h1>
          <br />
          <input
            type="text"
            placeholder="Add an item"
            onChange={itemEvent}
            value={item}
          />
          <Button className="newBtn" onClick={changee}>
            <AddIcon />
          </Button>
          <br />
          <ol>
            {newitem.map((val, index) => {
              return <ListCom key={index} text={val} />;
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default ToDoList;
