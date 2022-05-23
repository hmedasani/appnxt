import React from 'react';
import ButtonAtom from '../../form/button';

function HeaderAtom() {
  return (
    <nav className="bg-gray-800">
      <ButtonAtom children="This Menu Button" />
    </nav>
  );
}

export default HeaderAtom;
