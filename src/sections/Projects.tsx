import ProjectCard from "../components/ProjectCard.tsx";
import styles from "./Projects.module.css";

export default function Projects () {
    return (
        <section id="projects" className={`bg-bg bg d-flex flex-col align-center justify-start ${styles.main}`}>
            <div className="d-flex flex-col align-center justify-center g1">
                <h1 className="color-primary m0">My Projects</h1>
                <h3 className="color-text m0">All the stuff I've made! It's all open-source too :D</h3>
            </div>
            <div className={`d-flex flex-row justify-center p2 ${styles.wrapper}`}>
                <ProjectCard
                    title="NMS Leyline Calculator"
                    description={<p>This little tool for No Man's Sky was my first real website. I made this one with raw HTML, CSS, and JavaScript, and I will admit that the code is very messy.<br></br>Anyway, I got some help from the No Man's Sky community <i>(they taught me about leylines and helped with translations)</i> to make a simple calculator that helps find 3-star deposits in the game :D</p>}
                    image="nmslc"
                    link="nmscd.com/leylinecalc"
                    repo="nmscd/leylinecalc"
                />
                <ProjectCard
                    title="Zsh Cheat Sheet"
                    description="A simple reference to all the most common zshell commands."
                    image="zshcheatsheet"
                    link="zshcheatsheet.vercel.app"
                    repo="SoupCat-Py/codesheet2"
                />
                <ProjectCard
                    title="PassGen"
                    description="A small yet customizable password generator."
                    image="passgen-web"
                    link="soup-passgen.netlify.app"
                    repo="SoupCat-Py/passgen-web"
                />
            </div>
        </section>
    )
}