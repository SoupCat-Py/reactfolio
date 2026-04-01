import ProjectCard from "../components/ProjectCard.tsx";
import styles from "./Projects.module.css";

export default function Projects () {
    return (
        <section id="projects" className={`bg - bg d-flex flex-col align-center justify-start g6 ${styles.main}`}>
            <div className="d-flex flex-col align-center justify-center g1">
                <h1 className="color-primary m0">My Projects</h1>
                <h3 className="color-text m0">kjsdh klsjadhf kljasdf lkjhasdkljhasdfjkhlasdfl kjh</h3>
            </div>
            <div className={`d-flex flex-row ${styles.wrapper}`}>
                <ProjectCard
                    title="NMS Leyline Calculator"
                    description="A web-based tool to find 3-star deposits in No Man's Sky. trying to make this multiline"
                    image="nmslc"
                    link="nmscd.com/leylinecalc"
                    repo="github.com/nmscd/leylinecalc"
                />
                <ProjectCard
                    title="Zsh Cheat Sheet"
                    description="A simple reference to all the most common zshell commands."
                    image="zshcheatsheet"
                    link="zshcheatsheet.vercel.app"
                    repo="github.com/SoupCat-Py/codesheet2"
                />
            </div>
        </section>
    )
}