import { GlobalStyle } from "./styles/global";
import { Navbar } from "./components/Navbar";
import { Presentation } from "./components/Presentation";
import { BackgroundImage } from "./components/BackgroundImage";
import { About } from "./components/About";
import { Work } from "./components/Work";
import { Footer } from "./components/Footer";

import { BrowserRouter as Router } from 'react-router-dom';

export function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Navbar/>
      <Presentation />
      <BackgroundImage />
      {/* <About /> */}
      <Work />
      <Footer/>
    </Router>
  );
}