import Container from '@mui/material/Container';
import React from 'react';
import AppbarAtom from '../../atoms/layout/appbar';
import BrandComponent from '../brand';

function HeaderComponent() {
  return (
    <AppbarAtom>
      <Container>
        <BrandComponent />
      </Container>
    </AppbarAtom>
  );
}

export default HeaderComponent;
