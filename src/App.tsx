import Hero from "./sections/Hero.tsx";
import Projects from "./sections/Projects.tsx";
import sep1 from "./images/sep1.svg";
import sep2 from "./images/sep2.svg";

export default function App() {
    return (
        <div className="d-flex flex-col g2">
            <Hero/>
            <img src={sep1} alt="sep" />
            <Projects/>
            <img src={sep2} alt="sep" />
        </div>
    )
}