import React from "react";

import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { Button, ButtonGroup, SvgIcon } from "@mui/material";

import style from "./Sidebar.module.scss";

const icons = [
  <SvgIcon
    component={LightbulbOutlinedIcon}
    style={{ marginRight: "23px", marginLeft: "23px" }}
  />,
  <SvgIcon
    component={NotificationsNoneOutlinedIcon}
    style={{ marginRight: "23px", marginLeft: "23px" }}
  />,
  <SvgIcon
    component={ArchiveOutlinedIcon}
    style={{ marginRight: "20px", marginLeft: "23px" }}
  />,
  <SvgIcon
    component={DeleteForeverOutlinedIcon}
    style={{ marginRight: "23px", marginLeft: "23px" }}
  />,
];

const Sidebar = () => {
  return (
    <ButtonGroup
      className={style.sidebar}
      orientation="vertical"
      aria-label="vertical contained button group"
      variant="text"
      color="inherit"
      fullWidth={true}
    >
      <Button key="Заметки" variant="text" className={style.sidebar__button}>
        {icons[0]}
        Заметки
      </Button>
      <Button
        key="Напоминания"
        variant="text"
        className={style.sidebar__button}
      >
        {icons[1]}
        Напоминания
      </Button>
      <Button key="Архив" variant="text" className={style.sidebar__button}>
        {icons[2]}
        Архив
      </Button>
      <Button key="Корзина" variant="text" className={style.sidebar__button}>
        {icons[3]}
        Корзина
      </Button>
    </ButtonGroup>
  );
};

export default Sidebar;
