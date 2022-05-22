import HeaderAtom from '../app/atoms/layout/header';
import styles from '../styles/AboutPage.module.css';
import { NextPageLayoutProps } from './page';

const AboutPage: NextPageLayoutProps = () => {
  return (
    <div className={styles.container}>
      <HeaderAtom />
      <h2>This is About Page</h2>
    </div>
  );
};

export default AboutPage;

AboutPage.getLayout = (page) => {
  return <>{page}</>;
};
