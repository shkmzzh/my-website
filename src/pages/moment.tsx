import Layout from '@/components/layout';
import { ReactElement } from 'react';

export default function Moment() {
  return <div className={`flex`}>我叫牛马怀，喜欢嫖</div>;
}

Moment.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
