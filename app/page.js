import Aboutme from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Websitetypes from "@/components/Websitetypes";
import Projects from "@/components/Projects";
import Contactme from "@/components/Contactme";
export default function Home() {
  return (
   <>
   <Navbar/>
   <Aboutme/>
   <Skills/> 
   <Websitetypes/>
   <Projects/>
   <Contactme/>
   <Footer/>
   </>
  );
}
