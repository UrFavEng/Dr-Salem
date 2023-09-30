import "./App.css";
import { Contact, Footer, Hero, Navbar } from "./components";

function App() {
  return (
    <>
      <Navbar />
      <div className="containerr">
        <Hero />
      </div>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
