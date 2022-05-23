import Container from '@mui/material/Container';
import React from 'react';
import AppbarAtom from '../atoms/layout/appbar';
import BrandComponent from '../components/brand';

function HeaderTemplate() {
  return (
    <AppbarAtom>
      <Container>
        <BrandComponent />
      </Container>
    </AppbarAtom>
  );
}

export default HeaderTemplate;
