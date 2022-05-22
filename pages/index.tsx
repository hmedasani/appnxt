import ButtonAtom from '../app/atoms/form/button';
import ButtonNew from '../app/atoms/form/button_menu';
import HeaderAtom from '../app/atoms/layout/header';
import { NextPageLayoutProps } from './page';
const HomePage: NextPageLayoutProps = () => {
  return (
    <div>
      <HeaderAtom />
      <h1>Welcome World! This is the Home! Welcome!.. Oh! OOOh!</h1>
      <ButtonAtom>Vote here!</ButtonAtom>
      <ButtonNew>This is also new Button for test</ButtonNew>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = (page) => {
  return <>{page}</>;
};
