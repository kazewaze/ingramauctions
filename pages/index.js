// import { useRouter } from 'next/router'
// import Link from 'next/link'

import { useUser } from '@auth0/nextjs-auth0'

import Layout from '../components/_common/layout'
import Home from '../components/home'
import LoggedInHome from '../components/loggedInHome'

export default () => {
//  const router = useRouter();
  const { user } = useUser();

  if (user) {
    return (
      <Layout loggedIn>
        <LoggedInHome user={user} />
      </Layout>
    );
  }

      return (
        <Layout>
          <Home />
        </Layout>
      );
};
