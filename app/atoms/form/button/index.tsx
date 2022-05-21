import React from 'react';
import { CommonProps } from '../../../../props_reusable';

function ButtonAtom(props: CommonProps) {
  return (
    <div>
      <button className="bg-red-600 hover:bg-red-700 ...">
        {props.children}
      </button>
    </div>
  );
}

export default ButtonAtom;
