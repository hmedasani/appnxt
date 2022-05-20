import { CommonProps } from '../../../z_props';
import styles from './buttonAtom.module.css';

export interface ButtonAtomProps extends CommonProps {
  children: any;
}

const commonAttr = { automationid: 'ButtonAtom' };

const ButtonAtom: React.FC<ButtonAtomProps> = ({ children }) => {
  return <button className={styles.btn} {...commonAttr} children={children} />;
};

export default ButtonAtom;
