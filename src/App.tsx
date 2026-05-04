import Hero from "./sections/Hero.tsx";
import Projects from "./sections/Projects.tsx";
import Contact from "./sections/Contact.tsx";
import Footer from "./sections/Footer.tsx";
import Separator from "./components/Separator.tsx";

export default function App() {
  return (
    <div className="d-flex flex-col g0">

      <Hero/>

      <Separator paths={<>
        <path fill="#dbc13b" d="m0 10 35-7 15 9 12-6 13 5 15-9 10 5v22H0V15z"/>
        <path fill="#65a657" d="m0 10 30 3 32-3 15 7 23-5v17H0V15z"/>
        <path fill="#007d6d" d="m0 10 14 1 17 8 19-4 12 2 12-3 15-2 11 3v14H0z"/>
        <path fill="#004f60" d="m0 20 14-3 17 7 19-5 22 3 14-4 14 3v8H0z"/>
        <path fill="#152435" d="m0 25 14-2 21-1 15 5 12-3 21 2 17-2v6H0z"/>
      </>}/>

      <Projects/>

      <Separator paths={<>
        <path fill="#dbc13b" d="m0 14 15-1 17-5 15 4 15 2 15-8 13 6 10 2v16H0z"/>
        <path fill="#65a657" d="m0 14 17 2 15-2 10-1 18 4 8 1 15-4 17 2v14H0z"/>
        <path fill="#007d6d" d="m0 16 14 4 17-4 16 1 12 3 14-4 15 1 12 3v10H0z"/>
        <path fill="#004f60" d="m0 20 14-1 12 2 17-2 15 5 17-2 12-2 13 2v8H0z"/>
        <path fill="#152435" d="m0 25 14-2 21-1 12 3 12-3 21 2 20-2v10H0z"/>
      </>}/>

      <Contact/>

      <Separator paths={<>
        <path fill="#152435" d="M0 10 35 0l15 12 12-6 13 5 15-9 10 5v23H0V15z"/>
        <path fill="#004f60" d="m0 10 30 3 32-3 15 7 23-5v18H0V15z"/>
        <path fill="#007d6d" d="m0 10 14 1 17 8 19-4 12 2 12-3 15-2 11 3v15H0z"/>
        <path fill="#65a657" d="m0 20 14-3 17 7 19-5 22 3 14-4 14 3v9H0z"/>
        <path fill="#dbc13b" d="m0 25 14-2 21-1 15 5 12-3 21 2 17-2v6H0z"/>
      </>}/>

      <Footer/>

    </div>
  )
}
