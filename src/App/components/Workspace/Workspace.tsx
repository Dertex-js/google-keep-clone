import React, { useState } from "react";

import { TextField } from "@mui/material";

import ListItem from "./components/ListItem";
import style from "./Workspace.module.scss";

const Workspace = () => {
  const [value, setValue] = useState<string>("");

  return (
    <div className={style.workspace}>
      <TextField
        className={style.input}
        id="outlined-textarea"
        label="Заметка..."
        placeholder="Введите заметку..."
        multiline
        fullWidth={true}
        style={{
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.075)",
        }}
        onChange={() => setValue}
      />
      <ListItem value={value} />
    </div>
  );
};

export default Workspace;
