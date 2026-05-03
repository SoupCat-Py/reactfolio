import pfp from "../images/pfp.png"
import styles from "./Hero.module.css"
import Button from "../components/Button.tsx";
import { differenceInDays } from "date-fns";

function GetGradDifference()  {
    const bigDay = new Date(2026,5,5);  // June 5
    const today = new Date();

    if (today > bigDay) {
        return "🎉 I Graduated!";
    }
    else {
        const difference = differenceInDays(
          new Date(bigDay.getFullYear(), bigDay.getMonth(), bigDay.getDate()),
          new Date(today.getFullYear(), today.getMonth(), today.getDate())
        );
        return `🎓 Grad in ${difference} days!`;
    }
}

export default function Hero() {

    return (
        // empty wrapper so the svg can live outside the main content
        <>
        {/* this is where the main content is */}
        <section className={`d-flex flex-col align-start justify-start g2 zmax ${styles.container}`}>

            {/* the big header and image */}
            <div className="d-flex flex-row align-center justify-center g2">
                <img
                  src={pfp} alt="me"
                  className={`border-light bg-light ${styles.image}`}
                />
                <div className="d-flex flex-col align-start justify-center">
                    <h1 className="color-primary m0">Hi I'm Soup</h1>
                    <h2 className="color-text m0">I make stuff</h2>
                    <span className={`bg-light small color-text d-flex flex-row g025 radius-card ${styles.countdown}`}>
                        {GetGradDifference()}
                    </span>
                </div>
            </div>

            {/* the bio text */}
            <p className={`body color-text ${styles.body}`}>Hello! I'm a Canadian high school student, currently learning frontend web development with&nbsp;
                <a href="https://react.dev" target="_blank" className={styles.link}>React</a>.
                Before this, I used to dabble in simple desktop apps made with Python and a library called&nbsp;
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
              preserveAspectRatio="xMidYMid meet"
              className={`abs ${styles.maple}`}
            >
                <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                   fill="#1D2C3E" stroke="none">
                    <path d="
                        M1642 4948 c-102 -846 -105 -870 -130 -900 -15 -18 -34 -28 -50 -28
                        -15 0 -132 18 -260 41 -128 23 -235 39 -238 36 -3 -3 157 -277 356 -609 394
                        -656 390 -648 334 -696 -22 -19 -35 -23 -63 -19 -20 3 -193 87 -386 186 -192
                        99 -356 180 -362 181 -9 0 -13 -22 -14 -77 0 -43 -4 -127 -8 -186 -11 -162 21
                        -146 -424 -209 -202 -29 -367 -55 -367 -58 0 -3 110 -146 245 -318 135 -173
                        248 -324 251 -337 9 -35 -9 -61 -128 -181 l-110 -111 58 -21 c1075 -369 1462
                        -506 1479 -523 19 -18 20 -36 25 -259 l5 -240 210 121 c770 444 797 459 837
                        459 43 0 88 -21 106 -50 6 -9 85 -262 177 -561 92 -299 169 -546 171 -549 8
                        -7 206 64 210 75 3 6 -95 245 -216 530 -137 320 -222 534 -223 556 -2 47 18
                        85 57 108 21 13 208 49 591 116 308 54 563 101 567 104 4 3 -60 87 -142 185
                        -118 141 -150 186 -150 209 0 20 119 228 410 712 226 376 410 687 410 692 0 5
                        -69 15 -152 22 -154 13 -200 26 -213 58 -4 10 -13 191 -21 403 -8 212 -15 393
                        -16 403 -2 15 -64 -20 -308 -173 -168 -106 -315 -196 -328 -201 -41 -16 -83
                        15 -207 150 l-120 130 -12 -27 c-6 -15 -79 -187 -162 -382 -89 -210 -159 -362
                        -172 -372 -39 -33 -101 -22 -123 21 -8 14 -62 330 -120 701 -59 371 -110 683
                        -114 694 -7 15 -34 -13 -156 -160 -179 -216 -187 -224 -231 -224 -31 0 -67 31
                        -392 335 -197 184 -361 335 -364 335 -3 0 -11 -42 -17 -92z
                    "/>
                </g>
            </svg>


        </>)
}
