import Button from "./Button.tsx";
import styles from "./ProjectCard.module.css";
import type { ReactNode } from "react";

type ProjectCardProps = {
    title: string;
    description: ReactNode;
    image: string;
    link: string;
    repo: string;
}

export default function ProjectCard({title, description, image, link, repo}: ProjectCardProps) {
    return (
        <article className={`d-flex flex-col bg-bg border-primary radius-card ${styles.container}`}>
            <div className="d-flex flex-col align-start justify-center rel">
                <h3 className={`color-primary m0 abs ${styles.title} ${styles.topRounded}`}>{title}</h3>
                <img className={`${styles.topRounded} ${styles.image}`} src={`/${image}.webp`} alt={image}/>
            </div>
            <div className="d-flex flex-col align-start justify-start p2 g2">
                <span className="body color-text">
                    {description}
                </span>
                <div className="d-flex flex-row align-center justify-start g1">
                    <Button
                        href={`https://${link}`}
                        label="visit"
                        icon={<>
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M17 7l-10 10"/>
                            <path d="M8 7l9 0l0 9"/>
                        </>}
                    />
                    <Button
                        href={`https://github.com/${repo}`}
                        label="repo"
                        icon={
                            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"/>
                        }
                    />
                </div>
            </div>
        </article>
    )
}
