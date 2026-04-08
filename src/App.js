import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Qualifications from "./components/qualifications/Qualifications";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";
import Work from "./components/work/Work";
import roleContent, { getSelectedRole } from "./roleConfig";

function App() {
  const selectedRole = getSelectedRole();
  const content = roleContent[selectedRole];

  return (
    <div className="App">
      <Header />
      <main className="main">
        <Home content={content} />
        <About content={content} />
        <Qualifications />
        <Work />
        <Skills content={content} />
        <Services />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </div>
  );
}

export default App;
