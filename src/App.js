import React, { useState } from "react";
import "./App.css";

// components
import Header from "./components/header/Header.jsx";
import Hero from "./components/body/hero/Hero.jsx";
import Tech from "./components/body/tech/Tech.jsx";
import Companies from "./components/body/companies/Companies.jsx";
import Testimonials from "./components/body/testimonials/Testimonials.jsx";
import Articles from "./componets/body/articles/Articles.jsx";
import SocialsContact from "./components/body/socials-contact/SocialsContact.jsx";

// functionalities
import englishText from "./assets/text/English.json";
import portugueseText from "./assets/text/Portuguese.json";

function App() {
  const [language, setLanguage] = useState("English");

  const textToBeSent = language === "English" ? englishText : portugueseText;

  const switchLanguage = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <div className="App">
      <Header {...textToBeSent} switchLanguage={switchLanguage} />
      <Hero {...textToBeSent.hero} />
      <Tech />
      <Companies {...textToBeSent.companies} />
      <Testimonials {...textToBeSent.testimonials} />
      <Articles {...textToBeSent.articles} />
      <SocialsContact {...textToBeSent.socials} />
    </div>
  );
}

export default App;
