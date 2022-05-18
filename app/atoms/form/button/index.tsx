import { CommonProps } from '../../../z_props';
import styles from './buttonAtom.module.css';

export interface ButtonAtomProps extends CommonProps {
  str: string;
  children: any;
}

const commonAttr = { automationid: 'ButtonAtom', varient: 'primary' };

const ButtonAtom: React.FC<ButtonAtomProps> = ({ str, children }) => {
  return (
    <button className={styles.btn} {...commonAttr}>
      {str}
      {children}
    </button>
  );
};

export default ButtonAtom;
