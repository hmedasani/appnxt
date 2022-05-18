import { NextPage } from 'next';
import { ComponentType, ReactElement, ReactNode } from 'react';

export type NextPageLayoutProps<P = {}> = NextPage<P> & {
  /*eslint-disable */
  getLayout?: (_page: ReactElement) => ReactNode;
  /*eslint-enable */
  layout?: ComponentType;
};
