import pfp from "../images/pfp.png"
import styles from "./Hero.module.css"
import Button from "../components/Button.tsx";

export default function Hero() {
    return (
        // main thing
        <section className={`bg-bg d-flex flex-col align-start justify-start g2 ${styles.container}`}>
            <div className="d-flex flex-row align-center justify-center g2">
                <img src={pfp} alt="me" className={`border-light bg-light ${styles.image}`}/>
                <div className="d-flex flex-col align-start justify-center">
                    <h1 className="color-primary m0">Hi I'm Soup</h1>
                    <h2 className="color-text m0">I make stuff</h2>
                </div>
            </div>

            <span className={`body color-text ${styles.body}`}>Hello! I'm a Canadian high school student, currently learning frontend web development with&nbsp;
                <a href="https://react.dev" target="_blank" className={styles.link}>React</a>.
                Before this, I used to make simple desktop apps in Python with a library called&nbsp;
                <a href="https://customtkinter.tomschimansky.com/" target="_blank" className={styles.link}>CustomTkinter</a>.
            </span>

            <div className="d-flex flex-row justify-start align-center g1">
                <Button primary href="#projects" local label="my projects" icon={<>
                    <path d="M5 12l14 0"/>
                    <path d="M15 16l4 -4"/>
                    <path d="M15 8l4 4"/>
                </>}/>
                <Button href="https://github.com/SoupCat-Py" icon={<path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"/>}/>
                <Button href="mailto:soupcat.py@gmail.com" icon={<><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10"/><path d="M3 7l9 6l9 -6"/></>}/>
                <Button href="https://bsky.app/profile/did:plc:db452l7ldyy2lj7qrndttlgb" icon={<path d="M6.335 5.144c-1.654 -1.199 -4.335 -2.127 -4.335 .826c0 .59 .35 4.953 .556 5.661c.713 2.463 3.13 2.75 5.444 2.369c-4.045 .665 -4.889 3.208 -2.667 5.41c1.03 1.018 1.913 1.59 2.667 1.59c2 0 3.134 -2.769 3.5 -3.5c.333 -.667 .5 -1.167 .5 -1.5c0 .333 .167 .833 .5 1.5c.366 .731 1.5 3.5 3.5 3.5c.754 0 1.637 -.571 2.667 -1.59c2.222 -2.203 1.378 -4.746 -2.667 -5.41c2.314 .38 4.73 .094 5.444 -2.369c.206 -.708 .556 -5.072 .556 -5.661c0 -2.953 -2.68 -2.025 -4.335 -.826c-2.293 1.662 -4.76 5.048 -5.665 6.856c-.905 -1.808 -3.372 -5.194 -5.665 -6.856"/>}/>
            </div>

        </section>
    )
}
