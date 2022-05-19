import { ButtonProps, styled } from '@mui/material';
import Button from '@mui/material/Button';
import { CommonProps } from '../../../z_props';

export interface ButtonAtomProps extends CommonProps, ButtonProps {
  children: any;
}

const commonAttr = { automationid: 'ButtonAtom' };

const Btn: React.FC<ButtonAtomProps> = ({ children }) => {
  return <Button variant="contained" {...commonAttr} children={children} />;
};

const ButtonAtom = styled(Btn)({
  backgroundColor: 'red',
});

export default ButtonAtom;
