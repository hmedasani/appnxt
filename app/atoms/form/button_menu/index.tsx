import Button, { ButtonProps } from '@mui/material/Button';
import React from 'react';

function ButtonMenu(props: ButtonProps) {
  return <Button>{props.children}</Button>;
}

export default ButtonMenu;
