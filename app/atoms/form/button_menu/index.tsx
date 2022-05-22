import { styled } from '@mui/material';
import Button, { ButtonProps } from '@mui/material/Button';
import React from 'react';

const ButtonNew = styled(Button)`
  color: white;
  background-color: green;
  font-size: 1rem;
`;

function ButtonMenu(props: ButtonProps) {
  return <ButtonNew variant="contained">{props.children}</ButtonNew>;
}

export default ButtonMenu;
