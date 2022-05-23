import { AppBar, AppBarProps } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import { CommonProps } from '../../../../props_reusable';

interface AppBarAtomProps extends AppBarProps, CommonProps {}

function AppbarAtom(props: AppBarAtomProps) {
  return (
    <AppBar {...props} position="static">
      <Container>
        <h1>This is the Header</h1>
      </Container>
    </AppBar>
  );
}

export default AppbarAtom;
