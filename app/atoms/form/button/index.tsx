import { Button, ButtonProps, styled } from '@mui/material';
import React from 'react';
import { CommonProps } from '../../../../props_reusable';
import buttonStyles from './buttonStyles';

const Btn = styled(Button)`
  ${buttonStyles}
`;

interface ButtonAtomProps extends ButtonProps, CommonProps {}

function ButtonAtom(props: ButtonAtomProps) {
  return <Btn {...props} />;
}

export default ButtonAtom;
