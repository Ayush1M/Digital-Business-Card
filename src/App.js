import About from "./components/About";
import Interest from "./components/Interest";
import Info from "./components/Info";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="card-container">
      <Info />
      <About />
      <Interest />
      <Footer />
    </div>
  );
}

