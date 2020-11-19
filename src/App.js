import React, { useState } from "react";
import "./App.css";

// components
import Header from "./components/header/Header.jsx";
import Hero from "./components/body/hero/Hero.jsx";
import Tech from "./components/body/tech/Tech.jsx";
import Companies from "./components/body/companies/Companies.jsx";
import Testimonials from "./components/body/testimonials/Testimonials.jsx";
import Articles from "./components/body/articles/Articles";
import Socials from "./components/body/socials/Socials.jsx";

// functionalities
import englishText from "./assets/text/English.json";
// import portugueseText from "./assets/text/Portuguese.json";

function App() {
  const [language, setLanguage] = useState("English");
  const portugueseText = "Hold up"
  const textToBeSent = language === "English" ? englishText : portugueseText;

  const switchLanguage = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <div className="App">
      <Header {...textToBeSent.header} switchLanguage={switchLanguage} />
      <Hero {...textToBeSent.hero} />
      <Tech />
      <Companies {...textToBeSent.companies} />
      <Testimonials {...textToBeSent.testimonials} />
      <Articles {...textToBeSent.articles} />
      <Socials {...textToBeSent.socials} />
    </div>
  );
}

export default App;
