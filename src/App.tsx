import Hero from "./sections/Hero.tsx";
import sep1 from "./images/sep1.svg"

export default function App() {
    return (
        <div className="d-flex flex-col g2">
            <Hero/>
            <img src={sep1} alt="sep" />
        </div>
    )
}