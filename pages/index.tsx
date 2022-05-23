import { CssBaseline } from '@mui/material';
import Head from 'next/head';
import SidenavAtom from '../app/atoms/layout/sidenav';
import { NextPageLayoutProps } from './page';

const HomePage: NextPageLayoutProps = () => {
  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>
      <CssBaseline />
      <SidenavAtom />
    </div>
  );
};

export default HomePage;

HomePage.getLayout = (page) => {
  return <>{page}</>;
};
