import React, { FC, useEffect, useState } from "react";

import { Box, Button, Card, CardActions, CardContent } from "@mui/material";

import style from "./ListItem.module.scss";

type ListItemProps = {
  value: string;
};

const card = (
  <Card variant="outlined">
    <CardContent></CardContent>
    <CardActions>
      <Button size="small">Delete</Button>
    </CardActions>
  </Card>
);

const ListItem: FC<ListItemProps> = ({ value }) => {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(value);
  }, [value]);
  const [cards, setCards] = useState<[] | null>(null);

  return <Box sx={{ minWidth: 275 }}></Box>;
};

export default ListItem;
