import ButtonAtom from '../app/atoms/form/button';
import HeaderAtom from '../app/atoms/layout/header';
import { NextPageLayoutProps } from './page';

const HomePage: NextPageLayoutProps = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500">
      <HeaderAtom />
      <h1>Welcome World! This is the Home! Welcome!.. Oh! OOOh!</h1>
      <ButtonAtom>Vote here!</ButtonAtom>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = (page) => {
  return <>{page}</>;
};
