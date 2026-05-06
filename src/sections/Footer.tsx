import styles from "./Footer.module.css";
import type { ReactNode } from "react";

type LinkProps = {
  link: string;
  children: ReactNode;
}

const Link = ({link, children}: LinkProps) => {
  return(
    <a href={`https://${link}`} target="_blank" className={styles.link}>
      {children}
    </a>
  )
}

export default function Footer() {
  return (
    <section className="bg-primary color-bg d-flex flex-col justify-start align-start p2 g1">
      <h2 className="m0 inverse-select">
        Built by Soup
      </h2>
      <div className="d-flex flex-col justify-start align-start g025">
        <p className="inverse-select">
          Most icons from&nbsp;
          <Link link="tabler.io/icons">Tabler</Link>
          &nbsp;and&nbsp;
          <Link link="svgrepo.com">SVG Repo</Link>
        </p>
        <p className="inverse-select">
          Fonts from&nbsp;
          <Link link="fonts.google.com">Google Fonts</Link>
        </p>
        <p className="inverse-select">
          © 2026 Soup Cat -&nbsp;
          <Link link="github.com/SoupCat-Py/reactfolio/">GitHub Repo</Link>
        </p>
      </div>
    </section>
  )
}
