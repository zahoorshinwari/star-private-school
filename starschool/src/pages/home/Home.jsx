import Products from "../product/Products"
import AboutUs from "./about/AboutUs"
import Classes from "./classes/Classes"
import Events from "./events/Events"
import Hero from "./hero/Hero"
import StudentService from "./student service/StudentService"



const Home = () => {
  return (
    <section>

      <Hero />
      <div className="max-w-screen-xl mx-auto">

        <Products />
      </div>
      <StudentService />
      <AboutUs />
      <Classes />
      <Events />

    </section>
  )
}

export default Home