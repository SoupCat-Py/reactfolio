import pfp from "../images/pfp.png"
import styles from "./Hero.module.css"
import Button from "../components/Button.tsx";

export default function Hero() {
    return (
        // empty wrapper so the svg can live outside the main content
        <>
        {/* this is where the main content is */}
        <section className={`d-flex flex-col align-start justify-start g2 zmax ${styles.container}`}>

            {/* the big header and image */}
            <div className="d-flex flex-row align-center justify-center g2">
                <img src={pfp} alt="me" className={`border-light bg-light ${styles.image}`}/>
                <div className="d-flex flex-col align-start justify-center">
                    <h1 className="color-primary m0">Hi I'm Soup</h1>
                    <h2 className="color-text m0">I make stuff</h2>
                </div>
            </div>

            {/* the bio text */}
            <p className={`body color-text ${styles.body}`}>Hello! I'm a Canadian high school student, currently learning frontend web development with&nbsp;
                <a href="https://react.dev" target="_blank" className={styles.link}>React</a>.
                Before this, I used to make simple desktop apps in Python with a library called&nbsp;
                <a href="https://customtkinter.tomschimansky.com/" target="_blank" className={styles.link}>CustomTkinter</a>.
                Oh, and I (technically) use Arch btw :)
            </p>

            {/* the buttons */}
            <div className="d-flex flex-row justify-start align-center g1">
                <Button primary href="#projects" local label="my projects" icon={<>
                    <path d="M5 12l14 0"/>
                    <path d="M15 16l4 -4"/>
                    <path d="M15 8l4 4"/>
                </>}/>
                <Button href="https://github.com/SoupCat-Py" icon={<path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"/>}/>
                <Button href="mailto:soupcat.py@gmail.com" icon={<><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10"/><path d="M3 7l9 6l9 -6"/></>}/>
                <Button href="makerworld.com" icon={<>
                    <path d="m2,5  l5,-2 l5,2 l5,-2 l5,2  l0,14  l-5,2 l-5,-2 l-5,2 l-5,-2  l0,-14 z" />
                    <path d="m2,12  l5 -2 l10,4 l5,-2  l-5,-2 l-10,4 l-5,-2 z" />
                    <polygon points="2,5 7,3 7,10 2,12" fill="CurrentColor" />
                    <polygon points="7,14 12,12 12,19 7,21" fill="CurrentColor" />
                    <polygon points="12,5 17,3 17,10 12,12" fill="CurrentColor" />
                    <polygon points="17,14 22,12 22,19 17,21" fill="CurrentColor" />
                </>}
                />
            </div>
        </section>

        {/* maple leaf */}
        <svg xmlns="http://www.w3.org/2000/svg" width="650" height="650" viewBox="-2015 -2000 4030 4030" className={`abs ${styles.maple}`}>
            <title>CANADA YAY</title>
            <path fill="#1D2C3E" d="m-90 2030 45-863a95 95 0 0 0-111-98l-859 151 116-320a65 65 0 0 0-20-73l-941-762 212-99a65 65 0 0 0 34-79l-186-572 542 115a65 65 0 0 0 73-38l105-247 423 454a65 65 0 0 0 111-57l-204-1052 327 189a65 65 0 0 0 91-27l332-652 332 652a65 65 0 0 0 91 27l327-189-204 1052a65 65 0 0 0 111 57l423-454 105 247a65 65 0 0 0 73 38l542-115-186 572a65 65 0 0 0 34 79l212 99-941 762a65 65 0 0 0-20 73l116 320-859-151a95 95 0 0 0-111 98l45 863z"/>
        </svg>

    </>)
}
