import { CssBaseline } from '@mui/material';
import Head from 'next/head';
import SidenavAtom from '../app/atoms/layout/sidenav';
import { NextPageLayoutProps } from './page';

const HomePage: NextPageLayoutProps = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <CssBaseline />

      <SidenavAtom />
    </>
  );
};

export default HomePage;

HomePage.getLayout = (page) => {
  return <>{page}</>;
};
