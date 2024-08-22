import Layout from '@/components/layout';
import { ReactElement } from 'react';

export default function Comment() {
  return <div className={`flex`}>comment</div>;
}

Comment.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
