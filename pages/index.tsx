import ButtonAtom from '../app/atoms/form/button';
import styles from '../styles/HomePage.module.css';
import { NextPageLayoutProps } from './page';

const HomePage: NextPageLayoutProps = () => {
  return (
    <div className={styles.container}>
      <h1>Welcome World! This is the Home! Welcome!.. Oh! OOOh!</h1>
      <ButtonAtom>Vote here!</ButtonAtom>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = (page) => {
  return <>{page}</>;
};
