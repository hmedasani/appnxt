import { AppBar, AppBarProps } from '@mui/material';
import React from 'react';
import { CommonProps } from '../../../../props_reusable';

interface AppBarAtomProps extends AppBarProps, CommonProps {}

function AppbarAtom(props: AppBarAtomProps) {
  return <AppBar {...props} position="static" />;
}

export default AppbarAtom;
