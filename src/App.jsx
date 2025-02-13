import CreateGlobalStyle from "./styles/GlobalStyles";
import Sectionone from "./components/Sectionone";
import Sectiontwo from "./components/Sectiontwo";
import Sectionthree from "./components/Sectionthree";
import Sectionfour from "./components/Sectionfour";
import Sectionfive from "./components/Sectionfive";
import Sectionsix from "./components/Sectionsix";
import Footer from "./ui/Footer";
export default function App() {
  return (
    <>
      <CreateGlobalStyle />
      <div className="app">
        <Sectionone />
        <Sectiontwo />
        <Sectionthree />
        <Sectionfour />
        <Sectionfive />
        <Sectionsix />
        <Footer />
      </div>
    </>
  );
}
