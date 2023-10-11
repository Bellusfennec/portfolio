import React from "react";
import Welcome from "./components/welcome";
import Footer from "./components/footer";
import Experience from "./components/experience";
import Contact from "./components/contact";
import Nav from "./components/nav";
import Portfolio from "./components/portfolio";

function App() {
  return (
    <>
      <Welcome />
      <Nav />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
