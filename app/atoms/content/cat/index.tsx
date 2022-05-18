import { CommonProps } from '../../../z_props';
import styles from './catAtom.module.css';

export interface CatAtomProps extends CommonProps {
  str: string;
}

const commonAttr = { automationid: 'CatAtom' };

const CatAtom: React.FC<CatAtomProps> = ({ str }) => {
  return (
    <div className={styles.container} {...commonAttr}>
      {str}
    </div>
  );
};

export default CatAtom;
