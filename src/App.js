import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";

const App = () => {
  const [count, setCount] = useState(0);
  const [newCount, setNewCount] = useState();

  console.log(newCount);

  const handleNew = () => {
    setCount(newCount);
    setNewCount("");
  };

  const action = () => {
    if (count < 1) {
      alert("the nuber is less than 1");
    } else {
      setCount(count - 1);
    }
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1> {count} </h1>
          <input
            type="text"
            placeholder="Enter a number"
            value={newCount}
            onChange={(e) => setNewCount(e.target.value)}
          />
          <br />
          <button onClick={handleNew}>SET</button>
          <div className="btn_div">
            <Tooltip title="Add">
              <Button onClick={() => setCount(count + 1)} className="btn_green">
                {" "}
                <AddIcon />{" "}
              </Button>
            </Tooltip>
            <Tooltip title="Delete">
              <Button onClick={action} className="btn_red">
                {" "}
                <DeleteIcon />{" "}
              </Button>
            </Tooltip>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
