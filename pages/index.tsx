import ButtonAtom from '../app/atoms/form/button';
import HeaderAtom from '../app/atoms/layout/header';
import { NextPageLayoutProps } from './page';
const HomePage: NextPageLayoutProps = () => {
  return (
    <div>
      <HeaderAtom />
      <h1>Welcome World! This is the Home! Welcome!.. Oh! OOOh!</h1>
      <ButtonAtom>Vote here!</ButtonAtom>
      <ButtonAtom>This is also new Button for test</ButtonAtom>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = (page) => {
  return <>{page}</>;
};
