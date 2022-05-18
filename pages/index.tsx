import styles from '../styles/HomePage.module.css';
import { NextPageLayoutProps } from './page';

const HomePage: NextPageLayoutProps = () => {
  return (
    <div className={styles.container}>
      <h1>Home Page</h1>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = (page) => {
  return <>{page}</>;
};
