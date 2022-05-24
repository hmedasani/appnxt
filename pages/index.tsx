import { CssBaseline } from '@mui/material';
import Head from 'next/head';
import TemplateT from '../app/templates/templateT';
import { NextPageLayoutProps } from './page';

const HomePage: NextPageLayoutProps = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <CssBaseline />

      <TemplateT />
    </>
  );
};

export default HomePage;

HomePage.getLayout = (page) => {
  return <>{page}</>;
};
