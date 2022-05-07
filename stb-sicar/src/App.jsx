import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { ConditionOdd } from "./components/conditionOdd";
import { Responsabilite } from "./components/responsabilite";
import { Fond } from "./components/fonds";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

//apollo client
const client = new ApolloClient({
  uri:'http://localhost:1337/graphql',
  cache: new InMemoryCache()
})

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <ApolloProvider client={client}>
    <div>
      <Navigation />
      <Header/>
      <About/>
      <Features data={landingPageData.Features} />
      <Fond />
      <Responsabilite />
      <ConditionOdd />
      <Services data={landingPageData.Services} />
      <Testimonials data={landingPageData.Testimonials} />

      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
    </div>
    </ApolloProvider>
  );
};

export default App;
