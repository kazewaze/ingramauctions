import Link from 'next/link'
import Image from 'next/image'

import styles from '../styles/footer.module.css'

export default function Footer({ loggedIn }) {
  return (
    <footer className={styles.footer}>
      <h5>
        <Link href="/">
          <Image height={"50px"} width={"50px"} className={styles.logo} src="/favicon.png" alt="Ingram Auctions Gavel Logo"/>
        </Link>
      </h5>
      <ul className={styles.footerLinks}>
        <li key={"AboutKey"}>
          <Link href="/about">
            About
          </Link>
        </li>
        { loggedIn ? (
            <li key={"LogoutKey"}>
              <Link href="/api/auth/logout">Logout</Link>
            </li>
            ) : (
              <li key={"LoginKey"}>
                <Link href="/api/auth/login">Login</Link>
              </li>
          )}
      </ul>
      <p>Copyright © 2022 Ingram Auctions</p>
    </footer>
  )
}