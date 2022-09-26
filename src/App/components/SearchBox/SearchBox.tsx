import React from "react";

import { TextField } from "@mui/material";
import { Link } from "react-router-dom";

import Logo from "../../../assets/keep_2020q4_48dp.png";
import style from "./SearchBox.module.scss";

const SearchBox = () => {
  return (
    <div className={style.searchBox}>
      <Link to={"/"} className={style.searchBox__link}>
        <img className={style.searchBox__link_img} src={Logo} alt="Logo" />
        <span className={style.searchBox__link_title}>Keep</span>
      </Link>
      <TextField
        className={style.searchBox__input}
        id="outlined-basic"
        label="Поиск"
        variant="outlined"
        size={"small"}
        fullWidth
        style={{}}
      />
    </div>
  );
};

export default SearchBox;
