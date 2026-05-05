import styles from "./Footer.module.css";
import type { ReactNode } from "react";

type LinkProps = {
  href: string;
  children: ReactNode;
}

const Link = ({href, children}: LinkProps) => {
  return(
    <a href={`https://${href}`} target="_blank" className={styles.link}>
      {children}
    </a>
  )
}

export default function Footer() {
  return (
    <section className="bg-primary color-bg d-flex flex-col justify-start align-start p2 g1">
      <h2 className="color-bg m0">Built by Soup</h2>
      <div className="d-flex flex-col justify-start align-start g025">
        <p>
          Most icons from&nbsp;
          <Link href="tabler.io/icons">Tabler</Link>
          &nbsp;and&nbsp;
          <Link href="svgrepo.com">SVG Repo</Link>
        </p>
        <p>
          Fonts from&nbsp;
          <Link href="fonts.google.com">Google Fonts</Link>
        </p>
        <p>
          © 2026 Soup Cat -&nbsp;
          <Link href="github.com/SoupCat-Py/reactfolio/">GitHub Repo</Link>
        </p>
      </div>
    </section>
  )
}