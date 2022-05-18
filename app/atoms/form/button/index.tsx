import { ButtonProps } from '@mui/material';
import Button from '@mui/material/Button';
import { CommonProps } from '../../../z_props';

export interface ButtonAtomProps extends CommonProps, ButtonProps {
  children: any;
}

const commonAttr = { automationid: 'ButtonAtom' };

const ButtonAtom: React.FC<ButtonAtomProps> = ({ children }) => {
  return <Button variant="contained" {...commonAttr} children={children} />;
};

export default ButtonAtom;
