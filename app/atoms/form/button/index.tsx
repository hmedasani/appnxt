import React from 'react';
import { CommonProps } from '../../../../props_reusable';

function ButtonAtom(props: CommonProps) {
  return (
    <div>
      <button className="bg-sky-600 hover:bg-sky-700 ...">
        {props.children}
      </button>
    </div>
  );
}

export default ButtonAtom;
