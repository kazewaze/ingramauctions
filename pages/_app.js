import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0';

import '../styles/reset.css'
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}
