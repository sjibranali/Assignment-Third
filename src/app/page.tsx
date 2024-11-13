import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero"
import ProjectManagement from "./components/PM";
import UseAsExtension from "./components/UseAsExtension";
import Customise from "./components/Customise";
import YourWork from "./components/YourWork";
import OurSponsors from "./components/OurSponsors";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <div className="w-">
    <Navbar></Navbar>
    <Hero/>
    <ProjectManagement/>
    <UseAsExtension/>
    <Customise/>
    <YourWork/>
    <OurSponsors/>
    <Footer/>
    </div>
  );
}
