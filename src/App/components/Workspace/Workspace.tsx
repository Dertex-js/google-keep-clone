import React, { useState } from "react";

import { AddCircleOutline } from "@mui/icons-material";
import { IconButton, InputAdornment, InputBase } from "@mui/material";

import ListItem from "./components/ListItem";
import style from "./Workspace.module.scss";

const Workspace = () => {
  const [value, setValue] = useState<string>("");

  return (
    <div className={style.workspace}>
      <InputBase
        className={style.input}
        id="outlined-textarea"
        placeholder="Введите заметку..."
        multiline
        fullWidth={true}
        style={{
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.075)",
        }}
        onChange={(e) => setValue(e.target.value)}
        inputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton edge="end" color="primary">
                <AddCircleOutline />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <ListItem value={value} />
    </div>
  );
};

export default Workspace;
