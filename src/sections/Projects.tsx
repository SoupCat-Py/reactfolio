import ProjectCard from "../components/ProjectCard.tsx";
import styles from "./Projects.module.css";
import SectionStyles from "./SectionStyles.module.css"
import type {ReactNode} from "react";

type LinkProps = {
  to: string;
  children: ReactNode;
}

function Link({to, children}: LinkProps) {
  return (
    <a href={to} target="_blank" className="link">{children}</a>
  )
}

export default function Projects() {
  return (
    <section id="projects" className={`bg-bg d-flex flex-col align-center justify-start ${SectionStyles.main}`}>
      <div className="d-flex flex-col align-center justify-center g1">
        <h1 className="color-primary m0">My Projects</h1>
        <h3 className="color-text m0 header-wrap text-center">All the stuff I've made! It's all open-source too :D</h3>
      </div>
      <div className={`d-flex flex-row justify-center p2 ${styles.wrapper}`}>
        <ProjectCard
          title="NMS Leyline Calculator"
          description={<p>This little tool for No Man's Sky was my first real website. I made this one with raw HTML,
            CSS, and JavaScript, and I will admit that the code is very messy.<br></br>Anyway, I got some help from the
            No Man's Sky community <i>(they taught me about leylines and helped with translations)</i> to make a simple
            calculator that helps find 3-star deposits in the game :D</p>}
          image="nmslc"
          link="nmscd.com/leylinecalc"
          repo="nmscd/leylinecalc"
        />
        <ProjectCard
          title="Zsh Cheat Sheet"
          description={<p>As someone who often forgets how commands like grep work, I found it pretty useful to make
            a little cheat sheet to quickly reference the most common commands I use. This was also my first time
            implementing a dark/light mode switcher and I'm quite proud of it!<br></br>I took some inspiration from&nbsp;
            <Link to="https://github.com/refact0r">refact0r's </Link>
            <Link to="https://betterdiscord.app/theme/midnight">Midnight theme </Link>
            for BetterDiscord.</p>}
          image="zshcheatsheet"
          link="zshcheatsheet.vercel.app"
          repo="SoupCat-Py/codesheet2"
        />
        <ProjectCard
          title="PassGen"
          description="I lowkey just wanted to make a password generator. This one lets you choose exactly what kinds
            of characters are in your password, and I made some neat animations for it."
          image="passgen-web"
          link="soup-passgen.netlify.app"
          repo="SoupCat-Py/passgen-web"
        />
      </div>
    </section>
  )
}
