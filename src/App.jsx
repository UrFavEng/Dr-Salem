import "./App.css";
import { Footer, Hero, Navbar } from "./components";

function App() {
  return (
    <>
      <Navbar />
      <div className="containerr">
        <Hero />
      </div>
      <Footer />
    </>
  );
}

export default App;
