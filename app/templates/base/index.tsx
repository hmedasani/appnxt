import styles from './templateBase.module.css';

export interface TemplateBaseProps {
  str: string;
}

const TemplateBase: React.FC<TemplateBaseProps> = ({ str }) => {
  return <div className={styles.container}>{str}</div>;
};

export default TemplateBase;
