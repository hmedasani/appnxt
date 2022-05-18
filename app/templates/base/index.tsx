import { CommonProps } from '../../z_props';
import styles from './templateBase.module.css';

export interface TemplateBaseProps extends CommonProps {
  str: string;
}

const commonAttr = { automationid: 'TemplateBase' };

const TemplateBase: React.FC<TemplateBaseProps> = ({ str }) => {
  return <div className={styles.container}>{str}</div>;
};

export default TemplateBase;
