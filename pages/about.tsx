import Head from 'next/head';
import HeaderAtom from '../app/atoms/layout/appbar';
import styles from '../styles/AboutPage.module.css';
import { NextPageLayoutProps } from './page';

const AboutPage: NextPageLayoutProps = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Page</title>
      </Head>
      <HeaderAtom />
      <h2>This is About Page</h2>
    </div>
  );
};

export default AboutPage;

AboutPage.getLayout = (page) => {
  return <>{page}</>;
};
