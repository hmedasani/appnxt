import { styled } from '@mui/material';
import Button, { ButtonProps } from '@mui/material/Button';
import React from 'react';

const ButtonNew = styled(Button)`
  background: blue;
  color: yellow;
`;

function ButtonMenu(props: ButtonProps) {
  return <ButtonNew>{props.children}</ButtonNew>;
}

export default ButtonMenu;
