import { useEffect } from "react"
import Hero from "./include/Hero"
import About from "./include/About"
import Services from "./include/Services"
import Doctors from "./include/Doctors"
import Departments from "./include/Departments"
import Blog from "./include/Blog"

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Hero />
            <About />
            <Services />
            <Doctors />
            <Departments />
            <Blog limit={3} />
        </>
    )
}
export default Home